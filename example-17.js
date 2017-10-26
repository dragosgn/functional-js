const fs = require('fs')
const Task = require('data.task')
const { List, Map } = require('immutable-ext')

const httpGet = (path, params) =>
  Task.of(`${path} result`)

// Map({home: '/', about:'/about-us', blog: '/blog'})
// .map(route => httpGet(route, {}))

Map({home: ['/', '/home'], about: ['/about-us'], blog: ['/blog']})
.traverse(Task.of, routes =>
  routes.traverse(Task.of, route => httpGet(route, {})))
.fork(console.error, console.log)