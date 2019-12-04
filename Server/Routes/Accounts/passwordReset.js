const Data = require('../../Collections/users')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

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
            bcrypt.hash(req.body.password, SALT_WORK_FACTOR)
            .then(hashedPassword => Data.findOneAndUpdate(
                {'email': req.body.email},
                {'password': hashedPassword},
                (err, data)=>{
                    if(err) return console.log(err)
                    return console.log('password Reset')
                }
            ))
        }
    }

}