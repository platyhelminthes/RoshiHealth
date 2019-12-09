const stripe = require("stripe")(process.env.SECRET)
const uuidv4 = require('uuid/v4')

async function charge (req,res){
        console.log(JSON.stringify(req.body));
      
        let error;
        let status = 'failed';
        try {
          const {
            product,
            quantity,
            csrfToken,
            currency = 'usd',
            description,
            stripeBillingAddressCity,
            stripeBillingAddressCountry,
            stripeBillingAddressLine1,
            stripeBillingAddressState,
            stripeBillingAddressZip,
            stripeBillingName,
            stripeEmail,
            stripeShippingAddressCity,
            stripeShippingAddressCountry,
            stripeShippingAddressLine1,
            stripeShippingAddressState,
            stripeShippingAddressZip,
            stripeShippingName,
            stripeToken,
            stripeTokenType,
          } = req.body;
      
          // TODO: Assert not a CSRF.
      
          let amount = 10000
      
          // TODO: Lookup existing customer or create a new customer.
          // TODO: Save relevant billing and shipping address information.
          const customer = await stripe.customers.create({
            email: stripeEmail,
            source: stripeToken,
            name: req.user.name,
            metadata: {
              userId: req.user.id,
            },
          });
          var charges = null
          if (stripeTokenType === 'card') {
            const idempotency_key = uuidv4();
            const charge = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                subscription_data: {
                  items: [{plan: 'plan_GKG8vYgszNDHyL', quantity: 1}],
                },
                success_url: 'https://roshi-health.herokuapp.com/home/success',
                cancel_url: 'https://roshi-health.herokuapp.com/home/canceled',
              })
              charges = charge
            console.log('charge:');
            console.log(JSON.stringify(charge));
          } else {
            throw Error(`Unrecognized Stripe token type: "${stripeTokenType}"`);
          }
      
          status = 'success';
        } catch (err) {
          console.error(err);
          error = err;
        }
      
        res.json({ error, status, charges });
}

module.exports = charge