var Data = require('../../Collections/users')

module.exports = (req, res, next) => {

    var id = req.body.productId
    var cost = req.body.price
    var total= req.body.total
    console.log(total)
    Data.findOneAndUpdate(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$set: {"shoppingCart.$[element].items.$.itemId": id}, $inc: {"shoppingCart.$[element].items.$.amount": 1, "shoppingCart.$[element].items.$.totalCost": cost, "shoppingCart.$[element].total": cost}},
        {arrayFilters: [{'element.finishedTransaction': "Active"}], safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    });
}