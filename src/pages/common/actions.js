class Actions {

    static getTitle() {
        return browser.getTitle();
    }

    static clearText(loc) {
        browser.elementClear(loc);
    }

    static sendKey(loc, text) {
        loc.setValue(text)
    }

    static waitUntillElementDisplayed(loc) {
        browser.waitUntil(function () {
            return loc.isDisplayed() === true
        }, 3000, 'Element not displayed')
    }

    static getText(loc) {
        return browser.getElementText(loc);
    }

    static getTagName(loc) {
        return browser.getElementTagName(loc);
    }

    static closeWindow() {
        browser.closeWindow();
    }

    static sleepBrowser(waittime) {
        browser.pause(waittime);
    }

    static click(loc) {
        try {
            loc.click()
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = Actions;
