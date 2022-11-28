const {Builder, By, until, Key} = require('selenium-webdriver');
const {expect} = require('chai');
var firefox = require('selenium-webdriver/firefox');
let TIMEOUT=200000;

describe('web application test with selenium webdriver', function() {
  let driver;
  this.timeout(TIMEOUT)
  const options = new firefox.Options();
  
  before(async function() {
    driver = new Builder().forBrowser('firefox').build();
    
  });  
  
  it('check md ion-page hydrated present', async function() {
	
    this.timeout(TIMEOUT);
    await driver.get('http://www.gabiot.com.ar:8024');

    /*await driver.findElement(By.id('username')).then(element=> element.sendKeys('admin2'));	   
    await driver.findElement(By.id('pwd')).then(element=> element.sendKeys('admin'));	   
    await driver.findElement(By.id('loginBtn')).then(element=> element.click());	   */
    
    await driver.findElement(By.className('md ion-page hydrated')) //working
    //await driver.findElement(By.className('md button button-small button-solid in-toolbar ion-activatable ion-focusable hydrated'))//.then(element=> element.click());	   
    //let whatelement= await driver.wait(until.elementLocated(element),TIMEOUT);
    //let value   = driver.getTiTle();
    value = "hola";
    console.log(value)
    //expect(value).to.equal('ACCEDER');	   //('admin@samauec.org');	   */
    /*let element_2=driver.findElement(By.className("button-native"));
    let value   = await element_2.getText();
    expect(value).to.equal('ACCEDER');	   //('admin@samauec.org');	   */
  });
  after( () =>
    driver && driver.quit()
  );
});

