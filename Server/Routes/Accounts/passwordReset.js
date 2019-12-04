const Data = require('../../Collections/users')

module.exports = (req, res) => {
    var num = null
    Data.findOne(
        {'email': req.body.email},
        (err,data)=>{
            if (err) return console.log(err)
            return num=data.resetNum
        }
    )

    setTimeout(stepTwo, 300)

    function stepTwo(){
        if(req.body.resetNum == num){
            Data.findOneAndUpdate(
                {'email': req.body.email},
                {'password': req.body.password},
                (err, data)=>{
                    if(err) return console.log(err)
                    return console.log('password Reset')
                }
            )
        }
    }

}