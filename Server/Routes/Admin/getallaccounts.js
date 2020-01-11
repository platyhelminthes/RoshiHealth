const Data = require('../../Collections/users')

module.exports = (req,res) => {
    Data.find(
        (err, Data)=>{
            if(err) return err
            else res.json({success: true, data: Data})
        }
    )
}