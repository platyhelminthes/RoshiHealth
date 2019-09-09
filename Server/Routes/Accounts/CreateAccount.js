var Data = require('../../Collections/users')

module.exports = (req, res) => {
    let data = new Data();

    const { fullName, email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }

    var task = {
        id: 1,
        text: "Set up meeting with nurse"
    }

    var cart = {
        total: 0,
        finishedTransaction: 'Active'
    }

    data.fullName = fullName
    data.email = email;
    data.password = password;
    data.tasks.push(task)
    data.shoppingCart.push(cart)
    console.log(data)
   
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    })

}