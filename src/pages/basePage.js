export default class BasePage {
    open() {
        browser.maximizeWindow();
        browser.url('./');
        browser.pause(500);
    }
}
