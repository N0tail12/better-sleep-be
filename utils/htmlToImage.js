const puppeteer = require("puppeteer");

const htmlToImage = async (html = "") => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  const content = await page.$("body");
  const imageBuffer = await content.screenshot({ omitBackground: false });

  await page.close();
  await browser.close();

  return imageBuffer;
};

module.exports = { htmlToImage };
