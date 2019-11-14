const Data = require('../../Collections/users')

module.exports = (req, res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {'subscription.nurse.initialConsultation': true},
        (err) => {
            if(err){return err}
        }

    )
}