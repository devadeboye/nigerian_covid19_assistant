const assert = require('assert');
const fetchData = require('../lib/fetch-data');

describe('Fetch data test', () => {
    it('death record type should be number', async () => {
        let data = await fetchData.getNationalSummary();
        assert.strictEqual(typeof(data.death), 'number')
    })

    it('state records should be 37', async () => {
        let data = await fetchData.getFullNationalDetails();
        assert.strictEqual(data.states.length, 37)
    })
})