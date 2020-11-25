const fetchData = require('./lib/fetch-data.js')

const foo = async () => {
    let x = await fetchData.getNationalSummary()
    console.log(x)
}

const bar = async () => {
    let x = await fetchData.getFullNationalDetails()
    console.log(x)
}

foo()
bar()