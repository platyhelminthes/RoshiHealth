const Data = require('../../Collections/users')

module.exports = (req, res) => {
var id = req.body.id
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'tasks.$[element].finished': 'Finished'}},
        {arrayFilters: [{'element._id': id}], safe: true, upsert: true, new : true},
        function(err) {
            console.log(err);
        })

}