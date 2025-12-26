document.getElementById('autofill-btn').addEventListener('click', async () => {
  // Get the active tab in the current window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Send a message to the content script running on that tab
  chrome.tabs.sendMessage(tab.id, { action: "autofill" });
});