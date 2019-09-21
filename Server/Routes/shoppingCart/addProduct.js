var Data = require('../../Collections/users')

module.exports = (req, res, next) => {
    var cost = req.body.price
    var item = {
        name: req.body.name,
        itemId: req.body.productId,
        cost: req.body.price,
        amount: 1,
        totalCost: req.body.price
    }
    Data.findOneAndUpdate(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$push: {"shoppingCart.$[element].items": item}, $inc: {"shoppingCart.$[element].total": cost}},
        {arrayFilters: [{'element.finishedTransaction': "Active"}], safe: true, upsert: true},
        function(err) {
        console.log(err);
    });
}