//Just for testing. Only run once.
const Data = require('../../Collections/products')

module.exports = (req,res) => {
    let data = new Data

    data.Name = "subscription"
    data.Type = "subscription"
    data.Price = 250
    data.Stock = "NA"

    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    })
}