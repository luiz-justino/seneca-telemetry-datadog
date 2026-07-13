const Seneca = require('seneca')

describe('automated tests', () => {
    test('works', async () => {
      const seneca = Seneca({ legacy: false })
        .test()
      await seneca.ready()
    })
})
