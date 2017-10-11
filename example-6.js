// const res = "a".concat("b").concat("c")
// res is called a semi group: appen prepend, asociativity also, addition isn a semi group

//const res = [1,2].concat([3,4]).concat([5, 6])
// Can also do this:
// const res = [1,2].concat([3,4].concat([5.6]))

// const Sum = x =>
// ({
//   x,
//   concat: o =>
//     Sum(x + o.x),
//   inspect: () =>
//     `Sum(${x})`
// })

// Semi-gropus: type with a concat method that is associative - Do again!

const Sum = x =>
({
  x,
  concat: ({x: y}) =>
    Sum(x + o.x),
  inspect: () =>
    `Sum(${x})`
})

const res = Sum(1).concat(Sum(2))

true && false // false
true && true // true

// Concat is not a safe operation because if there is no first ellement it mcht fail, reduce is however safe

console.log(res)
