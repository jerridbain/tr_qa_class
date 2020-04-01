import dynamicLoadingPage from "../test/pages/dynamicLoading.page";

describe('As a User, test the Dynamic Loading page example 2', () => {

    it('Given I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()        
    });
    
    
    it('When I click on example 2', () => {
        
        dynamicLoadingPage.clickExampleTwo()
        
    });

    it('And I click start', () => {
        dynamicLoadingPage.clickStart()

    });

    it('Then verify "Hello World" exist', () => {
        $('h4*=Hello').waitForDisplayed()
    });

}); 

   