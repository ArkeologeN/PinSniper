function doStuffWithDOM(element) {
    alert("I received the following DOM content:\n" + element);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
    console.log(tab);
    chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
});
