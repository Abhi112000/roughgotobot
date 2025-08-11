import puppeteer from "puppeteer";

export async function launchBrowser(headless = true) {
  return await puppeteer.launch({
    headless: headless,
    defaultViewport: null,
    args: ["--start-maximized"]
  });
}

export async function closeBrowser(browser) {
  await browser.close();
}
