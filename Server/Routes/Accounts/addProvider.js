const Data = require('../../Collections/users')

module.exports = (req,res) => {

    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'doctorsToAdd': req.body.name}},
        {safe: true, upsert: true, new: true},
        (err) => {
            if (err) console.log(err)
        }
    )


}