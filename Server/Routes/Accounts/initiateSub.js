const Data = require('../../Collections/users')
const moment = require('moment')

module.exports = (req,res) => {

    nurse = {
        name: 'Nurse Girl',
        id: '5dc474c765f8a15d9c9f0a77',
        initialConsultation: false
    }
    dietitian = {
        appointmentTokens: 1
    }

    healthCounselor = {
        appointmentTokens: 4
    }

    subscription = {
        dietitian: dietitian,
        nurse: nurse,
        healthCounselor: healthCounselor,
        started: moment(),
        yearMark: moment().add(1, 'years'),
        months: 0
    }

    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: {
        'subLevel': 'AD1279D1',
        'subscription': subscription}},
        {safe: true, upsert: true, new: true},
        (data, err) => {
            if (err) console.log('new sub')
            else console.log('error making sub: ' + data)
        }
    )
}