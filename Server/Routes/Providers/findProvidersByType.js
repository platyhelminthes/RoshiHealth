const Data = require('../../Collections/users')

module.exports = (req,res) => {
    var search = req.body.search
    Data.find(
        {"providerInfo.providerType": search},
        (err,data)=>{
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
        )
        
}