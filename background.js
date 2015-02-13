chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
        var j = JSON.stringify(request);
        console.log(j);
            chrome.tabs.executeScript(null, {
                code: "var __sniper = '" + j + "'" 
            }, function() {
                chrome.tabs.executeScript(null, { // defaults to the current tab
                    file: "filters/pins.js", // script to inject into page and run in sandbox
                    allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
                });
                // execute the content script
                sendResponse({}); // sending back empty response to sender
                
            });
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);