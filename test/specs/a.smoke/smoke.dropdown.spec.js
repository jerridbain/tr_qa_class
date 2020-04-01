import dropdownPage from "../../pages/dropdown.page";

describe('As a User, smoke test the dropDown page', () => {

    it('Given I go to the dropDown page', () => {
        dropDownpage.goToDropDown()
    });
        
    it('Then verify the elements exist', () => {

        dropDownPage.dropDownHeader.waitForDisplayed()
        dropDownPage.dropDownOpt1.waitForDisplayed()
        dropDownPage.dropDownOpt2.waitForDisplayed()
        dropDownPage.dropDownOpt3.waitForDisplayed()


    });
     
    
});






