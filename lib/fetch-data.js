const fetch = require('node-fetch')
const baseUrl = 'nigerian-covid-19-api.herokuapp.com'


const getNationalSummary = async () => {
    const endpoint = `${baseUrl}/summary`
    const response = await fetch(endpoint, {
        method: "GET",
        headers:{
            "Contenet-Type": "application/json"
        },
    });
    
    const nationalSummaryData = await response.json()
    return nationalSummaryData
}

const getFullNationalDetails = async () => {
    const endpoint = `${baseUrl}/details`
    const response = await fetch(endpoint, {
        method: "GET",
        headers:{
            "Contenet-Type": "application/json"
        },
    });
    
    const fullNationalDetailsData = await response.json()
    return fullNationalDetailsData
}

exports.getFullNationalDetails = getFullNationalDetails
exports.getNationalSummary = getNationalSummary

//console.log(getNationalSummary().catch(() => {}))
//getNationalSummary().catch(() => {})