import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/projects");
  await expect(
    page.getByRole("link", { name: "Doclytics To reduce paperwork" })
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText(
    "To reduce paperwork at home, I have set up" +
      " Paperless-ngx to manage documents digitally. Although these are searchable, they are not particularly easy to " +
      "categorize, which led me to the idea of using an LLM for this purpose. However, I did not want to send personal " +
      "documents to OpenAI or ChatGPT. Therefore, I devised a solution on how to create a classification for the documents" +
      " locally using an LLM and then automatically deposit it in Paperless. The goal of the tool is to extract metadata " +
      "such as recipient, priority, etc., as automatically as possible. For this purpose, I built a Rust program that uses" +
      " the Ollama API, packaged it as a container to provide a fast and secure way of document classification."
  );
  await expect(page.getByRole("main")).toContainText("Doclytics");
  await page
    .getByRole("link", { name: "Doclytics To reduce paperwork" })
    .click();

  await page.waitForSelector('button[aria-label="Back"]', {
    state: "attached",
  });
  await page.click('button[aria-label="Back"]');
  await page.waitForURL("**/projects");
  await expect(page.getByRole("main")).toContainText(
    "Projects summarizing my professional experience with different frameworks and programming languages and technologies."
  );
});
