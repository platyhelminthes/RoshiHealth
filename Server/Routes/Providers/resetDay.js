const Data = require('../../Collections/users')

module.exports = (req,res) => {

    if (req.body.day == 'monday'){
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {'providerInfo.availability.monday': []}},
        (err, data) => {
            if (err) console.log(err)
            else console.log('Schedule reset')
        }

    )}
    else if (req.body.day == 'tuesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.tuesday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'wednesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.wednesday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'thursday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.thursday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'friday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.friday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'saturday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$set: {'providerInfo.availability.saturday': []}},
            (err, data) => {
                if (err) console.log(err)
                else console.log('Schedule reset')
            }
    
        )
    }
    else if (req.body.day == 'sunday'){
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