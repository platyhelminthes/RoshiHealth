const Data = require('../../Collections/users')

module.exports = (req, res) => {
    console.log(req.body.Price)
    var cost = req.body.Price
    var item = {
        name: req.body.Type,
        itemId: req.body.productId,
        docType: req.body.docType,
        cost: req.body.Price,
        amount: req.body.ammount,
        totalCost: req.body.Price
    }
    Data.findOneAndUpdate(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$push: {"shoppingCart.$[element].items": item}, $inc: {"shoppingCart.$[element].total": cost*req.body.ammount}},
        {arrayFilters: [{'element.finishedTransaction': "Active"}], safe: true, upsert: true},
        function(err) {
        console.log(err);
    });
}