// u have been using Functors
// law that preserves function composition when mapping


// 1st Law: those 2 must produce the same result
// fx.map(f).map(g) == fx.map(x => g(f(x)))
const res1 = Box("squirels")
              .map(s => s.substr(5))
              .map(s => s.toUpperCase())

const res2 = Box("squirels")
              .map(s => s.substr(5).toUpperCase())

// 2nd Law:
// fx.map(id) == id(fx)

const id = x => x

const res3 = Box("crayons").map(id)
const res2 = id(Box("crayons"))
