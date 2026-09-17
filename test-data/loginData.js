export const loginData = {
   validUser: {
    username: process.env.ORANGEHRM_USERNAME,
    password: process.env.ORANGEHRM_PASSWORD,
  },

    invalidUser: {
        username: 'Admin',
        password: 'wrongPassword'
    }
};