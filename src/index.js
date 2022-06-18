const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const request = require('request');
const fs = require('fs');

let driver = null;

class TiktokSoundDownloader {
  driver = null;

  constructor() {
    console.log('TiktokSoundDownloader');
  }

  async download(url, path) {
    this.driver = await new Builder()
      .setAlertBehavior('ignore')
      .forBrowser('chrome')
      .setChromeOptions(
        new Options()
          .setMobileEmulation({ deviceName: 'Nexus 5X' })
          .addArguments('--log-level=3')
          .addArguments('--ignore-certificate-errors')
          .addArguments('--disable-gpu')
          .addArguments('--headless')
      )
      .build();

    await this.driver.get('https://musicaldown.com/en');

    const input = await this.driver.wait(
      until.elementLocated(
        By.xpath('/html/body/div[2]/div/div/div/form/div/div[1]/input[1]')
      ),
      10000
    );
    await input.sendKeys(url);

    const download = await this.driver.findElement(
      By.xpath('/html/body/div[2]/div/div/div/form/div/div[2]/button')
    );
    await download.click();

    const soundName = await this.driver
      .wait(
        until.elementLocated(
          By.xpath('/html/body/div[2]/div/div[2]/div[2]/h2')
        ),
        10000
      )
      .getText();

    const downloadUrl = await this.driver
      .wait(
        until.elementLocated(
          By.xpath('/html/body/div[2]/div/div[2]/div[2]/a[1]')
        ),
        10000
      )
      .getAttribute('href');
    request(downloadUrl).pipe(fs.createWriteStream(path));
    console.log(
      '[Tiktok-Sound-Downloader] | Download [' +
        soundName.toString().replace('Music Title: ', '') +
        '] to: ' +
        path
    );
  }
}
module.exports = exports = TiktokSoundDownloader;
