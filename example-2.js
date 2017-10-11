// Need another explanation on this!!
const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

// Map is a type of composition

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g, ''))

const moneyToFloat = str =>
  Box(str)
  .map(s => s.replace(/\$/g, ''))
  .fold(r => parseFloat(r))

const percentToFloat = str =>
  Box(str.replace(/\$/g, ''))
  .map(replaced => parseFloat(replaced))
  .fold(number => number * 0.01)

// Nesting with clojures

// Box captures something in a context
const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost => // cost is captured in a clojure here so we can continue on capturing more and more var by casting
    percentToFloat(discount)
    .fold(savings =>
      cost - cost * savings))

// const percentToFloat = str => {
//   const replaced = str.replace(/\$/g, '')
//   const number = parseFloat(replaced)
//   return number * 0.01
// }

// const applyDiscount = (price, discount) => {
//   const cost = moneyToFloat(price)
//   const savings = percentToFloat(discount)
//   return cost - cost * savings
// }

const

const result = applyDiscount('$5.00', '20%')
console.log(result)
