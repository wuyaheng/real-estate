const axios = require("axios");
const fs = require("fs");

const REAL_URL = "https://realty-mole-property-api.p.rapidapi.com/saleListings"
const FILE_DESTINATION = "src/data.json"

const generateRealConfig = (page) => {
    return {
        method: 'GET',
        url: REAL_URL,
        params: {state: 'NY', offset: page*50},
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, 
          'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com'
        }
      }

}


let data = [];
const limit = 50;
let requestResolved = 0;

getData()

function getData() {
    axios.request(generateRealConfig(requestResolved)).then(
        res => {
            data = [...data, ...res.data]
            requestResolved++ 
            if (requestResolved > limit || res.data.length === 0) {
                let dataString = JSON.stringify(data);
                fs.writeFileSync(FILE_DESTINATION, dataString);
            } else {
                getData()
            }
        }
    ).catch(err => {
        console.log(err)
        console.log("saving data anyway")
        let dataString = JSON.stringify(data);
        fs.writeFileSync(FILE_DESTINATION, dataString);
    })
}

