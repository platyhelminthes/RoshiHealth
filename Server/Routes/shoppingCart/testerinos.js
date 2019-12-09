const stripe = require("stripe")(process.env.SECRET)
const uuidv4 = require('uuid/v4')

async function charge (req,res){
    let error;
    let status = 'failed';
    try {
        var charges = null
    const charge = await stripe.checkout.sessions.create({
        
        payment_method_types: ['card'],
        subscription_data: {
          items: [{plan: process.env.PLAN_KEY, quantity: 1}],
        },
        success_url: process.env.SUCCESS_URL,
        cancel_url: process.env.CANCEL_URL,
      })
      charges = charge
      status = 'success';
    }
    catch (err) {
        console.error(err);
        error = err;
      }
    
      res.json({ error, status, charges });
}

module.exports = charge