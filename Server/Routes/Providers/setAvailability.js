const Data = require('../../Collections/users')


module.exports = (req,res) => {

    var time = req.body.time
    var day = req.body.day

    if(day == 'Monday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.monday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Tuesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.tuesday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Wednesday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.wednesday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Thursday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.thursday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Friday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.friday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Saturday'){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: {'providerInfo.availability.saturday': time}},
            {safe: true, upsert: true},
            function(err) {
                console.log(err);
            }
        )
    }

    else if(day == 'Sunday'){
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