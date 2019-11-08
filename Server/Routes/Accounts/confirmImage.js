const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {'profilePicURL': req.body.image},
        (err, data) => {
            if (err) console.log(err)
            if (data) console.log(data)
        }
    )
}