const Box = require('./box')

const res = Box(x => y => x + y).ap(Box(2)) // Box(3)
console.log(res)
