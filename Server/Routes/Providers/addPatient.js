const Data = require('../../Collections/users')

module.exports = (req,res) => {
    id = req.body.id
    Data.findByIdAndUpdate(
    id,
    {$push: {"providerInfo.patientIds": req.user._id}},
    {safe: true, upsert: true, new: true},
    (err,data)=>{
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    })
}