import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function profileNegative(page) {
  console.log("⚠ Running Profile Negative Cases...");
  await click(page, selectors.profileMenu);
  await click(page, selectors.editProfileButton);

  // Empty fields
  await typeText(page, selectors.nameField, "");
  await typeText(page, selectors.emailField, "");
  await click(page, selectors.submitProfileButton);
  console.log("❌ Checked empty profile fields");

  // Invalid email
  await click(page, selectors.editProfileButton);
  await typeText(page, selectors.emailField, "invalid-email");
  await click(page, selectors.submitProfileButton);
  console.log("❌ Checked invalid email");
}
