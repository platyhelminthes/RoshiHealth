var Data = require('../../Collections/users')

module.exports = (req, res, next) => {

    var id = req.body.id
    var cost = req.body.price
    Data.findOneAndUpdate(
        {"email": req.user.email, "shoppingCart.finishedTransaction": "Active"},
        {$inc: {"shoppingCart.$[element].items.$[element2].amount": -1, "shoppingCart.$[element].total": -cost}},
        {arrayFilters: [{'element.finishedTransaction': "Active"}, {'element2.itemId': id}], safe: true, upsert: true, new : true},
        function(err) {
        console.log(err);
    });
}