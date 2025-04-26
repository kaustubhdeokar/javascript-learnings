const express = require("express");
const cors = require("cors");
const {
  createTodoSchema,
  idTodoSchema,
  updateTodoSchema,
  completeTodoSchema,
} = require("./types");
const { Todo } = require("./db");
const app = express();
app.use(express.json());
const PORT = 3000;

const whitelist = ["http://localhost:5173", "null"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed"));
    }
  },
};

app.use(cors(corsOptions));

app.post("/add", async function (req, res) {
    const inputDto = req.body;
    const parsedInput = createTodoSchema.safeParse(inputDto);
    if (!parsedInput.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    });
    return;
    }
    // add to mongoose
    try {
        await Todo.create({
        title: parsedInput.data.title,
        description: parsedInput.data.description,
        completed: false,
        });
        res.status(200).json({
        msg: "Todo created",
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
        msg: "Internal server error",
        });
    }
});

app.get("/notifications", async function(req, res){
  res.status(200).json({
    "network":Math.ceil(Math.random()*10),
    "jobs":Math.ceil(Math.random()*12),
    "messages":Math.ceil(Math.random()*11),
    "notification":Math.ceil(Math.random()*9)
  })
})

app.get("/:id", async function (req, res) {
    const result = await Todo.findById(req.params.id).exec();
    res.status(200).json({ todos: result });
});

app.get("/", async function (req, res) {
  console.log("get called");
  const result = await Todo.find().exec();
  console.log(result);
  res.status(200).json({ todos: result });
});

app.put("/", async function (req, res) {
  const inputDto = req.body;
  const updateInput = updateTodoSchema.safeParse(inputDto);
  if (!updateInput.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  const todo = {
    title: updateInput.data.title,
    description: updateInput.data.description,
    completed: updateInput.data.completed,
  };
  const id = updateInput.data.id;
  await Todo.findByIdAndUpdate(id, todo);
  res.json({ msg: "Updated" });
});

app.put("/completed", async function (req, res) {
  const inputDto = req.body;
  const updateInput = completeTodoSchema.safeParse(inputDto);
  if (!updateInput.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  const todo = {
    completed: updateInput.data.completed,
  };
  const id = updateInput.data.id;
  await Todo.findByIdAndUpdate(id, todo);
  res.json({ msg: "Updated" });
});

app.delete("/", async function (req, res) {
  const inputDto = req.body;
  const parsedInput = idTodoSchema.safeParse(inputDto);
  if (!parsedInput.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await Todo.delete;
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
