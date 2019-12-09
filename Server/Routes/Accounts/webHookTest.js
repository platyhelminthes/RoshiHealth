const Data = require('../../Collections/users')
const stripe = require("stripe")(process.env.SECRET)



function handleCheckoutSession (a){
    Data.findOneAndUpdate(
        {'email': a.customer_email.toLowerCase()},
        {$inc: {'wallet': 10000}},
        (err, data) => {
            if(err) console.log(err)
        }
    )
}

module.exports = (req, res) => {

    const endpointSec = 'whsec_tjf74z8MIi0NzVjCIW8FGZBvguqBunGO'
    Data.findOneAndUpdate(
        {'email': 'dvowen@cox.net'},
        {$inc: {'wallet': 10000}},
        (err, data) => {
            if(err) console.log(err)
        }
    )
    const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSec);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Fulfill the purchase...
    handleCheckoutSession(session);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});


}