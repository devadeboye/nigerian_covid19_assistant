const fetchData = require('./fetch-data');

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
        try {
            let data = await this.fetchNationalSummary();
            
            let result = `
                SUMMARY OF COVID-19 STATISTICS IN NIGERIA
                ----------------------------------------
                Total Confirmed Cases: ${data.totalConfirmedCases}
                Total Samples Tested: ${data.totalSamplesTested}
                Total Active Cases: ${data.totalActiveCases}
                Discharged: ${data.discharged}
                Death: ${data.death}
            `;
            this.display(result);
            
        } catch(err) {
            console.log('unable to complete request')
        }
    }

    async presentFullDetails() {
        try {
            let data = await this.fetchFullDetails();
            //this.display(data.states);
            console.log(`
                COVID-19 STATISTICS FOR EACH STATE IN NIGERIA
                ---------------------------------------------
            `);
            for await (let state of data.states) {
                let result = `
                State: ${state.state}
                Confirmed Cases: ${state.confirmedCases}
                Cases on Admission: ${state.casesOnAdmission}
                Discharged: ${state.discharged}
                Death: ${state.death}
                `;
                console.log(result);
            }
        }catch(err) {console.log(err)}
    }

    async fetchNationalSummary() {
        try {
            let data = await fetchData.getNationalSummary();
            return data;
        } catch(err) {console.log('error fetching data')}
    }

    async fetchFullDetails() {
        try {
            let data = await fetchData.getFullNationalDetails();
            return data;
        } catch(err) {console.log('error fetching data')}
    }
}

exports.Assistant = Assistant;