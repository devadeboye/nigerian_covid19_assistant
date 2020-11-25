const assistant = require('./lib/assistant.js');
const bob = new assistant.Assistant('Bob');

bob.greet();
// bob.presentNationalSummaryData();
//bob.presentFullDetails();