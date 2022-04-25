import BasePage from "./basePage";

const Actions = require('./common/actions');

class HomePage extends BasePage {
    homePageTitleText = "WeTransfer";

    open() {
        super.open();
    }

    //TODO Change the xpath
    get acceptCookiesButton() {
        return $('//html/body/div[2]/div/div[2]/div[2]/div[2]/div[1]/div[3]/div[4]/button[1]')
    }

    get acceptTermsButton() {
        return $('.transfer__button=I agree')
    }

    get login() {
        return $('.nav__label=Log in')
    }

    validatePageTitle() {
        const title = Actions.getTitle()
        console.log("----- title of Home page is  : " + title)
        assert.equal(title, this.homePageTitleText);
    }

    acceptTermsAndConditions() {
        this.acceptCookiesButton.click();
        this.acceptTermsButton.click();
    }

    chooseSignInOptionFromHomepage() {
        this.login.click()
    }
}

export default new HomePage()
