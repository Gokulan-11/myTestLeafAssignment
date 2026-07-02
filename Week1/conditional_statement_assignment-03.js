function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log(`Browser is Launched in: ${browserName}`);
        
    }
    else{
        console.log(`${browserName} is an Invalid Browser`);
        
    }
    
}

function runTest(testType) {
    switch (testType) {
        case `Smoke`:
            console.log(`Testing type is ${testType}`);
            break;

       case `Sanity`:
            console.log(`Testing type is ${testType}`);
            break;
    
       case `Regression`:
            console.log(`Testing type is ${testType}`);
            break;
       
        default:
              console.log(`Testing type is Smoke`);
            break;
    }
}

launchBrowser(`Chrome`);
launchBrowser(`msEdge`);
runTest(`Sanity`);
runTest(`Smoke`);