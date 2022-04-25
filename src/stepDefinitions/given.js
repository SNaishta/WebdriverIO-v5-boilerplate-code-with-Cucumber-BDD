import {Given} from 'cucumber';
import HomePage from '../pages/homePage';

Given(/^I am on the homepage/, function () {
    HomePage.open();
    HomePage.validatePageTitle();
});

Given(/^I am a new user on WeTransfer website$/, function () {
    HomePage.open();
    HomePage.validatePageTitle();
});

Given(/^I accept the terms and condition on the homepage$/, function () {
    HomePage.acceptTermsAndConditions()
});

