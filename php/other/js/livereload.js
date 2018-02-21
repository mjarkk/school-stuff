// In this file you can use imports as long as the package is added to node_modules
// this file will be also compiled using babel

// import * as _ from 'underscore'

const dev = false;

const log = console.log

let main = () => setTimeout(() => {
  fetch('http://localhost:3030')
  .then((res) => res.json())
  .then((jsondata) => {
    if (dev) {
      log(jsondata)
    }
    if (jsondata.status.length > 0) {
      location.reload()
    } else {
      main()
    }
  })
  .catch((e) => {
    if (dev) {
      log('live reload failed:')
      log(e)
    }
    main()
  })
}, 500)

try {
  main()
} catch (e) {
  log('live reload failed:')
  log(e)
}
