// Capture side-effects in a task
const Task = require("data.task")

Task.of(1) // acts just like a Box
.fork(e => console.log("err", e),
      x => console.log("succes", x))

Task.rejected(1) // acts just like a Box
.map(x => x + 1 ) // in the rejected case it ignores it alltogether
.fork(e => console.log("err", e),
      x => console.log("success", x))

Task.of(1)
.map(x => x + 1 )
.chain(x => Task.of(x + 1))
.fork(e => console.log("err", e),
      x => console.log("success", x))


const launchMissiles = () =>
  new Task((rej, res) => {
      console.log("Launch missiles!")
      res("missile")
  })

launchMissiles()
.map( x => x + "!")
.fork(e => console.log("err", e),
      x => console.log("success", x))

// if u don't fork, it will jsut not run


const app = launchMissiles().map(x => x + "!")
app.map(x => x + "!").fork(e => console.log("err", e),
                           x => console.log("success", x))

// Use task for asynchronus actions:
