// * Create a basic server using Express.JS and heroku
var express = require("express")
var path = require("path")

var app = express()
var PORT = process.env.PORT || 3000

// start up express app to handle data parsing
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
app.get("/home", function (req, res) {
    res.sendFile(path.join(___dirname, "/index.html"))
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(___dirname, "/tables.html"))
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(___dirname, "/reservations.html"))
})
// post info to respective arrays based on number of tables available
app.post("/api/tables", function (req, res) {
    function deciding () {
        if (tables.length , 5) {
            var newTable = req.body
            tables.push(newTable);
        }
        waitlist.push(newTable)
        res.json(true)
    }
})

// starts the server to begin llistening
app.listen(PORT, function() {
    console.log("App listening" + ${PORT})
})

// * Use jQuery to run AJAX calls to GET and POST data from users to the Express server
// ### DEMO for reference: 
// [http://hot-restaurant.herokuapp.com](http://hot-restaurant.herokuapp.com)
// ---------------------
// ## Phase III - For this third phase, aim to complete the following
// * Backend Team:
// Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data
// Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).
// * Frontend Team:
// Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits localhost:3000/tables... they should be shown the table.html page.)
// If you finish early begin creating the code necessary to convert your form data into JSON objects.
// ---------------------
// ## Phase IV - For this fourth phase, aim to complete the following
// * Backend Team:
// Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).
// You should be using Postman to do all your testing at this point.
// * Frontend Team:
// Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests.
// Then create the necessary code on your tables.html page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.
// Then create the necessary code on your reserve.html page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data.
// All: This is the most challenging part of today's activity. Be persistent! You can do this!
// ---------------------
// ## Phase V - For the fifth and final phase, aim to complete the following
// All:
// Complete any remaining functionality from the previous phase if you need more time.
// Then, thoroughly test your application for bugs. Check if there are any obvious ways to crash the application.
// Then, if you have more time -- begin to tackle any bonus of your choice:
// * Add buttons for "checking off" individuals from the reservation list. Once this happens, the next person on the waitlist should be addd to the main reservation list.
// * Add code to your server so that it "counts" every time a person visits any of the pages. Display a running count on the website.
// * Add a button for sending emails to individuals on the wait-list letting them know they have a table ready. You will need to use node-mailer or a similar npm package to make this work. (A hard task, but very cool).
// * Add a button for sending text messages to individuals on the wait-list letting them know they have a table ready. You will need to use the Twilio library to make this work. (A hard task, but very cool).
// ---------------------
// ## VIDEO WALKTHROUGH
// Please code along before class on Tuesday!
// [https://www.youtube.com/watch?v=G7RvQMW2DOg&feature=youtu.be&list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr](https://www.youtube.com/watch?v=G7RvQMW2DOg&feature=youtu.be&list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr)