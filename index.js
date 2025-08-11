import { launchBrowser, closeBrowser } from "./src/helpers/browser.js";
import config from "./config/config.js";

import loginPositive from "./src/usecases/login/login-positive.js";
import loginNegative from "./src/usecases/login/login-negative.js";
import loginEdge from "./src/usecases/login/login-edge.js";

import profilePositive from "./src/usecases/profile/profile-positive.js";
import profileNegative from "./src/usecases/profile/profile-negative.js";
import profileEdge from "./src/usecases/profile/profile-edge.js";

import walletPositive from "./src/usecases/wallet/wallet-positive.js";
import walletNegative from "./src/usecases/wallet/wallet-negative.js";
import walletEdge from "./src/usecases/wallet/wallet-edge.js";

(async () => {

  // LOGIN POSITIVE
  let browser = await launchBrowser(false);
  let page = await browser.newPage();
  await loginPositive(page);
  await page.close();
  await closeBrowser(browser);

  // LOGIN NEGATIVE
  browser = await launchBrowser(false);
  page = await browser.newPage();
  await loginNegative(page);
  await page.close();
  await closeBrowser(browser);

  // LOGIN EDGE
  browser = await launchBrowser(false);
  page = await browser.newPage();
  await loginEdge(page);
  await page.close();
  await closeBrowser(browser);


  // // LOGIN
  // let page = await browser.newPage();
  // await loginPositive(page);
  // await page.close();

  // page = await browser.newPage();
  // await loginNegative(page);
  // await page.close();

  // page = await browser.newPage();
  // await loginEdge(page);
  // await page.close();


  // PROFILE
  page = await browser.newPage();
  await profilePositive(page);
  await page.close();

  page = await browser.newPage();
  await profileNegative(page);
  await page.close();

  page = await browser.newPage();
  await profileEdge(page);
  await page.close();

  // WALLET
  await walletPositive(page);
  await walletNegative(page);
  await walletEdge(page);

  await closeBrowser(browser);
})();
