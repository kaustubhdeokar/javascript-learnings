const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(bodyParser.json()); //This is an example of middleware.
const zod = require('zod');


const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin)!=-1 || !origin){
            callback(null, true);
        }
        else{
            callback(new Error('not allowed'));
        }
    }
}
app.use(cors(corsOptions));


const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

app.post('/health-checkup', function(req, res){
    const inputDto = req.body;
    const response = userSchema.safeParse(inputDto);
    console.log(response);
    res.send(response.success);
})

app.get("/trail", (req,res)=> {
    res.send("All good.");
})

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
})