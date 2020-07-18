// * Create a basic server using Express.JS and heroku
const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// start up express app to handle data parsing
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// * Create a few array variables that will hold the data
var waitlist = [
{
    name:"",
    phoneNumber:"",
    email:"",
    uniqueId:"Shan",
}
]

var tables = [
{
    name:"Shannon Sagehorn",
    phoneNumber:"314-974-8036",
    email:"srsagehorn@gmail.com",
    uniqueId:"Shan"
}
]

// HTML get requests
app.get("/", function (req, res) {
    res.sendFile(path.join(___dirname, "/public/index.html"))
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(___dirname, "/public/tables.html"))
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(___dirname, "/public/reservations.html"))
})

app.get("/api/tables", function(req, res) {
    return res.json(tables)
})

app.get("/api/reservations", function(req, res) {
    return res.json(waitlist)
})

// post info to respective arrays based on number of tables available
app.post("/api/tables", function (req, res) {
    var newTable = req.body
        if (tables.length < 5) {
            tables.push(newTable);
            res.json(true)
        }
        waitlist.push(newTable)
        res.json(true)
})

// starts the server to begin llistening
app.listen(PORT, function() {
    console.log("App listening" + ${PORT})
})