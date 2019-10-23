const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'wallet': -req.body.price}},
        {safe: true, upsert: true},
        function(err) {
            console.log(err);
        }
    )
}