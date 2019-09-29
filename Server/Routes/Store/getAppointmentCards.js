const Data = require('../../Collections/products')

module.exports = (req,res) => {
    var input = req.body.input
    Data.find(
        {'Type': input},
        (err, data) => {
            if(err){return err}
            else{
                res.json({success: true, data:data})
            }
        }
    )

}