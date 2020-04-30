import downloadPage from "../../pages/download.page";
import {link} from 'fs'

const fs = require('fs')
const path = require('path')

const downloadDir = './tempDownload'

let titles = []

let files = []

describe('As a user, test the file download page', () => {

    before('setup', () => {
        browser.sendCommand('Page.setDownloadBehavior', { 'behavior':
        'allow', 'downloadPath': downloadDir })

        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir)
            
        }
    });

    it('Given I go to the file Downloads page', () => { 
        downloadPage.goToDownload()
    
    });

    it('When I click on all of the downloads', () => {

        downloadPage.links.forEach(link => {

            if (!link.getHTML().includes('GitHub') && link.getText() 
            !== "Elemental Selenium" && link.getText() !== "[2020-03-18] Daily Status report.docx") {

                // get the name
                titles.push(link.getText())
                //click the link
                link.click()
            }
                
            
            
        })


    });

    it('Then verify the downloads exist', () => { 

        files = fs.readdirSync(downloadDir)

        files.forEach(file => {
            console.log(file)
            downloadPage.assert(titles.includes(file))
        })
    
    
    });

    after('cleanup', () => {
           files.forEach(file => {
                fs.unlinkSync(path.join(downloadDir, file))

        })

    });


    
});
