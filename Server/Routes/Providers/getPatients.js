const Data = require('../../Collections/users')

module.exports = (req,res) => {
    id=req.user.providerInfo.patientIds
    Data.find(
        {_id: {$in: id}},
            (err,data)=>{
                if (err) return res.json({ success: false, error: err });
                return res.json({ success: true, data: data });
            }
    )
}