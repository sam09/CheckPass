/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */


/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    
    if (document.readyState === "complete")
    	chrome.tabs.executeScript(null, { file: "content.js"} );

});
