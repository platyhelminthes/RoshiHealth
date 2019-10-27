const Data = require('../../Collections/users')


module.exports = (req,res) => {

    var time = req.body.time
    var day = req.body.day

    if(day == 'monday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.monday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'tuesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.tuesday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'wednesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.wednesday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'thursday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.thursday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'friday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.friday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'saturday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.saturday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'sunday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.sunday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }


}