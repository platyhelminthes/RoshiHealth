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
    data.tasks.id = 1;
    data.tasks.text = "Set up meeting with nurse";
    data.tasks.dueDate = Date.now;
    data.reciepts.id = 0;
    data.reciepts.total = 0

   
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
}