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

//    var task = {
//        id: 1,
//        text: "Set up meeting with nurse",
//        dueDate: Date.now
//    }
    data.fullName = fullName
    data.email = email;
    data.password = password;
    //data.tasks = task
    //data.reciepts.id = 0;
    //data.reciepts.total = 0

   
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
}