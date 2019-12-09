const Data = require('../../Collections/users')

module.exports = (req, res) => {
    if(req.body.type == 'Health Counselor'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$inc: {'subscription.healthCounselor.appointmentTokens': 1}, $pull: {'appointments': {'_id': req.body.id}}},
            (err, Data) => {
                if(err) console.log(err)
                else console.log(Data)
            }
        )

        Data.findOneAndUpdate(
            {'_id': req.body.docId},
            {$pull: {'appointments': {'date': req.body.date}}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('app removed')
            }
        )
    }
    else if(req.body.type == 'Dietitian'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$inc: {'subscription.dietitian.appointmentTokens': 1}, $pull: {'appointments': {'_id': req.body.id}}},
            (err, Data) => {
                if(err) console.log(err)
                else console.log(Data)
            }
        )
        Data.findOneAndUpdate(
            {'_id': req.body.docId},
            {$pull: {'appointments': {'date': req.body.date}}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('app removed')
            }
        )
    }
    else if(req.body.type == 'Nurse'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$pull: {'appointments': {'_id': req.body.id}}},
            (err, Data) => {
                if(err) console.log(err)
                else console.log(Data)
            }
        )
        Data.findOneAndUpdate(
            {'_id': req.body.docId},
            {$pull: {'appointments': {'date': req.body.date}}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('app removed')
            }
        )
    }
}