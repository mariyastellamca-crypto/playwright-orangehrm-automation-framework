import{test as base , expect} from '@playwright/test';
import { loginData } from '../test-data/loginData';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

export {expect};

export const test = base.extend ({


    loginPage: async ({page} , use) => {
            
        await use(new LoginPage(page));


    },

    dashboardPage: async ({page} , use) => {
        await use(new DashboardPage(page));
    },

gotoPage: async ({page} , use) => {

    /*const loginPage = new LoginPage(page);

    await loginPage.goto(); */
    await page.goto('');
    await use(page);
},

loggedInPage: async({page} , use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(loginData.validUser.username , loginData.validUser.password);
    
    await expect(dashboardPage.quickLaunchBody).toBeVisible({
        timeout: 20000
    });

    await use(page);
}

}); 