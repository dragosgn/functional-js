const Task = require("data.task")
const fs = require("fs")

// const app = () =>
//   fs.readFile("config.json", "utf-8", (err, contents) => {
//     if(err) throw err
//     const newContents = contents.replace(/8/g, "6")
//
//     fs.writeFile("config1.json", newContents, (err, _ ) => {
//       if(err) throw err
//       console.log("Succes!")
//     })
//   })

const readFile = (filename, enc) =>
  new Task((res, rej) =>
    fs.readFile(filename, enc, (err, contents) =>
      err ? rej(err) : res(contents)))

const writeFile = (filename, contents) =>
  new Task((res, rej) =>
    fs.writeFile(filename, contents, (err, success) =>
      err ? rej(err) : res(success)))

const app = () =>
  readFile("config.json", "utf-8")
  .map(contents => contents.replace(/8/g, "6"))
  .chain(contents => writeFile("config1.json", contents))
