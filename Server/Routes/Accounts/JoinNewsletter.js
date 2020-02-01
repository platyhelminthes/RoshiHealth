const Data = require('../../Collections/NewsLetter')

module.exports = (req, res) => {
    const { email, name } = req.body;
    Data.find(
        {"email": email},
        (err, data) => {
            if(err){console.log(`Error: ${err}`)}
            else if(data){
                
                if(data == ''){
                    console.log('hello')
                    let account = new Data();


                    account.name = name
                    account.email = email;
               
                    account.save((err) => {
                        if (err) return res.json({ success: false, error: err });
                        return res.json({ success: true });
                    })
                }
                console.log(`Data: ${data}`)
            }
            }
        )
}