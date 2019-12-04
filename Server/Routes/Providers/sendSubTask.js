const Data = require('../../Collections/users')
const moment = require('moment')
module.exports = (req,res) => {
    var task = {
        providerId: req.user._id,
        providerName: req.user.fullName,
        text: req.body.text,
        finished: 'Active',
        dueDate: req.body.date,
        dateAssigned: moment().format('MMMM-DD-YYYY')
    }

    if(req.body.date == 'no'){
        task.dueDate = moment().add(1, 'weeks')
    }

    Data.findOneAndUpdate(
    {'email': req.body.email},
    {$push: {'subscription.subTasks': task}},
    {safe: true, upsert: true, new: true},
        (err) => {
            if (err) console.log(err)
        }
    )
}