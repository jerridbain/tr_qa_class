import basePage from './base.page'


class formAuth extends basePage {

    get formAuthUsername() { return $('//*[@id="username"]') }
    
    get formAuthPassword() { return $('//*[@id="password"]') }    
    
    get formAuthLoginBtn() { return $('//*[@id="login"]/button') }

    get formAuthErrorFlash() { return $('//*[@id="flash"]') }

    gotoFormAuth() {

        console.log('step: going to form auth page')

        browser.url('/login')

        this.formAuthUsername.waitForDisplayed()

        console.log('step: on the form auth page')

    }

}

export default new formAuth ()