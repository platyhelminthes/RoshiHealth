var Data = require('../../Collections/users')

module.exports = (req, res) => {
    let data = new Data();

    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.email = email;
    data.password = password;
   
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
}