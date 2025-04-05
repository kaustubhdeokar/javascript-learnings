const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post('/health-checkup',function(req, res){
    const id = req.query.id;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "user1" && password != "pass"){
        res.status(403).json({
            msg: "user doesn't exist"
        });
        return;
    }
    res.send("Your heart is healthy");
})

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
})