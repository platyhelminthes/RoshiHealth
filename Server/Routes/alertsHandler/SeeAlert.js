const Data = require('../../Collections/users')




module.exports = (req, res) => {
Data.findByIdAndUpdate(
    id,
    {'alerts.$[element].seen': true},
    {arrayFilters: [{'element._id': req.body.id}], safe: true, upsert: true, new : true},
)

}