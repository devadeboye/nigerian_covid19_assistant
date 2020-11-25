const assistant = require('./lib/assistant.js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

const bob = new assistant.Assistant('Bob');

bob.greet();

readline.question(
    `
        How may i help you today?

        Press 1 to check national summary of Nigeria Covid-19 statistics
        Press 2 to see statistics for all states.
        press ctrl + c to exit.
    `, choice => {
    
    if (choice == 1) {
        bob.presentNationalSummaryData();
    } else if (choice == 2) {
        bob.presentFullDetails()
    }
    readline.close()
  })
