

class Browser{
    constructor(){
        this.window = new WinBox({ 
            title: "Browser", 
            html:`<iframe src="${this.initialUrl}"></iframe>` 
        });
        this.initialUrl = "https://google.com"
        this.pagesHistory = [this.initialUrl]
        this.pagePosition = 0
    }

    checkOut(url){
        this.window.html = `<iframe src="${url}"></iframe>`
    }

    checkOutLatestPage(){
        const latestPageNumber = this.pagesHistory.length - 1
        const latestPage = this.pagesHistory[latestPageNumber]
        this.checkOut(latestPage)
    }

    savePageInHistory(pageUrl){
        this.pagesHistory.push(pageUrl)
        this.pagePosition++
    }

    goBackToPreviousPage(){
        const isTherePreviousPage = this.pagePosition > 0
        if(!isTherePreviousPage) this.checkOut(this.initialUrl)
        this.pagePosition--
        const previousPage = this.pagesHistory[this.pagePosition]
        this.checkOut(previousPage)
    }

    goToNextPage(){
        const isThereNextPage = this.pagePosition < this.pagesHistory.length - 1
        if(!isThereNextPage) this.checkOut(this.initialUrl)
        this.pagePosition--
        const previousPage = this.pagesHistory[this.pagePosition]
        this.checkOut(previousPage)
    }
}