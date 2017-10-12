const { Map, List} = require('immutable-ext')
const { Sum } = require('./monoid')

// the put everything in a monoid first and than sum it is so common that we
// have a foldMap function


const res = List.of(1,2,3)
            .map(Sum)
            .fold(Sum.empty())

const res = [Sum(1), Sum(2), Sum(3)]
            .fold(Sum, Sum.empty())

console.log(res)
