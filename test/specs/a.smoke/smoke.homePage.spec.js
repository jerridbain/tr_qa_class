import basePage from "../../pages/base.page";

const homePage = new basePage()

describe('Smoke test the home page', () => {
    
    it('Given I go to the Home page', () => {
        homePage.goToHomePage()
    });

    it('Then validate that the page headers', () => {
        homePage.assert(homePage.mainHeader.getText() === 'Welcome to the-internet')

        homePage.assert(homePage.subHeader.getText() === 'Available Examples')

        homePage.assert(homePage.mainHeader.getText() !== '404')


    });
        

});
