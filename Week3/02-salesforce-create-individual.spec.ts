import { expect, test } from "@playwright/test"

test( "Sales Force Application, create Lead", async({page}) => {

    await page.goto(`https://login.salesforce.com`)
    await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`)
    await page.getByRole("button",{name: "Log In"}).click();

    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.getByRole("button", {name: "View All Applications"}).click();

    await page.locator(`//p[text() ="Individuals"]`).click()
    await page.locator(`//div[@title="New"]`).click()

    await page.getByRole("textbox", {name: "Last Name *"}).fill(`Sanju`)
    await page.locator(`//span[text() ="Save"]`).click()

    await expect(page.locator(`//div[@class="slds-hyphenate"]`)).toContainText(`was created.`)

})