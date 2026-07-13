import{test as base , expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

export {expect};

export const test = base.extend ({


    loginPage: async ({page} , use) => {
            
        await use(new LoginPage(page));


    },

gotoPage: async ({page} , use) => {

    /*const loginPage = new LoginPage(page);

    await loginPage.goto(); */
    await page.goto('');
    await use(page);
}

}); 