const Data = require('../../Collections/users')

module.exports = (req, res) => {

    var appointment = {
        date: req.body.date,
        user: req.user._id,
        userName: req.user.fullName
    }
    var userAppointment = {
        date: req.body.date,
        user: req.body.id,
        userName: req.body.name
    }
    var id = req.body.id

    Data.findOneAndUpdate(
        {_id: id},
        {$push: {'appointments': appointment}},
        {safe: true, upsert: true, new : true},
        (err) => {
            if(err) console.log(err)
            else console.log('nice')
        }
    )


        console.log(userAppointment)
        Data.findOneAndUpdate(
        {_id: req.user._id},
        {$push: {'appointments': userAppointment}},
        {safe: true, upsert: true, new: true},
        (err) => {
            if(err) console.log(err)
            else console.log('nice')
        }
    )
} 