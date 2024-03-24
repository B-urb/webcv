// tests/projects.e2e.ts
import { expect, test } from "@playwright/test";

test.describe("Projects Page", () => {
  test("should display the loading state initially and then show no projects message", async ({
    page,
  }) => {
    // Start the server and go to the Projects page
    await page.goto("http://localhost:3000/projects");

    // Check for the loading state
    // Using the text locator to find and assert the text
    await expect(page.locator("text=/loading/i")).toHaveText(/loading/i);

    // Depending on how your app transitions from loading, you might need to wait for the text to disappear
    // This will wait until the "Loading" text is no longer found
    await page.waitForSelector("text=/loading/i", { state: "detached" });

    // Check for the 'No Projects yet :(' text
    // Again using a locator to find and assert the expected text
    await expect(page.locator("text=No Projects yet :(")).toHaveText(
      "No Projects yet :("
    );
  });
});
