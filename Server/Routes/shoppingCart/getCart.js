const Data = require('../../Collections/users')

module.exports = (req, res) => {
    Data.findOne({"email": req.user.email}, {"shoppingCart":{$elemMatch: {"finishedTransaction": "Active"}}},
    (err, data) => {
        console.log(data.shoppingCart + "this is from cart")
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data.shoppingCart });
    })
}