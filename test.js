import { equal } from 'assert'
import puppeteer from 'puppeteer';


describe('Automation home Assignment - Google calculator', function () {
  this.timeout(5000);
  let browser;
  let page;
  let buttons;
  const btnSelector = '.PaQdxb';


  before(async () => {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox']
      });
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close()
  })


  it('evaluate calculation [5+10=15]', async () => {
    await page.goto('https://www.google.co.il/search?q=google+calculator/');

    const calc = '.card-section'
    await page.waitForSelector(calc);

    await page.evaluate(btn => {
      const digs = [...document.querySelectorAll(btn)];
      const btnClick = dig => digs.find(element => element.innerText === dig).children[0].click();

      btnClick('5');
      btnClick('+');
      btnClick('1');
      btnClick('0');
      btnClick('=');
    }, btnSelector);

    const resultID = '#cwos'
    const result = await page.$eval(resultID, res => res.innerText);

    equal(result, 15);
  });


  it('Count how many buttons in the calculator have numbers', async () => {
    buttons = await page.$$eval(btnSelector, el => {
      return el.map(e => {
        const dig = {};
        dig.title = e.innerText;
        return dig;
      })
    });
    // console.log(buttons);

    const count = buttons.filter(el => !isNaN(el.title)).length;
    equal(count, 10);
  });

  it('Count the total number of buttons', async () => {
    let total = Object.keys(buttons).length;

    equal(total, 34);
  });
});


