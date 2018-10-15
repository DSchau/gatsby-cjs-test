const { expect } = require(`chai`)
const gatsby = require(`gatsby`)

describe('it can require gatsby', () => {
  it('has expected exports', () => { 
    ;[
      `Link`,
      `StaticQuery`,
      `graphql`,
      `navigate`
    ]
      .forEach(mod => {
        expect(gatsby[mod]).to.exist
      })
  })
})
