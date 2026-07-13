//import{test,expect} from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';
import {test , expect } from '../fixtures/baseFixture.js';

test('Valid Login' , async({page , loginPage , gotoPage}) => {

    await loginPage.login(loginData.validUser.username , loginData.validUser.password);
    await expect(page).toHaveURL(/dashboard/);


});

test('Invalid Login' , async({page , loginPage , gotoPage}) => {

    await loginPage.login(loginData.invalidUser.username , loginData.invalidUser.password);
    await expect(page.getByText('Invalid credentials')).toHaveText('Invalid credentials');
});

test('Null Username' , async({page ,loginPage , gotoPage})=> {
    await loginPage.login(' ' , loginData.validUser.password);
    await expect(page.locator('.oxd-input-field-error-message')).toContainText('Required');

});

test('Null Password' , async({page , loginPage , gotoPage})=> {
    await loginPage.login(loginData.validUser.username , ' ');
    await expect(page.locator('.oxd-input-field-error-message')).toContainText('Required');

});

