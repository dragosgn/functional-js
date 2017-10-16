const fs = require('fs')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile)

const files = ['box.js', 'config.json']

files.map(fn => readFile(fn, 'utf-8'))
