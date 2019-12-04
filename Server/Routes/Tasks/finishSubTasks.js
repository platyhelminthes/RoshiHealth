const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'subscription.subTasks.$[element].finished': 'Finished'}},
        {arrayFilters: [{'element._id': req.body.id}], safe: true, upsert: true, new : true},
        function(err) {
            console.log(err);
        }
    )
}