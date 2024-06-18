import { Locator, expect, type Page } from "@playwright/test";

export class HeaderPage {
    /** Header - 1st navigation */
    private readonly menuLanguagesCurrencies : Locator;
    private readonly menuDeals : Locator;
    private readonly menuSupport : Locator;
    private readonly menuPartnership : Locator;
    private readonly menuForCorporates : Locator;
    private readonly menuBookings : Locator;
    private readonly btnLogin : Locator;
    private readonly btnRegister : Locator;
    /** Header - 2nd navigation */
    private readonly menuHotels : Locator;
    private readonly menuFlights : Locator;
    private readonly menuTranins : Locator;
    private readonly menuBusAndTravel : Locator;
    private readonly menuAirportTransfer : Locator;
    private readonly menuCarRental : Locator;
    private readonly menuThingsToDo : Locator;
    private readonly menuMore : Locator;




    constructor(public readonly page: Page) {
        this.menuLanguagesCurrencies = this.page.getByTestId('language-currency-dropdown').locator('div').first();
        this.menuDeals = this.page.getByTestId('quick-links').locator('div').filter({ hasText: 'Deals' }).first();
        this.menuSupport = this.page.getByTestId('quick-links').locator('div').filter({ hasText: 'Support' }).nth(2);
        this.menuPartnership = this.page.getByTestId('quick-links').locator('div').filter({ hasText: 'Partnership' }).first();
        this.menuForCorporates = this.page.getByTestId('quick-links').getByRole('link', { name: 'For Corporates' });
        this.menuBookings = this.page.getByRole('link', { name: 'Bookings' });
        this.btnLogin = this.page.getByText('Log In');
        this.btnRegister = this.page.getByRole('button', { name: 'Register' });
        this.menuHotels = this.page.getByTestId('product-nav').getByRole('link', { name: 'Hotels' });
        this.menuFlights = this.page.getByTestId('product-nav').getByRole('link', { name: 'Flights' });
        this.menuTranins = this.page.getByTestId('product-nav').getByRole('link', { name: 'Trains' });
        this.menuBusAndTravel = this.page.getByTestId('product-nav').getByRole('link', { name: 'Bus & Travel' });
        this.menuAirportTransfer = this.page.getByTestId('product-nav').getByRole('link', { name: 'Airport Transfer' });
        this.menuCarRental = this.page.getByTestId('product-nav').getByRole('link', { name: 'Car Rental' });
        this.menuThingsToDo = this.page.getByTestId('product-nav').getByRole('link', { name: 'Things To Do' });
        this.menuMore = this.page.getByRole('heading', { name: 'More' });


    }

    async goto() {
        await this.page.goto('/en-id');
    }
    async firstNavigationIsReady() {
        await expect(this.menuLanguagesCurrencies).toBeVisible();
        await expect(this.menuDeals).toBeVisible();
        await expect(this.menuSupport).toBeVisible();
        await expect(this.menuPartnership).toBeVisible();
        await expect(this.menuForCorporates).toBeVisible();
        await expect(this.menuBookings).toBeVisible();
        await expect(this.btnLogin).toBeVisible();
        await expect(this.btnRegister).toBeVisible();
    }

    async secondNavigationIsReady() {
        await expect(this.menuHotels).toBeVisible();
        await expect(this.menuFlights).toBeVisible();
        await expect(this.menuTranins).toBeVisible();
        await expect(this.menuBusAndTravel).toBeVisible();
        await expect(this.menuAirportTransfer).toBeVisible();
        await expect(this.menuCarRental).toBeVisible();
        await expect(this.menuThingsToDo).toBeVisible();
        await expect(this.menuMore).toBeVisible();
    }

}

export default HeaderPage