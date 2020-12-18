const snkrBot = require('./bot')
const cron = require('node-cron')

snkrBot()

let counter = 1
let date = new Date()
console.log(date.toLocaleTimeString())
cron.schedule('* * * * *', () =>{
    console.log(counter)
    counter += 1
    date = new Date()
    snkrBot()
    console.log(date.toLocaleTimeString())
})
