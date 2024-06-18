import { test } from "../fixtures/core.fixtures";

test.describe('Home', () => {
    
    test('Ensure the homepage loads correctly', async ({ homePage, headerPage }) => {
        await homePage.goto();
        await headerPage.firstNavigationIsReady();
        await headerPage.secondNavigationIsReady();
    });
});