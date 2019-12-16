const Data = require('../../Collections/users')

module.exports = (req,res) => {

    if (req.body.day == 'Monday'){
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'providerInfo.availability.monday': []}},
        (err, data) => {
            if (err) console.log(err)
            else console.log('Schedule reset')
        }

    )}
    else if (req.body.day == 'Tuesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.tuesday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'Wednesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.wednesday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'Thursday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.thursday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'Friday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.friday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'Saturday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.saturday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'Sunday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.sunday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
        )
    }
}