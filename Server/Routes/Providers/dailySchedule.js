const Data = require('../../Collections/users')

module.exports = (req, res) => {
    var day = {
        date: req.body.date,
        times: req.body.times
    }
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'providerInfo.availableDays': day}},
        {safe: true, upsert: true, new: true},
        (err,data)=>{
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }

    )
}