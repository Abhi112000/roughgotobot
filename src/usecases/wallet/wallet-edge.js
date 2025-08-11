import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function walletEdge(page) {
  console.log("🔍 Running Wallet Edge Cases...");
  await click(page, selectors.walletMenu);
  await click(page, selectors.addExchangeButton);
  await click(page, selectors.addApiKeyButton);

  // Very long API Key
  let longKey = "K".repeat(500);
  await typeText(page, selectors.apiKeyField, longKey);
  await typeText(page, selectors.apiSecretField, "S".repeat(500));
  await click(page, selectors.submitWalletButton);
  console.log("Checked long API key & secret");
}
