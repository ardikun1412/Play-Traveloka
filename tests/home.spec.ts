import { test } from "../fixtures/home.fixtures";

test.describe('Home', () => {
    
    test('Ensure the homepage loads correctly', async ({ homePage }) => {
        await homePage.goto();
        await homePage.isReady();
    });
});