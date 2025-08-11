export async function click(page, selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

export async function typeText(page, selector, text) {
  await page.waitForSelector(selector);
  await page.click(selector, { clickCount: 3 });
  await page.type(selector, text);
}
