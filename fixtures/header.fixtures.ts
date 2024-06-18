import { test as base } from '@playwright/test';
import { HeaderPage } from '../pages/header.page';

type HeaderFixtures = {
    headerPage: HeaderPage
}

export const test = base.extend<HeaderFixtures>({
    headerPage: async ({ page }, use) => {
        await use(new HeaderPage(page));
    }
});

export { expect } from '@playwright/test';