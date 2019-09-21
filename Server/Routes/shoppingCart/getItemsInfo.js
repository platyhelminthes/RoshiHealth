Data = require('../../Collections/users')
module.exports = (req,res) => {

    Data.find(
        {'email': req.user.email},
        {'shoppingCart': {$elemMatch: {'finishedTransaction': 'Active'}}},
        (err, data) => {
            if(err) {return res.json({success: false, error: err})}
            else{return res.json({success: true, data:data})}
        }
    )
    
}