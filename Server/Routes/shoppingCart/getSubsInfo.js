const Data = require('../../Collections/products')

module.exports = (req, res) => {
    Data.findOne(
        {"Name": "subscription"}, (err, data) => {
            console.log(data)
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        });
        console.log(res.data)
}