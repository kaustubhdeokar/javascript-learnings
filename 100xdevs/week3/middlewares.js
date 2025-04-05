const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

function validateCredentials(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "user1" || password != "pass"){
        res.status(403).json({
            msg: "user doesn't exist"
        });
    }
    else{
        next();
    }
}


app.post('/health-checkup',validateCredentials, function(req, res){
    res.send("Your heart is healthy");
})


// suppose we want to use a middle ware for all the methods, we can do like 
// app.use(function-name)
// and for all methods after this line, the function-name middle ware will be automatically triggered.

