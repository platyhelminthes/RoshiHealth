var Data = require('../../Collections/users')

module.exports = (req, res, next) => {
    var task = {
        providerId: req.user._id,
        providerName: req.user.fullName,
        text: req.body.task
    }
    console.log(task)
    console.log(req.body.email)
    Data.findOneAndUpdate(
        {"email": req.body.email},
        {$push: {"tasks": task}}, 
        {safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    });
}