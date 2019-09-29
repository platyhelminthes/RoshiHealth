const stripe = require("stripe")("sk_test_wmByYTxHfH2aqnvMMGSJG05t00O0YJxd3o")

async function charge (req,res){
    console.log(req.body.body)
    try {
        let {status} = await stripe.charges.create({
          amount: 2000,
          currency: "usd",
          description: "An example charge",
          source: req.body.body
        });
    
        res.json({status});
      } catch (err) {
        res.status(500).end();
      }
}

module.exports.charge = charge