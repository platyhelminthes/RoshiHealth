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
const accountSid = 'AC493982b1daab2cac3e130cb21667b49f';
const authToken = 'f2a62cab033dc1915ebf4ae35729bfda';
const tclient = require('twilio')(accountSid, authToken);
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

cron.schedule("0 13 * * *", function() {
  
  Data.find().exec((err, res)=>{
    for(var i=0; i < res.length; i++){
      var appointments = []
      for(var j=0; j<res[i].appointments.length; j++){
        var day = moment(res[i].appointments[j].date).format('YYYY-MM-DD')
        if(moment(day).isSame(moment().format('YYYY-MM-DD'))){
          appointments.push('<p>With ' + res[i].appointments[j].userName + ' at ' + moment(res[i].appointments[j].date).format('LT') + '</p>')
        }
      }

      if(appointments == ''){console.log('no appointments')}
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
     html: '<h1 style="color: red">Hello ' + res[i].fullName + ' this is Roshi Health reminding you that you have appointments today</h1> <p>Appointments</p>' + appointments// plain text body
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


cron.schedule("0 19 * * *", function() {
  
  Data.find().exec((err, res)=>{
    for(var i=0; i < res.length; i++){
      var appointments = []
      for(var j=0; j<res[i].appointments.length; j++){
        var day = moment(res[i].appointments[j].date).format('YYYY-MM-DD')
        if(moment(day).isSame(moment().add(1, 'days' ).format('YYYY-MM-DD'))){
          
          appointments.push(' with ' + res[i].appointments[j].userName + ' at '+ moment(res[i].appointments[j].date).format('LT'))
        }
      }

      if(appointments == '' || res[i].texts == false || res[i].phone == null){console.log('Unable to send text')}
      else{
    
     tclient.messages
     .create({
        body: 'Hello ' + res[i].fullName + 'this is Roshi Health reminding you that you have appointments tomorrow ' + appointments,
        from: '+12566702453',
        to: res[i].phone
      })
     .then(message => console.log(message.sid));
    
    }}

  })
});

cron.schedule("00 */1 * * *", function() {
  
  Data.find().exec((err, res)=>{
    for(var i=0; i < res.length; i++){
      var appointments = []
      for(var j=0; j<res[i].appointments.length; j++){
        var hour = moment(res[i].appointments[j].date).format('YYYY-MM-DD-HH')
        var now = moment().subtract(8, 'hours').format('YYYY-MM-DD-HH')
        if(hour == now){
            appointments.push('With ' + res[i].appointments[j].userName + ' at '+ moment(res[i].appointments[j].date).format('LT'))
        }
      }
      if(appointments == '' || res[i].texts == false || res[i].texts == undefined || res[i].phone == null || res[i].hourReminders == false){console.log('Unable to send text for ' + res[i].email)}
      else {
        
           tclient.messages
           .create({
              body: 'Hello ' + res[i].fullName + ' this is Roshi Health reminding you that you have an upcoming appointment ' + appointments,
              from: '+12566702453',
              to: res[i].phone
            })
           .then(message => console.log(message.sid));
   }
  }
 })
});

cron.schedule("00 18 * * *", function() {
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
 to: 'dvowen@cox.net', // list of receivers
 subject: 'Appointment soon!', // Subject line
 html: 'Current Server Time: ' + moment().format('LT')// plain text body
  };

client.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
})

cron.schedule("00 */1 * * *", function() {
  
  Data.find().exec((err, res)=>{
    for(var i=0; i < res.length; i++){
      var appointments = []
      for(var j=0; j<res[i].appointments.length; j++){
        var hour = moment(res[i].appointments[j].date).format('YYYY-MM-DD-HH')
        var now = moment().subtract(8, 'hours').format('YYYY-MM-DD-HH')
        if(hour == now){
            appointments.push(' with ' + res[i].appointments[j].userName + ' at '+ moment(res[i].appointments[j].date).format('LT'))
        }
      }

      if(appointments == '' || res[i].email == 'emilyswanson95@gmail.com'){console.log('no appointments')}
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
     subject: 'Appointment soon!', // Subject line
     html: '<h1 style="color: red">Hello '+ res[i].fullName +' this is Roshi Health reminding you that you have an appointment soon!</h1>' + appointments// plain text body
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