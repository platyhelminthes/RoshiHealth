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
var Data = require('./Server/Collections/users')
const moment = require('moment')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport') 
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

cron.schedule("0 5 * * *", function() {
  
  Data.find().exec((err, res)=>{
    for(var i=0; i < res.length; i++){
      var appointments = []
      for(var j=0; j<res[i].appointments.length; j++){
        var day = moment(res[i].appointments[j].date).format('YYYY-MM-DD')
        if(moment(day).isSame(moment().format('YYYY-MM-DD'))){
          appointments.push(moment(res[i].appointments[j].date).format('LT'))
        }
      }

      if(appointments == []){console.log('no appointments')}
      else{
      var options = {
        service: 'SendGrid',
        auth: {
          api_user: 'fallenangel1996',
          api_key: 'Jakeybear5!'
        }
      }
   
    var client = nodemailer.createTransport(sgTransport(options));

      
    
    const mailOptions = {
     from: 'roshihealth@gmail.com', // sender address
     to: res[i].email, // list of receivers
     subject: 'Appointments today', // Subject line
     html: '<h1 style="color: red">You have appointments today</h1> <p>Appointments At</p>' + appointments// plain text body
      };
    client.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    }}

  })
});