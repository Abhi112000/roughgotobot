import config from "../../../config/config.js";
import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function loginPositive(page) {
  console.log("✅ Running Login Positive Cases...");
  await page.goto(config.baseUrl);

  await typeText(page, selectors.usernameField, config.username);
  await typeText(page, selectors.passwordField, config.password);
  await click(page, selectors.loginButton);

  await page.waitForNavigation();
  console.log("✅ Login Successful")
    // Create a new tab before closing current one
  const newPage = await page.browser().newPage();

}
