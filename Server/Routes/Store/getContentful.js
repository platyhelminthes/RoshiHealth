const contentful = require('contentful')
const client = contentful.createClient({
  space: '322n3j1saoeo',
  accessToken: 'sDr0nado7s1ulBTfOcJ-vlrznGTpO4AOhL2njOTdEE8'
})


module.exports = (req, res) => {

    client.getEntries({
        'content_type': 'product',
        'fields.id': req.body.id
    })
    .then((response) => res.json({data: response, success: true}))

}