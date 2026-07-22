import { test, expect } from '../fixtures/baseFixture';
import { empData } from '../test-data/employeeData';

const gender = 'Female';

test("Verify the Addition of Employee", async ({ loggedInPage, pimPage }) => {

    await pimPage.navigateToPim();
    await pimPage.addNewEmployee(empData.newEmp.firstName, empData.newEmp.lastName, empData.newEmp.id);
    await expect(pimPage.createSuccessMsg).toBeVisible();

})

test("Verify the Employee Search", async ({ loggedInPage, pimPage }) => {


    await pimPage.navigateToPim();
    await pimPage.searchEmployee(empData.extEmp.empId);
    await expect(pimPage.result.filter({ hasText: empData.extEmp.empId })).toBeVisible();
})

test("Verify editing employee personal details", async ({ loggedInPage, pimPage }) => {


    await pimPage.navigateToPim();
    await pimPage.searchEmployee(empData.extEmp.empId);
    await expect(pimPage.result.filter({ hasText: empData.extEmp.empId })).toBeVisible();


    await pimPage.editEmployee(empData.extEmp.empId, gender);
    await expect(pimPage.updatePersonalDetails).toBeVisible();
    await expect(pimPage.selectedNationality).toHaveText('Indian');
    await expect(pimPage.getGenderRadio(gender)).toBeChecked();


})

test("Verify the Deletion of an Employee", async ({ loggedInPage, pimPage }) => {

    await pimPage.navigateToPim();
    await pimPage.searchEmployee(empData.extEmp.deletionEmpId);
    await expect(pimPage.result.filter({ hasText: empData.extEmp.deletionEmpId })).toBeVisible();
    await pimPage.deleteEmployee();
    await expect(pimPage.deleteSuccessMsg).toBeVisible();
    await pimPage.searchEmployee(empData.extEmp.deletionEmpId);
    await expect(pimPage.noRecord.first()).toBeVisible();


})