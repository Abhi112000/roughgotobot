import config from "../../../config/config.js";
import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function loginEdge(page) {
  console.log("🔍 Running Login Edge Cases...");

  // Special characters
  await page.goto(config.baseUrl, { waitUntil: "networkidle2" });
    await page.waitForSelector(selectors.usernameField, { timeout: 10000 });;
  await typeText(page, selectors.usernameField, "user!@#");
  await typeText(page, selectors.passwordField, "pass!@#");
  await click(page, selectors.loginButton);
  console.log("Checked special characters");

  // Max length
  let longUser = "a".repeat(256);
  await page.goto(config.baseUrl);
  await typeText(page, selectors.usernameField, longUser);
  await typeText(page, selectors.passwordField, config.password);
  await click(page, selectors.loginButton);
  console.log("Checked max length input");

}
