import { Locator, expect, type Page } from "@playwright/test";

export class HomePage {
    constructor(public readonly page: Page) {
    }

    async goto() {
        await this.page.goto('/en-id');
    }

}

export default HomePage