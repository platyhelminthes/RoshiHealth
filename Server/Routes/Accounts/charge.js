const Data = require('../../Collections/users')

module.exports = (req, res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'wallet': -req.body.price}},
        (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data});
        }
    )
}