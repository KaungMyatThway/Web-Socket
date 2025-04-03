let express = require('express')

//app setup
let app = express()

//server setup
let server = app.listen(9000,() => {
    console.log("project is running");
})

//route setup

app.get('/',(res,req) => {
    req.sendFile(__dirname + "/public/index.html")
})
