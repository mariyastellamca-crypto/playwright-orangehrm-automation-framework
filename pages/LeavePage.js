import { expect } from '@playwright/test';


export class LeavePage {

    constructor(page, dashboardPage) {

        this.page = page;
        this.dashboardPage = dashboardPage;
        this.userProfileName = this.page.locator('.oxd-userdropdown-name');
        this.entitlement = this.page.getByText('Entitlements ');
        this.addEntitlement = this.page.getByText('Add Entitlements');
        this.empName = this.page.getByPlaceholder('Type for hints...');
        //this.empNameSelection = this.page.getByText(this.userProfileName.textContent());
        this.leaveType = this.page.getByText('-- Select --').first();
        this.leaveTypeOption = this.page.getByText('CAN - Personal');
        this.entitlementCount = this.page.locator('.oxd-input-field-bottom-space').filter({ hasText: 'Entitlement' }).locator('input');
        this.save = this.page.getByRole('button', { name: '  Save  ' });
        this.confirm = this.page.getByRole('button', { name: ' Confirm ' });
        this.createSuccessMsg = this.page.getByText('Successfully Saved ', { exact: true });
        this.apply = this.page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText : 'Apply'});
        this.selectLeave = this.page.locator('.oxd-select-text-input');
        this.fromDate = this.page.locator('.oxd-input-group').filter({ hasText : 'From Date'}).getByPlaceholder('yyyy-dd-mm');
        this.toDate = this.page.locator('.oxd-input-group').filter({ hasText : 'To Date'}).getByPlaceholder('yyyy-dd-mm');
        this.applyLeave = this.page.getByRole('button', { name: ' Apply ' });





    }


    async navigateToLeave() {

        this.profileName = await this.userProfileName.textContent();

        await this.dashboardPage.menuNavigation('Leave');

    }


 async entitlementAddition(profileName) {

    await this.entitlement.click();
    await this.addEntitlement.click();

    await this.empName.pressSequentially(profileName.trim());

    await expect(this.page.getByText('Searching....'))
        .not.toBeVisible({ timeout: 10000 });

    const employeeOption = this.page.locator('.oxd-autocomplete-option').first();
    await expect(employeeOption).toBeVisible();
    await employeeOption.click();

    await this.leaveType.click();
    await this.leaveTypeOption.click();

    await this.entitlementCount.fill('15');

    await this.save.click();

    await expect(this.confirm).toBeVisible({ timeout: 10000 });
    await this.confirm.click();
}

async leaveApply(typeofLeave ,fromDate , toDate ){

    await this.apply.click();
    await expect(this.page).toHaveURL(/applyLeave/);
    await this.selectLeave.click();
    await this.page.getByText(typeofLeave).click();
    await this.fromDate.fill(fromDate);
    await this.toDate.click();
    await this.toDate.press('Control+A');
    await this.toDate.press('Backspace');
    await this.toDate.fill(toDate);
    await this.applyLeave.click();



}
}