import dropDown from '..//../pages/dropDown.page'

describe('As a user, test the dropdown page\'s default setting', () => {

    it('Given I go to the dropdown page', () => {
        dropDown.goToDropDown()

    });

    it('The verify the default setting is displayed', () => {
        dropDown.assert(dropDown.selectDropDown.$$('option')[0].isSelected())
        
        dropDown.assert(dropDown.selectDropDown.$$('option')[0].getText().includes('Please select'))
        

        // loop through all options, if the text does !== Please select an option, then it should not be selected

        dropDown.selectDropDown.$$('option').forEach((opt)=> {
            if (opt.getText() !== 'Please select an option') {
                dropDown.assert(!opt.isSelected())
            }

        })
        
    });    
       
});   

describe('As a User, test the dropdown page\'s test the dropdown\'s option 1', () => {

    it('Given I go to the dropdown page', () => { 
        dropDown.goToDropDown ()
    
    });

    it('When I select option 1', () => {
        dropDown.selectDropDown.selectByVisibleText('Option 1')

    });

    it('The verify option 1 is displayed', () => {
        dropDown.assert(dropDown.selectDropDown.$$('option')[1].
        isSelected())

        dropDown.selectDropDown.$$('option').forEach((opt)=> {
            if (opt.getText() !== 'Option 1') {
                dropDown.assert(!opt.isSelected())
            }
        })

    });

        
})


describe('As a User, test the dropdown page\'s test the dropdown\'s option 2', () => {

    it('Given I go to the dropdown page', () => { 
        dropDown.goToDropDown ()
    
    });

    it('When I select option 2', () => {
        dropDown.selectDropDown.selectByVisibleText('Option 2')

    });

    it('The verify option 2 is displayed', () => {
        dropDown.assert(dropDown.selectDropDown.$$('option')[2].
        isSelected())

        dropDown.selectDropDown.$$('option').forEach((opt)=> {
            if (opt.getText() !== 'Option 2') {
                dropDown.assert(!opt.isSelected())
            }
        })

    });

        
})



