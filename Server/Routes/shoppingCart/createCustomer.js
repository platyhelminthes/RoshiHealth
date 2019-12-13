const Data = require('../../Collections/users')
var stripe = require('stripe')('sk_test_wmByYTxHfH2aqnvMMGSJG05t00O0YJxd3o');
const moment = require('moment')



function createSub(req){
    nurse = {
        name: 'Nurse Girl',
        id: '5dc474c765f8a15d9c9f0a77',
        initialConsultation: false
    }
    dietitian = {
        id: '5dccdcc3e7df9c41d0761d70',
        name: 'Ken Block',
        appointmentTokens: 1
    }

    healthCounselor = {
        id: '5db78296de3ec929b46d1af5',
        name: 'Dr Devon',
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
    Data.findOneAndUpdate(
        {'fullName': nurse.name},
        {$push: {'providerInfo.patientIds': req.user._id}},
        {safe: true, upsert: true, new: true},
        (data, err) => {
            if (err) console.log('new sub')
            else console.log('error making sub 2: ' + data)
        }
    )
    Data.findOneAndUpdate(
        {'fullName': dietitian.name},
        {$push: {'providerInfo.patientIds': req.user._id}},
        {safe: true, upsert: true, new: true},
        (data, err) => {
            if (err) console.log('new sub')
            else console.log('error making sub 2: ' + data)
        }
    )
    Data.findOneAndUpdate(
        {'fullName': healthCounselor.name},
        {$push: {'providerInfo.patientIds': req.user._id}},
        {safe: true, upsert: true, new: true},
        (data, err) => {
            if (err) console.log('new sub')
            else console.log('error making sub 2: ' + data)
        }
    )
}





module.exports = (req, res) => {

    var number = false
    if(req.user.phone) number == req.user.phone
    const invoiceSettings = {
        default_payment_method: req.body.cardId
    }
    stripe.customers.create(
        {
          description: 'Customer for jenny.rosen@example.com',
          email: req.user.email,
          name: req.user.name,
          payment_method: req.body.cardId,
          phone: number,
          invoice_settings: invoiceSettings

        },
        function(err, customer) {
            if(err) console.log(err)
            console.log(customer)
            stripe.subscriptions.create(
                {
                  customer: customer.id,
                  items: [{plan: 'plan_GKG8vYgszNDHyL', quantity: 1}],
                },
                function(err, subscription) {
                  if(err) console.log(err)
                  if(subscription){createSub(req)}
                }
              );
        }
      );

}