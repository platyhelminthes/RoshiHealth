var Data = require('../../Collections/users')

module.exports = (req, res, next) => {

    var id = req.body.productId
    var cost = req.body.price
    var total= req.body.total
    console.log(total)
    Data.findOneAndRemove(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$push: {"shoppingCart.$.itemIds": id},
        $inc: {"shoppingCart.$.total": '-'+cost}},
        {safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    });
}