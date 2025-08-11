import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function walletPositive(page) {
  console.log("✅ Running Wallet Positive Cases...");
  await click(page, selectors.walletMenu);
  await click(page, selectors.addExchangeButton);
  await click(page, selectors.addApiKeyButton);

  await typeText(page, selectors.apiKeyField, "API_KEY_123");
  await typeText(page, selectors.apiSecretField, "SECRET_456");
  await click(page, selectors.submitWalletButton);

  console.log("✅ Wallet API Key added successfully");
}
