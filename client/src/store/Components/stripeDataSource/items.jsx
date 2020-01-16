import Axios from 'axios'


function getProducts(type, limit){
    return Axios.post('/api/store/getAllProducts', 
    {
        type: type,
        limit: limit,

    })
    .then((res) => res.data)
}

export default getProducts