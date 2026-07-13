export class LoginPage{

    constructor(page){

        this.page = page;
        this.userName = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.submit = this.page.getByRole('button' , {name : ' Login '});
    }

    async goto(){

        await this.page.goto('/');
    }

    async login(username , password){

        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submit.click();

    }
}