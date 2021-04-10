import Application from '../../src/index'

describe('Application', () => {
  it('#start()', async () => {
    const app = new Application()
    expect(app.started).toBe(true)
  })
})
