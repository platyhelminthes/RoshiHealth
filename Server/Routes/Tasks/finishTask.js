const Data = require('../../Collections/users')

module.exports = (req, res) => {
var id = req.body.id
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'tasks.$[element].finished': 'Finished'}, $inc: {'game.exp': 1}},
        {arrayFilters: [{'element._id': id}], safe: true, upsert: true, new : true},
        function(err) {
            console.log(err);
        })

}