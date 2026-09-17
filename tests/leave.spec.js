import { test , expect } from '../fixtures/baseFixture';
test.describe.configure({ mode: 'serial' });

test( "Verify adding leave entitlement" , async({loggedInPage , leavePage}) => {

const profileName = await leavePage.userProfileName.textContent();

    await leavePage.navigateToLeave();
    await leavePage.entitlementAddition(profileName);
    await expect(leavePage.createSuccessMsg).toBeVisible();

})

test("Verify employee can apply leave" , async({page,loggedInPage , leavePage}) => {


    await leavePage.navigateToLeave();
    await page.reload();
    await leavePage.leaveApply('CAN - Bereavement' ,'2026-29-07' , '2026-29-07' );
    await expect(leavePage.createSuccessMsg).toBeVisible();
})