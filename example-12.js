// Capture side-effects in a task
const Task = require("data.task")

Task.of(1) // acts just like a Box
.fork(e => console.log("err", e),
      x => console.log("succes", x))

Task.rejected(1) // acts just like a Box
.map(x => x + 1 ) // in the rejected case it ignores it alltogether
.fork(e => console.log("err", e),
      x => console.log("success", x))


Task.of(1) // acts just like a Box
.map(x => x + 1 ) // in the rejected case it ignores it alltogether
.chain(x => )
.fork(e => console.log("err", e),
      x => console.log("success", x))
