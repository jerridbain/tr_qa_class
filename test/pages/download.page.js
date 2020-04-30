import basePage from './base.page'

class downloadPage extends basePage {

    get links() { return $$ ('a') }

    goToDownload() {

        console.log('step: going to download page')

        browser.url('/download')

        this.links[0].waitForDisplayed()

        console.log('step: on the download page')
    }    

}

export default new downloadPage()