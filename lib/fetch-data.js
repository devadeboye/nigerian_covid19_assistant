const fetch = require('node-fetch');
const baseUrl = 'https://nigerian-covid-19-api.herokuapp.com';

const getNationalSummary = async () => {
    const endpoint = `${baseUrl}/summary`;
    try {
        let response = await fetch(endpoint, {
            method: "GET",
            headers:{
                "Contenet-Type": "application/json"
            },
        });

        return(await response.json());
    }catch (err) {
        console.log("unable to connect! check your internet connection.");
    }
}


const getFullNationalDetails = async () => {
    const endpoint = `${baseUrl}/details`;
    try {
        let response = await fetch(endpoint, {
            method: "GET",
            headers:{
                "Contenet-Type": "application/json"
            },
        });

        return(await response.json());
    }catch (err) {
        console.log(err);
    }
}

exports.getFullNationalDetails = getFullNationalDetails;
exports.getNationalSummary = getNationalSummary;