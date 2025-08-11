import selectors from "../../../config/selectors.js";
import { click, typeText } from "../../helpers/actions.js";

export default async function profileEdge(page) {
  console.log("🔍 Running Profile Edge Cases...");
  await click(page, selectors.profileMenu);
  await click(page, selectors.editProfileButton);

  // Very long name
  let longName = "A".repeat(200);
  await typeText(page, selectors.nameField, longName);
  await click(page, selectors.submitProfileButton);
  console.log("Checked very long name");
}
