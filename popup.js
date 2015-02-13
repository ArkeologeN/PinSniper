function clickHandler(e) {
	var keyword = document.getElementById('keyword').value;
	var pages = document.getElementById('pages').value;
	var sorting = document.getElementById('sorting').value;
    chrome.extension.sendMessage({directive: "popup-click", sorting: sorting, pages: pages, keyword: keyword}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler);
})