import { expect, test } from "@playwright/test"

test(`PVR ticking booking scenario`, async( {page} )=> {

    await page.goto(`https://www.pvrcinemas.com/`)

    //await page.locator(`(//span[@class="cities-placed"])[2]`).click()     //clicking location
    await page.locator(`(//h6[text()="Chennai"])`).click()             //selecting chennai
    await page.locator(`//span[@class="cinemas-inactive"]`).click()         //choosing cinema
    await page.locator(`//span[text()="Select Cinema"]`).click()
    await page.locator(`//span[contains(text(), "Luxe Phoenix ")]`).click()    //choosing any luxe cinema's
    await page.locator(`//span[contains(text(), "Tomorrow")]`).click()          //choosing date and time
    await page.locator(`//li[@class="p-dropdown-item"]/span[text() = "IDHAYAM MURALI"]`).click({timeout: 8000})            //choosing mv
    await page.locator(`//span[text() = "10:15 PM"]`).click()                    //choosing time
    await page.locator(`//span[text() ="Book"]/parent::button/parent::div`).click();     //clicking book button

    await page.locator(`//button[text() ="Accept"]`).click()      //terms and condition
    await page.locator(`//span[@id="EL.ELITE|K:1"]`).click()   //chossing seat

    await expect (page.locator(`//h5[text() = "IDHAYAM MURALI"]`)).toContainText("IDHAYAM")

    const movieSummary = await page.locator(`//div[@class="summary-movies-content"]`).allInnerTexts();
    console.log(`Movie Summary is ${movieSummary}`);
    
    await expect (page.locator(`//p[text() = "F26"]`)).toContainText(`F26`)

    await expect (page.locator(`//div[@class="grand-prices"]`)).toContainText(`218.02`)

    











})