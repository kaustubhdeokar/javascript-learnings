const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const zod = require('zod');
const jwt = require('jsonwebtoken');

const privateKey = "somekey";

const USERS = [
    {
        username:'user1@gmail.com',
        password:'password'
    },
    {
        username:'user2@gmail.com',
        password:'password'
    },
    {
        username:'user3@gmail.com',
        password:'password'
    }
]

const whitelist = ['http://localhost:3000', 'null'];
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
app.use(bodyParser.json());

const userSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

app.get('/fetchusers',function(req, res){
    console.log('in verification');
    let token = req.headers.authorization;
    try{
        const payload = jwt.verify(token, privateKey);
        return res.status(200).json({
            msg:"verified"
        })
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid reason"
        })
    }
})

app.post('/login',function(req, res){
    console.log("IN LOGIN");
    const inputDto = req.body;
    const response = userSchema.safeParse(inputDto);
    let len = USERS.length;
    for(let i=0;i<len;i++){
        let user = USERS[i];
        if(user.username == inputDto.username && user.password==inputDto.password){
            var token = jwt.sign({username:inputDto.username},privateKey);
            return res.json({token});
        }
    }
    res.json({msg:"ok"});    
})
app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
})