// const res = "a".concat("b").concat("c")
// res is called a semi group: appen prepend, asociativity also, addition isn a semi group

//const res = [1,2].concat([3,4]).concat([5, 6])
// Can also do this:
// const res = [1,2].concat([3,4].concat([5.6]))

const Sum = x =>
({
  x,
  concat: o =>
    Sum(x + o.x)
})

const res = Sum(1).concat(Sum(2))

console.log(res)
