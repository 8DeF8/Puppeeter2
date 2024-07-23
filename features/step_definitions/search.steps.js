const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("The user is on the page {string}", async function (string) {
  return await this.page.goto(`${string}`);
});

When("The user choose date", async function () {
  return await clickElement(this.page, "body nav a:nth-child(2)");
});

When("The user choose date that has been choosen earlier", async function () {
    return await clickElement(this.page, "body nav a:nth-child(2)");
  });

When("The user choose time of a movie", async function () {
  return await clickElement(this.page, "body main section:nth-child(2) div:nth-child(3) ul li a");
});

When("The user choose time of a movie that has been choosen earlier", async function () {
    return await clickElement(this.page, "body main section:nth-child(2) div:nth-child(3) ul li a");
  });

When("The user choose a first sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(5) span:nth-child(9)"
  );
});

When("The user choose a second sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(2) span:nth-child(8)"
  );
});

When("The user choose a sit", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(1) span:nth-child(7)"
  );
});

When("The user choose a sit that has been choosen earlier", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(1) span:nth-child(7)"
  );
});

When("The user click on the booking button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

When("The user click on the button to get booking code", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

Then("The user get the code and text {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("button for booking is inactive {string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = await string;
  expect(actual).contains(expected);
});

