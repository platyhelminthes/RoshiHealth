const Data = require('../../Collections/users')

module.exports = (req, res) => {
var idSearch = []
var search = []
Data.findOne(
    {'email': req.user.email},
    (err,data)=>{
        if (err) return console.log(err)
        return idSearch=data.providers
    }
    
).then(
    setTimeout(step2, 300)
)

function step2(){
        for(var i=0;i<idSearch.length;i++){
            search.push(idSearch[i].providerId)
            console.log('done once')
        }

        Data.find(
            {_id: {$in: search}},
            (err,data)=>{
                if (err) return res.json({ success: false, error: err });
                return res.json({ success: true, data: data});
            }
        )
    
}
}