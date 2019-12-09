const Data = require('../../Collections/users')

module.exports = (req, res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'wallet': req.body.ammount}},
        (err) => {
            if (err) console.log(err)
        }
        
    )
}