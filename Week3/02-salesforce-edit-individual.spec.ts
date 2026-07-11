import { expect, test } from "@playwright/test"

test( "Sales Force Application, Edit Lead", async({page}) => {

    await page.goto(`https://login.salesforce.com`)
    await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`)
    await page.getByRole("button",{name: "Log In"}).click();

    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.getByRole("button", {name: "View All Applications"}).click();

    await page.locator(`//p[text() ="Individuals"]`).click()
    await page.locator(`//input[@name="Individual-search-input"]`).fill(`sanju`);
    await page.locator(`//input[@name="Individual-search-input"]`).press(`Enter`)

    await page.locator(`(//button[@class="slds-button slds-button_icon-border slds-button_icon-x-small"])[1]`).click()
    await page.locator(`(//a[@title="Edit"])[1]`).click()

    await page.locator(`(//a[@class="select"])[1]`).click()
    await page.getByRole("button", {name: "Salutation Mr."}).click();
    //await page.getByRole("button", {name: "Salutation Mr."}).press(`Enter`)
    await page.locator(`//input[@placeholder="First Name"]`).fill(`Samson`)

    await expect(page.locator(`//span[contains (text(), "Record")]`)).toContainText(`Records`);
})