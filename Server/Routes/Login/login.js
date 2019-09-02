var Data = require('../../Collections/users')

module.exports = (req, res) => {
Data.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;
 
   user.comparePassword(req.body.password, function(err, isMatch) {
         if (err) throw err;
         console.log(req.body.password, isMatch);
     });
 });
    res.json('hello')
}