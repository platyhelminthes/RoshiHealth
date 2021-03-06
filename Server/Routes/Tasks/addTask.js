var Data = require('../../Collections/users')

module.exports = (req, res, next) => {
    if(req.user.providerInfo.providerType == "Patient"){res.json({data: "failed"})}
    else{
    var task = {
        providerId: req.user._id,
        providerName: req.user.fullName,
        text: req.body.task,
        dueDate: req.body.date
    }
    let alert = {
        seen: false,
        alert: 'New Task!'
    }
    console.log(task)
    console.log(req.body.email)
    Data.findByIdAndUpdate(
        {_id: req.body.id},
        {$push: {"tasks": task, 'alerts': alert}},
        {safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    })}
}