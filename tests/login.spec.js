//import{test,expect} from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import {test , expect } from '../fixtures/baseFixture.js';

test('Login page verification' , async({page , loginPage}) => {
    await loginPage.goto();
    await expect(loginPage.logoImage).toBeVisible();
    await expect(loginPage.usernameLabel).toBeVisible();
    await expect(loginPage.passwordLabel).toBeVisible();
    await expect(loginPage.submit).toBeEnabled();

});

test('Valid Login' , async({page , loginPage , gotoPage}) => {

    await loginPage.login(loginData.validUser.username , loginData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);


});

test('Should display error message for invalid credentials' , async({page , loginPage , gotoPage}) => {

    await loginPage.login(loginData.invalidUser.username , loginData.invalidUser.password);
    await expect(loginPage.invalidCredError).toHaveText('Invalid credentials');
});

test('Should display validation message when username is empty' , async({page ,loginPage , gotoPage})=> {
    await loginPage.login('' , loginData.validUser.password);
    await expect(loginPage.blankFieldError).toContainText('Required');

});

test('Should display validation message when password is empty' , async({page , loginPage , gotoPage})=> {
    await loginPage.login(loginData.validUser.username , '');
    await expect(loginPage.blankFieldError).toContainText('Required');

});

test('Logout' , async({page, loginPage, loggedInPage}) => {

    await loginPage.logout();
    await expect(loginPage.loginScreen).toBeVisible;

});

