const fetchData = require('./lib/fetch-data.js')

const foo = () => {
    let x = fetchData.getNationalSummary().catch(()=>{})
    console.log(x)
}
foo()