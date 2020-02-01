const Data = require('../../Collections/users')

module.exports = (req,res) => {

    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$push: {'cart': req.body.item}},
        (err, data)=> {
            if (err) throw err
            else console.log(data)
        }
    )
}