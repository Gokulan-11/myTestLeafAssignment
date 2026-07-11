//dilipkumar.rajendran@testleaf.com
//TestLeaf@2025
//7305050936 - vinoth

import { test, expect } from "@playwright/test"

test("Assertion working Scenario", async({ page })=> {

await page.goto(`https://leafground.com/input.xhtml`)

//await expect (page.locator(`//input[@placeholder="Disabled"]`)).toBeDisabled();     //Validate a Disabled Textbox

await expect (page.locator(`//h5[text() = "Type your name"]/following::input[1]`)).toBeEditable()    //Validate Editable field

await expect.soft(page.locator(`//input[@placeholder="Disabled"]`)).toBeDisabled();

await page.locator(`(//input[@role="textbox"])[4]`).fill(`Playwright Learning`)

await page.waitForTimeout(5000);
})
