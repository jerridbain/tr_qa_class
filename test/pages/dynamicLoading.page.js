import basePage from './base.page'


class dynamicLoading extends basePage {

    get dynamicLoadingHeader() { return $('//*[@id="content"]/div/h3') }

    get dynLoadPara1() { return $('//*[@id="content"]/div/p[1]') }

    get dynLoadPara2() { return $('//*[@id="content"]/div/p[2]') }

    get dynLoadEx1() { return $('//*[@id="content"]/div/a[1]') }

    get dynLoadEx2() { return $('//*[@id="content"]/div/a[2]') }

    get dynLoadStartBtn() { return $ ('button=Start') }

    goToDynamicLoading() {

        console.log('step: going to dynamic loading page')

        browser.url('/dynamic_loading')

        this.dynamicLoadingHeader.waitForDisplayed()

        console.log('step: on the dynamic loading page')

    }

    clickExampleOne() {
        this.dynLoadEx1.waitForDisplayed()
        this.dynLoadEx1.click()

    }

    clickExampleTwo() {
        this.dynLoadEx2.waitForDisplayed()
        this.dynLoadEx2.click()

    }

    clickStart() {
        this.dynLoadStartBtn.waitForDisplayed()
        this.dynLoadStartBtn.click()

    }




}

export default new dynamicLoading()