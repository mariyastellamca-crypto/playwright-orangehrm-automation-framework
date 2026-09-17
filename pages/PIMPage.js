export class PIMPage {
    constructor(page, dashboardPage) {

        this.dashboardPage = dashboardPage;
        this.page = page;
        this.addEmployee = this.page.getByRole('button').filter({ hasText: ' Add ' });
        this.firstName = this.page.locator('input[name = "firstName"]');
        this.lastName = this.page.locator('input[name = "lastName" ]');
        this.empId = this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
        this.save = this.page.getByRole('button').filter({ hasText: ' Save ' });
        this.createSuccessMsg = this.page.getByText('Successfully Saved ', { exact: true });
        this.search = this.page.locator('.oxd-button').filter({ hasText: ' Search ' });
        this.result = this.page.locator('.oxd-table-cell');
        this.empRow = this.page.locator('.oxd-table-row--clickable');
        this.gender = this.page.locator('.oxd-radio-wrapper');
        this.nationality = this.page.locator('.oxd-input-group').filter({ hasText: 'Nationality' });
        this.delete = this.page.locator('.bi-trash');
        this.confirmDelete = this.page.getByRole('button', { name: 'Yes, Delete' });
        this.deleteSuccessMsg = this.page.getByText('Successfully Deleted ', { exact: true });
        this.noRecord = this.page.getByText('No Records Found', { exact: true });
        this.selectedNationality = this.page.locator('.oxd-input-group').filter({ hasText: 'Nationality' }).locator('.oxd-select-text-input');
        this.updatePersonalDetails = this.page.getByText('Successfully Updated ', { exact: true });
        this.updateCustomFields = this.page.getByText('Successfully Saved ', { exact: true });
    }

    getGenderRadio(gender) {
        return this.page.getByLabel(gender);
    }

    async navigateToPim() {

        await this.dashboardPage.menuNavigation('PIM');

    }

    async addNewEmployee(firstName, lastName, empId) {

        await this.addEmployee.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.empId.fill(empId);
        await this.save.click();

    }

    async searchEmployee(empId) {

        await this.empId.fill(empId);
        await this.search.click();
    }

    async editEmployee(empId, gender) {


        await this.empRow.filter({ hasText: empId }).click();
        await this.gender.filter({ hasText: gender }).click();
        await this.nationality.click();
        await this.page.getByText('Indian', { exact: true }).click();
        await this.save.first().click();

    }

    async deleteEmployee() {

        await this.delete.click();
        await this.confirmDelete.click();
    }

}

