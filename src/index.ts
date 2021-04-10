export default class Application {
  started: boolean

  constructor() {
    this.started = true
  }
}

const app = new Application()
console.log(app.started)
