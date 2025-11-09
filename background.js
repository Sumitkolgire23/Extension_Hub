// Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
    console.log('All-in-One Extension Manager installed!');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getInstalledExtensions') {
        chrome.management.getAll((extensions) => {
            sendResponse({ extensions: extensions });
        });
        return true;
    }
    
    if (request.action === 'launchExtension') {
        if (request.extensionId) {
            chrome.management.launchApp(request.extensionId);
            sendResponse({ success: true });
        }
    }
});
