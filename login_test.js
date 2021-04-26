Feature('login');

Scenario('wrong user', ({ I }) => {
    I.amOnPage('https://www.amazon.com/');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]',"dddddd");
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");


});
