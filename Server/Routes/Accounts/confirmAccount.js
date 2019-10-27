let Data = require('../../Collections/users')

module.exports = async (req,res) => {
    let num = null
    Data.findOne(
        {'email': req.body.email},
        (err,data)=>{
            if (err) return console.log(err)
            return num=data.confirmation
        }
    )

    setTimeout(stepTwo, 300)    
    

    function stepTwo(){
        if(req.body.confirmation == num){
            Data.findOneAndUpdate(
                {'email': req.body.email},
                {'confirmed': true},
                (err) => {
                    if (err) console.log(err)
                }
            )
        }
        else(res.send('error wrong number'))
    }
    
}