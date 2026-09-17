import { test , expect } from '../fixtures/baseFixture';

test( " Addition of Entitlement" , async({loggedInPage , leavePage}) => {

const profileName = await leavePage.userProfileName.textContent();

    await leavePage.navigateToLeave();
    await leavePage.entitlementAddition(profileName);
    await expect(leavePage.createSuccessMsg).toBeVisible();

})

test("Applying Leave" , async({loggedInPage , leavePage}) => {


    await leavePage.navigateToLeave();

    await leavePage.leaveApply('CAN - Bereavement' ,'2026-28-07' , '2026-28-07' );
    await expect(leavePage.createSuccessMsg).toBeVisible();
})