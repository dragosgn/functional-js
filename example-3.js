// const Either = Right || Left

// Pure function error handling and code branching

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

// has nullable cases and it gives and exception
// const findColor = name =>
//   ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]

const findColor = name => {
  fromNullable(({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name])
}

const result = findColor('red')
                .map(c => c.slice(1))
                  .fold(e => 'no color',
                        c => c.toUpperCase())


console.log(result)
