import Actions from "./common/actions";
import transferData from "../data/transferData";

class WelcomePage {

    get loggedInOption() {
        return $('.transferlist')
    }

    get addButton() {
        return $('[type="file"]')
    }

    get emailToField() {
        return $('[name="autosuggest"]')
    }

    get titleField() {
        return $('[name="displayName"]')
    }

    get messageText() {
        return $('[name="message"]')
    }

    getTransferButton() {
        return $('.transfer__button')
    }

    get transferCompleteMessage() {
        return $('.complete__text')
    }

    get transferTab() {
        return $('=Transfers')
    }

    get deleteOption() {
        return $('#transfers_page_delete')
    }

    get deleteFiles() {
        return $('#transfers_page_confirm_multi_delete')
    }

    getLinkTitle() {
        return $('.transferitem__title')
    }

    isUserLoggedIn() {
        Actions.waitUntillElementDisplayed(this.loggedInOption)
    }

    clickAddButton() {
        Actions.click(this.addButton)
    }

    isLinkCreated() {
        Actions.waitUntillElementDisplayed(this.transferCompleteMessage)
    }

    selectFile() {
        const path = require('path')
        const filePath = path.join(__dirname, '../data/Apple.jpeg')
        const remoteFilePath = browser.uploadFile(filePath)
        this.addButton.setValue(remoteFilePath)
    }

    clickTransferButton() {
        this.getTransferButton().click()
    }

    emailTo() {
        Actions.sendKey(this.emailToField, transferData.recipientEmailid)
    }

    addTitle() {
        Actions.sendKey(this.titleField, transferData.title)
    }

    addMessage() {
        Actions.sendKey(this.messageText, "This is a temp message")
    }

    createLink() {
        this.isUserLoggedIn()
        this.emailTo()
        this.addTitle()
        this.addMessage()
        this.selectFile()
        this.clickTransferButton()
        this.isLinkCreated()
    }

    deleteFilesFromAccount() {
        Actions.click(this.transferTab)
        try {
            Actions.waitUntillElementDisplayed(this.getLinkTitle())
        } catch (e) {
            browser.refresh();
        }
        this.getLinkTitle().moveTo(this.getLinkTitle().getLocation())
        Actions.waitUntillElementDisplayed(this.deleteOption)
        Actions.click(this.deleteOption)
        Actions.click(this.deleteFiles)
    }
}

export default new WelcomePage()
