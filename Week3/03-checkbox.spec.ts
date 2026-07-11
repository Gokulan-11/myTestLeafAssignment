import { expect, test } from "@playwright/test"

test( "LeafGround, Checkbox", async({page}) => {

    await page.goto(`https://leafground.com/checkbox.xhtml`)

    await page.locator(`//span[text() = "Basic"]/preceding-sibling::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]`).click()
//await page.getByRole("checkbox", {name: "Ajax"}).click()
    await page.locator(`//span[text() = "Ajax"]/preceding-sibling::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]`).click()

    await expect(page.locator(`//span[text() = "Checked"]`)).toContainText(`Checked`)

    await page.locator(`//label[text() = "Python"]`).click();
    await page.locator(`//label[text() = "Java"]`).click();

    await page.locator(`//span[@class="ui-chkbox-icon ui-c "]`).click()
    await page.locator(`//div[@class="ui-toggleswitch-slider"]`).click()

    await expect(page.locator(`//span[text()="Disabled"]/preceding-sibling::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled"]`))
    .toBeDisabled();

    
})