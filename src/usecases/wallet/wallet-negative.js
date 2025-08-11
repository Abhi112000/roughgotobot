import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function walletNegative(page) {
  console.log("⚠ Running Wallet Negative Cases...");
  await click(page, selectors.walletMenu);
  await click(page, selectors.addExchangeButton);
  await click(page, selectors.addApiKeyButton);

  // Empty API Key
  await typeText(page, selectors.apiKeyField, "");
  await typeText(page, selectors.apiSecretField, "");
  await click(page, selectors.submitWalletButton);
  console.log("❌ Checked empty API key fields");

  // Invalid key format
  await typeText(page, selectors.apiKeyField, "123");
  await typeText(page, selectors.apiSecretField, "abc");
  await click(page, selectors.submitWalletButton);
  console.log("❌ Checked invalid API key format");
}
