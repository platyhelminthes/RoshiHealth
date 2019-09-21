const Data = require('../../Collections/users')


module.exports = (req, res) => {
    var id = req.body.id

    Data.find(
        {'_id': id},
        (err, data) => {
            if(err) return res.json({success: false, error: err})
            else return res.json({success: true, data: data })
        }
    )
}