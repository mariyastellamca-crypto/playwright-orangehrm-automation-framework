export class DashboardPage{
    constructor(page){
        this.page = page;
        this.dashboard = this.page.locator('.oxd-topbar-header-title' , {hasText:'Dashboard'});
        this.quickLaunchHeader = this.page.locator('.orangehrm-dashboard-widget-header' , {hasText: 'Quick Launch'});
        this.quickLaunchBody = this.page.locator('.orangehrm-dashboard-widget-body .orangehrm-quick-launch');
        this.sideMenu = this.page.locator('.oxd-sidepanel');


        this.userProfile = this.page.locator('.oxd-userdropdown-tab');
        this.userProfileIcon = this.page.locator('.oxd-userdropdown-img');
        this.userProfileMenu = this.page.locator('.oxd-dropdown-menu');

        this.sideMenuItems = this.page.locator('.oxd-main-menu-item--name');
        this.menuLogo = this.page.locator('.oxd-brand');
        this.menuSearch = this.page.locator('input[placeholder="Search"]');

        this.quickLaunchWidget = page.locator('.orangehrm-quick-launch');
        this.quickHeading = this.page.locator('.orangehrm-quick-launch-heading');
        this.quickTitle = this.page.locator('.orangehrm-main-title');

    }

    async quickLaunch(heading){

        await this.quickLaunchWidget.locator(`button[title="${heading}"]`).click();
    }

    async menuNavigation(menuName){

        await this.sideMenuItems.filter({ hasText : menuName}).click();
    }

    async profileMenu(){

        await this.userProfile.click();

    }

    }