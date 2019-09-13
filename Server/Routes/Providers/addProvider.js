const Data = require('../../Collections/users')

module.exports = (req, res) => {   
    provider = {
        providerId: req.body.id
    }
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'providers': provider}},
        {safe: true, upsert: true, new: true},
        (err,data)=>{
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
    )

}