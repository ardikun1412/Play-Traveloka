import { Locator, expect, type Page } from "@playwright/test";

export class HomePage {
    private readonly menuHotels : Locator;


    constructor(public readonly page: Page) {
        this.menuHotels = this.page.getByTestId('product-pill-Hotels');
    }

    async goto() {
        await this.page.goto('/en-id');
    }
    async isReady() {
        await expect(this.menuHotels).toBeVisible();
    }

}

export default HomePage