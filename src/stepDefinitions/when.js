import {When} from 'cucumber';
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import welcomePage from "../pages/welcomePage";

var {Then} = require('cucumber');

When(/^I intend to upload a file by logging in to my account$/, function () {
    homePage.chooseSignInOptionFromHomepage()
    loginPage.enterCredentials()
    welcomePage.isUserLoggedIn()
});