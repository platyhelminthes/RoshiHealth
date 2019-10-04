const Data = require('../../Collections/users')

module.exports = (req, res) => {
    let token = {
        type: req.body.ATType,
        ammount: req.body.ATAmmount
    }


    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'appointmentTokens': token}},
        function(err) {
            console.log(err);
        }
    )
}