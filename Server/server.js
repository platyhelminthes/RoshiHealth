var express = require("express");
var session = require("express-session");
var path = require("path");

const mongoose = require('mongoose')
var cors = require('cors');
var routes = require('./Routes')
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors());
var passport = require("./Routes/passport");
var
//var db = require('./models')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', routes);


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
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//  });


var path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}