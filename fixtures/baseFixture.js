import { test as base, expect } from '@playwright/test';
import { loginData } from '../test-data/loginData';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';

export { expect };

export const test = base.extend({


    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));


    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    pimPage: async ({ page, dashboardPage }, use) => {
        await use(new PIMPage(page, dashboardPage));
    },

    gotoPage: async ({ page }, use) => {

        /*const loginPage = new LoginPage(page);
    
        await loginPage.goto(); */
        await page.goto('');
        await use(page);
    },

    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.goto();
        await loginPage.login(loginData.validUser.username, loginData.validUser.password);

        await expect(page).toHaveURL(/dashboard/, {
            timeout: 20000
        });
        await use(page);
    }

}); 