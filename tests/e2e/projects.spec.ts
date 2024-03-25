import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/projects");
  await expect(
    page.getByRole("link", { name: "Doclytics A document analyzer" })
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText(
    "A document analyzer using local a local LLM like Ollama for the document management system paperless-ngx"
  );
  await expect(page.getByRole("main")).toContainText("Doclytics");
  await page
    .getByRole("link", { name: "Doclytics A document analyzer" })
    .click();
  await expect(page.getByRole("paragraph")).toContainText(
    "A document analyzer using local a local LLM like Ollama for the document management system paperless-ngx"
  );
  await expect(page.getByText("DoclyticsA document analyzer")).toBeVisible();
  await page.getByLabel("Back").click();
  await expect(
    page.getByRole("heading", { name: "Projects summarizing my" })
  ).toBeVisible();
});
