import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function profilePositive(page) {
  console.log("✅ Running Profile Positive Cases...");
  await click(page, selectors.profileMenu);
  await click(page, selectors.editProfileButton);

  await typeText(page, selectors.nameField, "Abhishek Kumar");
  await typeText(page, selectors.emailField, "abhishek@example.com");
  await click(page, selectors.submitProfileButton);

  console.log("✅ Profile updated successfully");
}
