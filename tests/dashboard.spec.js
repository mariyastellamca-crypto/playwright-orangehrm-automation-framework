import { test , expect } from '../fixtures/baseFixture';


test("Dashboard Page Verification" , async({page, loggedInPage , dashboardPage}) => {

    await expect(page).toHaveURL(/dashboard/);
    await expect(dashboardPage.dashboard).toBeVisible();
    await expect(dashboardPage.quickLaunchHeader).toBeVisible();
    await expect(dashboardPage.quickLaunchBody).toBeVisible();
    await expect(dashboardPage.sideMenu).toBeVisible();
    await expect(dashboardPage.userProfile).toBeEnabled();

})

test("Quick Launch verification and navigation" , async({page , loggedInPage , dashboardPage}) => {

    await expect(page).toHaveURL(/dashboard/);
    await expect(dashboardPage.dashboard).toBeVisible();
    await dashboardPage.quickLaunch("Assign Leave");
    await expect(page).toHaveURL(/assignLeave/);
    await expect(dashboardPage.quickTitle).toContainText("Assign Leave");

})

test("Side Menubar Verification" , async({page , loggedInPage , dashboardPage}) => {

    await expect(dashboardPage.menuLogo).toBeVisible();
    await expect(dashboardPage.menuSearch).toBeEnabled();
    await expect(dashboardPage.sideMenuItems).toHaveText([
    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz'
]);

})

test("Side Menubar Navigation" , async({page , loggedInPage , dashboardPage}) => {

    await dashboardPage.menuNavigation('Admin');
    await expect(page).toHaveURL(/admin/);
    await expect(page.getByRole('heading', { name: 'Admin'})).toBeVisible();
    await dashboardPage.menuNavigation('Time');
    await expect(page).toHaveURL(/time/);
    await expect(page.getByRole('heading', { name: 'Time' , exact: true })).toBeVisible();

})
    

test("Profile Menu Verification" , async({page , loggedInPage , dashboardPage}) => {

await expect(dashboardPage.userProfileIcon).toBeVisible(); 
await dashboardPage.profileMenu();  
await expect( page.getByRole('menuitem', { name: 'About' })).toBeVisible();
await expect( page.getByRole('menuitem', { name: 'Support' })).toBeVisible();
await expect(page.getByRole('menuitem', { name: 'Change Password' })).toBeVisible();
await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();


        
})