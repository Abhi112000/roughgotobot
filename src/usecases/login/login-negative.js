import config from "../../../config/config.js";
import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function loginNegative(page) {
  console.log("⚠ Running Login Negative Cases...");

  // Invalid username
  await page.goto(config.baseUrl, { waitUntil: "networkidle2" });
  await page.waitForSelector(selectors.usernameField, { timeout: 10000 });
  await typeText(page, selectors.usernameField, "wronguser");
  await typeText(page, selectors.passwordField, config.password);
  await click(page, selectors.loginButton);
  console.log("❌ Checked invalid username");

  // Invalid password
  await page.goto(config.baseUrl);
  await typeText(page, selectors.usernameField, config.username);
  await typeText(page, selectors.passwordField, "wrongpass");
  await click(page, selectors.loginButton);
  console.log("❌ Checked invalid password");

  // Empty fields
  await page.goto(config.baseUrl);
  await click(page, selectors.loginButton);
  console.log("❌ Checked empty fields");

}

