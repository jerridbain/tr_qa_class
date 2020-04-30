import dynamicLoadingPage from "../../pages/dynamicLoading.page";

describe('As a User, test the Dynamic Loading page example 1', () => {

    it('Given I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()        
    });
    
    it('Then verify the elements exist', () => {
        dynamicLoadingPage.dynLoadPara1.waitForDisplayed()
        dynamicLoadingPage.dynLoadPara2.waitForDisplayed()
        dynamicLoadingPage.dynLoadEx1.waitForDisplayed()        
        dynamicLoadingPage.dynLoadEx2.waitForDisplayed()
    })
    
    it('When I click on example 1', () => {
        
        dynamicLoadingPage.clickExampleOne()
        
    });

    it('And I click start', () => {
        dynamicLoadingPage.clickStart()

    });

    it('Then verify "Hello World" exist', () => {
        $('h4*=Hello').waitForDisplayed()
    });

}); 

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


