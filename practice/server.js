const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const zod = require("zod");
const jwt = require("jsonwebtoken");
const privateKey = "somekey";


const mongoClient = require("mongodb");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/users");
const User = mongoose.model("user_list", {username:String,password:String});

const whitelist = ["http://localhost:3000", "null"];
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
app.use(express.json());

const userSchema = zod.object({
    username: zod.string(), 
    password: zod.string(),
});

app.get("/users", async function (req, res) {
    console.log("in verification");
    let token = req.headers.authorization;
    try {
        const payload = jwt.verify(token, privateKey);
        const allUsers = await User.find();
        return res.status(200).json({
        msg: "verified",
        users: allUsers
    });
    } catch (err) {
        return res.status(403).json({
        msg: "Invalid reason",
    });
    }
});

app.post("/signup", async function (req, res) {
    console.log("sign up.");
    const inputDto = req.body;
    const response = userSchema.safeParse(inputDto);
    if(response.success){
        const existingUser = await User.findOne({username:inputDto.username});
        if(existingUser){
            return res.status(400).send("Username already exists");
        }
        const newUser = new User({username:inputDto.username, password:inputDto.password});
        newUser.save();
        res.json({ msg: "ok" });
    }
    else{
        res.json({msg:"Bad request"}).status(400);
    }
});

app.post("/signin", async function(req, res){
    const inputDto = req.body;
    const response = userSchema.safeParse(inputDto);
    if(response.success){
        const user = await User.findOne({username: inputDto.username});
        if(!user){
            return res.status(400).send("Username not found");
        }
        if(inputDto.password != user.password){
            return res.status(401).send("Incorrect credentials");
        }
        var token = jwt.sign({username:inputDto.username},privateKey);
        return res.json({token, username: inputDto.username});
    }
    else{
        res.json({msg:"Bad request"}).status(400);
    }
})


app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});