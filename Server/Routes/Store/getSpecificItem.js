var stripe = require('stripe')(process.env.SECRET);

module.exports = (req, res) => {
    console.log('hello')
    // get a list of stripe products based on passed parameters
    stripe.products.retrieve(
        req.body.id,
    //return the list to the front end
        function(err, products) {
          if(err) return err
          else {
              console.log({response: 'Success!', data: products})
              return res.json({products: products, success: true})}
        }
);
}