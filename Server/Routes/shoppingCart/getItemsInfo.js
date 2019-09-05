Data = require('../../Collections/products')

module.exports = (req,res) => {
    Data.findById(
        req.body.id,
        (err, data) => {
            console.log(data)
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        }
    )
}