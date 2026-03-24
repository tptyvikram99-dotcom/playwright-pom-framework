import { test, expect } from './fixtures/testFixtures';
import data from '../test-data/json/loginData.json';
import { generateRandomEmail } from '../utils/helpers';
test.beforeEach(async ({page})=>{
    console.log('Before Each test.');
   await page.goto('/login')
});
test('Login Test', async ({ loginPage }, testInfo) => {
    await loginPage.login(
        data.validUser.username,
        data.validUser.password
    );
    console.log(testInfo.status);
});
test.afterEach(async ({page})=>{
    console.log('after each test.');
    console.log()
});

const email = generateRandomEmail();
console.log(email);