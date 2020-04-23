const contentful = require('contentful')
const client = contentful.createClient({
  space: '322n3j1saoeo',
  accessToken: 'sDr0nado7s1ulBTfOcJ-vlrznGTpO4AOhL2njOTdEE8'
})


module.exports = (req, res) => {

    client.getEntries()
    .then((response) => res.json({data: response, success: true}))

}