// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setValue('input[name=x]', '2')
      .waitForElementVisible('input[name=x]', 5000)
      .setValue('input[name=y]', '4')
      .waitForElementVisible('input[name=y]', 5000)
      .waitForElementVisible('button[name=btnadd]', 1000)
      .click('button[name=btnadd]')
      .pause(2000)
      .waitForElementVisible('button[name=submit]', 1000)
      .click('button[name=submit]')
      .pause(5000)
      // .assert.containsText('h1', '6')
      .end()
  }
}
