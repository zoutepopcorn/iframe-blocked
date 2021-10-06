chrome.runtime.onInstalled.addListener(async () => {
    const url = chrome.runtime.getURL("page.html");
    const tab = await chrome.tabs.create({ url });
    // console.log(`Created tab ${tab.id}`);
});