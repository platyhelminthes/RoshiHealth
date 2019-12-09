const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'subscription.subTasks.$[element].finished': 'Finished'}, $inc: {'game.exp': 2}},
        {arrayFilters: [{'element._id': req.body.id}], safe: true, upsert: true, new : true},
        function(err) {
            console.log(err);
        }
    )
}