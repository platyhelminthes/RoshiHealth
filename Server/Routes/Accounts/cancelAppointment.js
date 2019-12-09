const Data = require('../../Collections/users')

module.exports = (req, res) => {
    Data.findOneAndUpdate(
        {'email': req.user.email},
        {$inc: {'wallet': req.body.price}, $pull: {'appointments': {'_id': req.body.id}}},
        (err, Data) => {
            if(err) console.log(err)
            else console.log(Data)
        }
    )

    Data.findOneAndUpdate(
        {'_id': req.body.docId},
        {$pull: {'appointments': {'date': req.body.date}}, $inc: {'pay': -req.body.price}}
    )
}