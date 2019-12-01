const Data = require('../../Collections/users')



module.exports = (req, res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {}}
    )
}