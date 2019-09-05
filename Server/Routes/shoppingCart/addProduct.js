var Data = require('../../Collections/users')

module.exports = (req, res, next) => {

    var id = req.body.productId
    var total= req.body.total
    console.log(total)
    Data.findOneAndUpdate(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$push: {"shoppingCart.$.itemIds": id},
        $set: {"shoppingCart.$.total": total}},
        {safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    });
}