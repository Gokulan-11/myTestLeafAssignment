import { expect, test } from "@playwright/test"

test( "Sales Force Application, Edit Lead", async({page}) => {

    await page.goto(`https://login.salesforce.com`)
    await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`)
    await page.getByRole("button",{name: "Log In"}).click();

    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.getByRole("button", {name: "View All Applications"}).click();

    await page.locator(`//p[text()="Sales"]`).click();

    await page.locator(`//a[@title="Leads"]`).click()
    await page.locator(`(//div[@class="slds-truncate"]/following-sibling::button)[2]`).click()

    await page.locator(`//input[@name="Company"]`).fill(`Test-Title`, );
    await page.locator(`//input[@name="Company"]`).press(`Enter`)

    await page.getByRole("button", {name: "Save"}).click()

    await expect (page.locator(`(//span[contains(text(),"are saved")])[1]`)).toContainText(`are saved`);
})