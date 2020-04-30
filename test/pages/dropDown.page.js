import basePage from './base.page'

class dropDown extends basePage {

    get selectDropDown() { return $('//*[@id="dropdown"]') }

    goToDropDown() {

        console.log('step: going to dropdown page')

        browser.url('/dropdown')

        this.selectDropDown.waitForDisplayed()

        console.log('step: on the dropdown page')
    }    

}

    export default new dropDown()
