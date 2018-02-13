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
    if (jsondata.status) {
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
