var express = require("express");
var session = require("express-session");
const dotenv = require('dotenv')
const cron = require("node-cron");
dotenv.config()
const mongoose = require('mongoose')
var routes = require('./Server/Routes')
var app = express();
var port = process.env.PORT || 3001;
var passport = require("./Server/Routes/passport");
//var db = require('./models')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', routes);

cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
});

const dbRoute = 'mongodb+srv://Devon:Jakeybear5@holisticpatterns-dwbsh.azure.mongodb.net/EcommerceDB?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

let DB = mongoose.connection;

DB.once('open', () => console.log('connected to the database'));
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));


//db.sequelize.sync({ force: true}).then(function() {
    app.listen(port, function() {
      console.log("App listening on PORT " + port);
    });
//  });

var path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}



