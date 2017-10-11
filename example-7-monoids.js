const Sum = x =>
  ({
    x,
    concat: ({x: y}) => Sum(x + y)
  })

  Sum.empty = () => Sum(0)

console.log(Sum(3).concat(Sum(6)))

const Product = x =>
({
  x,
  concat: ({x: y})
})
