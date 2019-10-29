const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.findOne(
        {'email': req.user.email}
    ).select('appointments').sort('').exec(    
        (err,data)=>{
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    })
}