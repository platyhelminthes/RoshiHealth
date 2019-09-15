const Data = require('../../Collections/users')

module.exports = (req,res) => {
    var result = []
    
    Data.find(
        {'email': req.user.email}, 
        "tasks",
        (err, data) => {
            
            res.json({data: data})
                
        }
        
    )
}