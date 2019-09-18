const Data = require('../../Collections/users')

module.exports = (req,res) => {
    var id=null


    Data.find(
        {'email': req.user.email},
        (err, data)=>{
            id = data[0].providerInfo.patientIds
        }
    ).then(setTimeout(search2, 300))


    function search2(){
        Data.find(
            {_id: {$in: id}},
                (err,data)=>{
                    if (err) return res.json({ success: false, error: err });
                    return res.json({ success: true, data: data });
                }
        )
    }
}