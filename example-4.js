const Right = x =>
({
  chain: f => f(x), // chain expects you to run a function and return another one
  map: f => Right(f(x)),
  fold: (f, g) => g(x), // captures the idea of removing a value out of its context
  inspect: () => `Right(${x})`
})

const Left = x =>
({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const fs = require('fs')

// composable type that dpes the righ thing when mapped or folded
const tryCatch = f => {
  try {
    return Right(f())
  } catch(e) {
    return Left(e)
  }
}

// const getPort = () => {
//   try {
//     const str = fs.readFileSync('config.json')
//     const config = JSON.parse(str)
//     return config.port
//   } catch(e) {
//     return 3000
//   }
// }

const getPort = () =>
  tryCatch(() => fs.readFileSync('config.json'))
  .chain(c => tryCatch(JSON.parse(c)))
  .fold(e => 3000,
        c => c.port)


const result = getPort()
console.log(result)
