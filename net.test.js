const { expect } = require("chai");
const { clickElement, getText, putText } = require("./lib/commands.js");
const puppeteer = require("puppeteer");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("CinemaTest", () => {
  
  test("Buy Several tickets", async () => {
    await clickElement(page, "body nav a:nth-child(2)");
      await clickElement(page, "body main section:nth-child(2) div:nth-child(3) ul li a");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(9) span:nth-child(2)");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(9) span:nth-child(6)");
      await clickElement(page, "button.acceptin-button");
      await page.waitForSelector("h2.ticket__check-title");
      await clickElement(page, "button.acceptin-button");
      const actual = await getText(page, "h2.ticket__check-title");
      expect(actual).toContain("Электронный билет");
    });

  test("Buy One ticket", async () => {
    await clickElement(page, "body nav a:nth-child(2)");
    await clickElement(page, "body main section:nth-child(2) div:nth-child(3) ul li a");
    await clickElement(page, ".buying-scheme__wrapper div:nth-child(7) span:nth-child(2)");
    await clickElement(page, "button.acceptin-button");
    await page.waitForSelector("h2.ticket__check-title");
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Электронный билет");
  });

  test("Buy a ticket for a occupied seat", async () => {
      await clickElement(page, "body nav a:nth-child(2)");
      await clickElement(page, "body main section:nth-child(2) div:nth-child(3) ul li a");
      await clickElement(page, ".buying-scheme__wrapper div:nth-child(9) span:nth-child(2)");
      expect(
        String(
          await page.$eval("button", (button) => {
            return button.disabled;
          })
        )
      ).toContain("true");
    });
});