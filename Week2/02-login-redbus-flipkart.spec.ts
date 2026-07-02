import { chromium, firefox, test } from "@playwright/test";

test(`Opening the Browser`, async() => { 

const browser = await chromium.launch({channel: "msedge"});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto(`https://www.redbus.in`);
await page.waitForTimeout(3000);

const titlePage = await page.title();
const pageURL = page.url();

console.log(`The URL of the Page is: ${pageURL}`);
console.log(`Title of the Page is: ${titlePage}`);

await browser.close();

const browser1 = await firefox.launch();
const context1 = await browser1.newContext();
const page1 = await context1.newPage();

await page1.goto(`https://www.flipkart.com`);
await page1.waitForTimeout(3000);

const newTitlePage = await page1.title();
const newPageURL = page1.url();

console.log(`The URL of the Page is: ${newPageURL}`);
console.log(`Title of the Page is: ${newTitlePage}`);

await browser1.close();
})