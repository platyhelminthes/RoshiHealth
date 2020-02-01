var stripe = require('stripe')(process.env.SECRET);

module.exports = (req, res) => {
    console.log('hello')
    // get a list of stripe products based on passed parameters
    stripe.products.list(
  {
    limit: req.body.limit,
    type: req.body.type
    },
    //return the list to the front end
  function(err, products) {
    if(err) return err
    else {
        return res.json({products: products.data, success: true})}
  }
);
}