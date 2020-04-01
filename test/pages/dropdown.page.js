import basePage from './base.page'

class dropDown extends basePage {

    get basePageHeader() { return $('//*[@id="content"]/div/h3') }

    get basePageOpt1() { return $('//*[@id="dropdown"]/option[1]') }

    get basePageOpt2() { return $('//*[@id="dropdown"]/option[2]') }

    get basePageOpt3() { return $('//*[@id="dropdown"]/option[3]') }

    goToDynamicLoading() {

        console.log('step: going to dropdown page')

        browser.url('/dropdown')

        this.dropDownHeader.waitForDisplayed()

        console.log('step: on the home page')
    }    

}

    export default new dropDown()
