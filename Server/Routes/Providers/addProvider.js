const Data = require('../../Collections/users')

module.exports = (req, res) => {
    
    var provider = {
        providerId: req.body.id
    }
    var type = req.body.type
    console.log(type)
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'providers': provider}, $pull: {'doctorsToAdd': type}},
        {safe: true, upsert: true, new: true},
        (err,data)=>{
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
    )

}