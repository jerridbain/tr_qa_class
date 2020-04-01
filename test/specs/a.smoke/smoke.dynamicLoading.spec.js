import dynamicLoadingPage from "../../pages/dynamicLoading.page";

describe('As a User, smoke test the Dynamic Loading page', () => {

    it('Given I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()
    });
    
    it('Then verify the elements exist', () => {

        dynamicLoadingPage.dynLoadPara1.waitForDisplayed()
        dynamicLoadingPage.dynLoadPara2.waitForDisplayed()
        dynamicLoadingPage.dynLoadEx1.waitForDisplayed()        
        dynamicLoadingPage.dynLoadEx2.waitForDisplayed()

    });

});




