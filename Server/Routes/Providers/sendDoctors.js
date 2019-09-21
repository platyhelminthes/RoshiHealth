const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'_id': req.body.id},
        {$push: {'doctorsToAdd': req.body.name}},
        {safe: true, upsert: true, new: true},
        (err) => {
            if (err) console.log(err)
        }
    )
}