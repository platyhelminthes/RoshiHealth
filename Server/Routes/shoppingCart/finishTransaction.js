const Data = require('../../Collections/users')

module.exports = (req, res) => {

    function step2(){
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {$push: 
                {'shoppingCart': cart}
            },
            function(err) {
                console.log(err);
            }
        )
    }

    function step3() {
        Data.findOneAndUpdate(
            {'email': req.user.email},
            {
                $set: {
                    'subLevel': 'A1237'
                }
            },
            function(err) {
                console.log(err);
            }
        )
    }


    var cart = {
        total: 0,
        finishedTransaction: 'Active'
    }



    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$set: 
            {'shoppingCart.$[element].finishedTransaction': "Finished"},
        },
        {arrayFilters: [{'element.finishedTransaction': "Active"}]},
        function(err) {
            console.log(err);
        }
    )
    .then(
        setTimeout(step2, 2000)
    )
    .then(
        setTimeout(step3, 4000)
        )
}