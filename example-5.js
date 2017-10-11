// Imperative code versus expressions
const openSite = () => {
  if(current_user) {
    return renderPage(current_user)
  } else {
    return showLogin()
  }
}

const openSite = ()  =>
  fromNullable(current_user)
  .fold(showLogin, renderPage)

const getPrefs = user => {
  if(user.premium) {
    return loadPrefs(user.preferences)
  } else {
    return defaultPrefs
  }
}

const getPrefs = user =>
  (user.premium ? Right(user) : Left('not premium'))
  .map(u => u.preferences)
  .fold(() => defaultPrefs, prefs => loadPrefs(prefs))


const streetName = user => {
  const address = user.address
  if(address) {
    const street = address.street
    if(street) {
      return street.name
    }
  }
  return 'no street'
}

const streetName = user =>
  fromNullable(user.address)
  .chain(a => fromNullable(a.street))
  .map(s => s.name)
  .fold(e => 'no street', n => n)

const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === y)[0]
  return found ? ys : ys.concat(x)
}

const concatUniq = (x, ys) =>
  fromNullable(ys.filter(y => y === x)[0])
  .fold(() => ys.concat(x), y => ys)

const wrapExamples = examples => {
  if(example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath)
    } catch (e)
  }
  return example
}

const readfile = x => tryCatch(() => fs.readFileSync(x))
