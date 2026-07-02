let browser = `Chrome`;

function checkBrowserVersion(callbackFunction) {

    setTimeout(function () {

        callbackFunction(browser);

    }, 2000);


}

function callbackFunction(browserName) {

    console.log(`Browser Version is ${browserName}`);
    
}

checkBrowserVersion(callbackFunction);
