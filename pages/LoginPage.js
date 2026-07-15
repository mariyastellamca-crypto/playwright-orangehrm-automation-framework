export class LoginPage{

    constructor(page){

        this.page = page;
        this.userName = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.submit = this.page.getByRole('button' , {name : ' Login '});
        this.invalidCredError = this.page.getByText('Invalid credentials');
        this.blankFieldError = this.page.locator('.oxd-input-field-error-message');
        this.userAccount = this.page.locator('.oxd-userdropdown');
        this.logoutIcon = this.page.getByText('Logout');
        this.loginScreen = this.page.getByText('Login');
        this.logoImage = this.page.getByAltText('company-branding');
        this.usernameLabel = this.page.locator('.oxd-label' , {hasText: 'Username'});
        this.passwordLabel = this.page.locator('.oxd-label' , {hasText: 'Password'});
         
        //this.passwordLabel = this.page.getByLabel('Password');
        
    }

    async goto(){

        await this.page.goto('/');
    }

    async login(username , password){

        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submit.click();

    }

    async logout(){

        await this.userAccount.click();
        await this.logoutIcon.click();

    }
}