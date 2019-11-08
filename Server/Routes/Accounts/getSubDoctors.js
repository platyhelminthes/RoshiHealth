const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.find(
        {_id: {$in: req.body.search}},
        (err, data) => {
            if (err) console.log(err)
            else return res.json({ success: true, data: data});
        }
    )
}