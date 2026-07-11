import { expect, test } from "@playwright/test"

test( "Sales Force Application, create Lead", async({page}) => {

    await page.goto(`https://login.salesforce.com`)
    await page.locator(`//input[@id="username"]`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`//input[@id="password"]`).fill(`TestLeaf@2025`)
    await page.getByRole("button",{name: "Log In"}).click();

    await page.locator(`//button[@title="App Launcher"]`).click();
    await page.getByRole("button", {name: "View All Applications"}).click();

    await page.locator(`//p[text()="Sales"]`).click();

    await page.locator(`//a[@title="Leads"]`).click()

    await page.getByRole("button", {name: "New"}).click({timeout: 10000});

    await page.getByRole("combobox", {name: "Salutation"}).click();
    await page.locator(`//span[text()= "Mr."]`).click();
    await page.getByRole("textbox", {name: "Last Name"}).fill(`Raina`)
    await page.getByRole("textbox", {name: "Company"}).fill(`CSK`)
    await page.locator(`//button[@name="SaveEdit"]`).click()

    await expect (page.locator(`//div[contains(text(),'was created')]`)).toContainText(`was created`);



})