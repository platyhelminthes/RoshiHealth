var stripe = require('stripe')(process.env.SECRET);

module.exports = (req, res) => {
    // get the SKU of an object
    stripe.skus.list(
  {
    product: req.body.productId
    },
    //return the SKU
  function(err, products) {
    if(err) return err
    else {
        return res.json({products: products.data, success: true})}
  }
);
}