const Data = require('../../Collections/NewsLetter')


module.exports = (req, res) => {
    Data.find(
        (err, data)=>{
           if (err) return err
           else return res.json({data: data, success: true}) 
        }
    )
}