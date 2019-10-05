const Data = require('../../Collections/users')

module.exports = (req, res) => {
    console.log(req.body.type)
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'shoppingCart.$[element].items.$[element2].amount': req.body.ammount, 'shoppingCart.$[element].total': req.body.Price},},
        {arrayFilters:[{'element.finishedTransaction': "Active"}, {'element2.docType': req.body.type}], safe: true, upsert: true},
        function(err) {
        console.log(err);
    })
}