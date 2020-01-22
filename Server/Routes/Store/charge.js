const stripe = require('stripe')(process.env.SECRET);

module.exports = (req, res) => {
    var email = null
    var shipping = {
        address: {
            line1: null,
            city: null,
            country: 'USA',
            postal_code: null,
            state: null
        },
        name: null
    }
    if(req.user){
        email = req.user.email
        shipping.address.line1 = req.user.address.street
        shipping.address.city = req.user.address.city
        shipping.address.postal_code = req.user.address.postalcode
        shipping.address.state = req.user.address.state
        shipping.name = req.user.fullName
    }
    else{
        email = req.body.email
        shipping.address.line1 = req.body.street
        shipping.address.city = req.body.city
        shipping.address.postal_code = req.body.zip
        shipping.address.state = req.body.state
        shipping.name = req.body.name
    }
    stripe.charges.create({
        amount: req.body.total,
        currency: 'usd',
        capture: true,
        receipt_email: email,
        shipping: shipping,
        source: req.body.source

    }).then(
        (err, res)=>{
            if(err) console.log(err)
            else console.log(res)
        }
    )
}