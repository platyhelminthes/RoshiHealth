var Data = require('../../Collections/users')

module.exports = (req, res) => {

res.send(req.user)

}