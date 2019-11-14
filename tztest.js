const axios = require('axios')

const country = 'United States'
const state = 'CA'
const city = 'Anaheim'
const street = '903 South Emerald Street'

runCommand = (a, b, c, d) => {
axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json',
    {
        'params': {
            'app_id': 'cknViiHbBitKALTfsgfS',
            'app_code': '6FGojQdspXZo83PgXlLqng',
            'query': a+', '+b+', '+c+', '+d,
            'maxresults': 1
        }
    }).then(
        (res)=>{
            console.log(res.data.suggestions[0].address)
            if(city == res.data.suggestions[0].address.city){
                console.log(c)
            }
            else(console.log(b))
        }
    )
}

runCommand(country, state, city, street)