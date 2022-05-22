import { test, expect } from "@playwright/test";
import fs from "fs";

test.describe("All Parameter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "http://127.0.0.1:3000/?showBusiness=true&showPrivate=true"
    );
  });

  test("check header", async ({ page }) => {
    await expect.soft(page.locator("id=name")).toHaveText("Pascal Lauener");
    await expect
      .soft(page.locator("id=title"))
      .toHaveText("Director Software Development");
  });

  test("checkPrivate", async ({ page }) => {
    await expect
      .soft(page.locator("id=HomeTitle"))
      .toHaveText("Private Address");
    await expect
      .soft(page.locator("id=PrivateAddress"))
      .toHaveText("Flossenmatt 7c6045 Meggen");
    await expect
      .soft(page.locator("id=PrivateContact"))
      .toHaveText("+41 79 386 86 86pascal@lauener.biz");
  });

  test("checkCompany", async ({ page }) => {
    await expect
      .soft(page.locator("id=CompanyTitle"))
      .toHaveText("Business Address");
    await expect
      .soft(page.locator("id=CompanyAddress"))
      .toHaveText("General-Guisan-Strasse 86300 Zug");
    await expect
      .soft(page.locator("id=CompanyContact"))
      .toHaveText("+41 79 386 86 86pascal.lauener@callista.ch");
  });

  test("download", async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("id=SaveContact").click(),
    ]);

    const path = await download.path();
    const data = fs.readFileSync(path, "utf8");
    expect(data).toContain("BEGIN:VCARD");
    expect(data).toContain("ORG;CHARSET=utf-8:Callista");
    expect(data).toContain("TITLE;CHARSET=utf-8:Director Software Engineering");
    expect(data).toContain("EMAIL;INTERNET;WORK:pascal.lauener@callista.ch");
    expect(data).toContain("TEL;WORK:+41 79 386 86 86");
    expect(data).toContain(
      "ADR;WORK;POSTAL;CHARSET=utf-8:Callista AG;;General-Guisan-Strasse 8;Zug;;"
    );
    expect(data).toContain("URL:http://www.callista.ch");
    expect(data).toContain(
      "ADR;HOME;POSTAL;CHARSET=utf-8:Private;;Flossenmatt 7c;Meggen;;6045;"
    );
    expect(data).toContain("EMAIL;INTERNET;HOME:pascal@lauener.biz");
    expect(data).toContain("TEL;HOME:+41 79 386 86 86");
  });
});
