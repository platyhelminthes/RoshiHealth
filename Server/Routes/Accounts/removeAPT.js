const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'appointmentTokens.$[element].ammount': -1}},
        {arrayFilters: [{'element.type': req.body.ATType}], safe: true, upsert: true},
        function(err) {
            console.log(err);
        }
    )
}