var Data = require('../../Collections/users')

module.exports = (req, res) => {
    console.log(req.body.email)
    console.log(req.body.type)
    if(req.user.providerInfo.providerType != "AWD331"){console.log('Only admins may use this feature!')}
    else{
    Data.findOneAndUpdate(
        {'email': req.body.email},
        {$set: {'providerInfo.providerType': req.body.type}},
        {safe: true, upsert: true, new: true},
        function(err) {
            console.log(err);
        }
        )
    }

}