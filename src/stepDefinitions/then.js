import {Then} from 'cucumber';
import WeatherPage from '../pages/loginPage';
import welcomePage from "../pages/welcomePage";

Then(/^I should be able to create a link transfer$/, function () {
    welcomePage.createLink()
});

Then(/^I should be able to delete the uploaded file from the account$/, function () {
    welcomePage.deleteFilesFromAccount()
});