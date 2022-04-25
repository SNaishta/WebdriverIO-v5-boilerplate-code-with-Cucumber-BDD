const Actions = require('./common/actions');
const loginData = require('../data/loginData')

class LoginPage {

    get loginTab() {
        return $('.auth0-lock-tabs-current')
    }

    get username() {
        return $('[name="email"]')
    }

    get password() {
        return $('[name="password"]')
    }

    get submitButton() {
        return $('[name="submit"]')
    }

    enterCredentials() {
        Actions.waitUntillElementDisplayed(this.loginTab)
        Actions.sendKey(this.username, loginData.username)
        Actions.sendKey(this.password, loginData.password)
        this.submitButton.scrollIntoView()
        Actions.click(this.submitButton)
    }
}

export default new LoginPage()
