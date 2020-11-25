const fetch = require('node-fetch');
const fetchData = require('./fetch-data');
const baseUrl = 'https://nigerian-covid-19-api.herokuapp.com';

class Assistant {
    constructor(name) {
        this.name = name;
    }

    greet () {
        let message = `
        Hi! i'm ${this.name}
        I am here to help you with the latest
        covid19 statistics in Nigeria
        `;
        this.display(message);
        
    }

    display(message) {
        console.log(message);
    }

    async presentNationalSummaryData() {
        let data = await this.fetchNationalSummary();
        // let processedData = await (JSON.parse(data));
        let result = `
            SUMMARY OF COVID19 STATISTICS IN NIGERIA
            ----------------------------------------
            Total Confirmed Cases: ${data.totalConfirmedCases}
            Total Samples Tested: ${data.totalSamplesTested}
            Total Active Cases: ${data.totalActiveCases}
            Discharged: ${data.discharged}
            Death: ${data.death}
        `;
        this.display(result);
    }

    async presentFullDetails() {
        let data = await this.fetchFullDetails();
        this.display(data);
    }

    async fetchNationalSummary() {
        try {
            let data = await fetchData.getNationalSummary();
            return data;
        } catch(err) {console.error(err)}
    }

    async fetchFullDetails() {
        let x = await fetchData.getFullNationalDetails();
        console.log(x);
    }
}

exports.Assistant = Assistant;