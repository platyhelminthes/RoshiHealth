const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.find(
        {'fullName': { "$regex": req.body.name, "$options": "i" }, 'providerInfo.providerType': {$ne: 'Patient'}},
        (err, data)=>{
            if(err){res.json(err)}
            else{
                res.json(data)
            }
        }
    )
}