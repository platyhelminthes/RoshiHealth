var Data = require('../../Collections/users')
const nodemailer = require('nodemailer')
const uuidv4 = require('uuid/v4');

module.exports = (req, res) => {
    let data = new Data();
    let confirmNum = uuidv4()
    const { fullName, email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'roshihealth@gmail.com',
               pass: 'Roshi123!'
           }
       });

    let link = '<a href="roshihealth.com/confirmAccount/'+confirmNum+'/'+ email +'" >Confirm your account</a>'
    
    const mailOptions = {
     from: 'roshihealth@gmail.com', // sender address
     to: email, // list of receivers
     subject: 'Thankyou for signing up', // Subject line
     html: '<h1 style="color: red">Welcome to the family</h1> <p>We hope you enjoy your stay</p>' + link// plain text body
      };
    //var task = {
    //    id: 1,
    //    text: "Choose an intake nurse and make an appointment with them."
    //}
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });

    var cart = {
        total: 0,
        finishedTransaction: 'Active'
    }  

    data.wallet = 0
    data.fullName = fullName
    data.email = email;
    data.password = password;
    //data.tasks.push(task)
    data.shoppingCart.push(cart)
    data.providerInfo.test = "Patient"
    //data.doctorsToAdd.push('Primary Doctor')
    data.subLevel = 'nonSub'
    data.confirmed = false
    data.confirmation = confirmNum
    console.log(data)
   
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    })

}