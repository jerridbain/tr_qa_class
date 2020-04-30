import formAuthPage from "../../pages/formAuth.page";
import inputs from "../../data/inputs.json"


describe('As a user, test the invalid user input', () => {

    it('Given I am on the Form Authentication page', () => {
        formAuthPage.gotoFormAuth()
    });

    it('When I enter the incorrect username', () => {
        formAuthPage.formAuthUsername.waitForDisplayed()  
        formAuthPage.formAuthUsername.setValue(inputs[0].un)      
    });

    it('And I enter the correct password', () => {
        formAuthPage.formAuthPassword.waitForDisplayed()
        formAuthPage.formAuthPassword.setValue(inputs[0].pw);

        formAuthPage.formAuthLoginBtn.click()
    });

    it('Then validate the error invalid username message', () => {
        formAuthPage.formAuthErrorFlash.waitForDisplayed()
        formAuthPage.assert(formAuthPage.formAuthErrorFlash.getText().
        includes(inputs[0].expectedBanner),30000)

        
    });

    
});

describe('As a user, test the invalid user input', () => {

    it('Given I am on the Form Authentication page', () => {
        formAuthPage.gotoFormAuth()
    });

    it('When I enter the incorrect username', () => {
        formAuthPage.formAuthUsername.waitForDisplayed()  
        formAuthPage.formAuthUsername.setValue(inputs[1].un)      
    });

    it('And I enter the correct password', () => {
        formAuthPage.formAuthPassword.waitForDisplayed()
        formAuthPage.formAuthPassword.setValue(inputs[1].pw);

        formAuthPage.formAuthLoginBtn.click()
    });

    it('Then validate the error invalid username message', () => {
        formAuthPage.formAuthErrorFlash.waitForDisplayed()
        formAuthPage.assert(formAuthPage.formAuthErrorFlash.getText().
        includes(inputs[1].expectedBanner),30000)

        
    });

    
});


