const axios = require("axios");
const fs = require("fs");

const REAL_URL = "https://realty-mole-property-api.p.rapidapi.com/saleListings"

const REAL_CONFIG = {
    method: 'GET',
    url: REAL_URL,
    params: {state: 'NY'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com'
    }
  }


let data = [];
const limit = 1;
let requestResolved = 0;

getData()

function getData() {
    axios.request(REAL_CONFIG).then(
        res => {
            data = [...data, ...res.data]
            requestResolved++ 
            if (requestResolved > limit) {
                let dataString = JSON.stringify(data);
                fs.writeFileSync('src/data.json', dataString);
            } else {
                getData()
            }
        }
    )
}

