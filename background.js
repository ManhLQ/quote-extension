console.log('Background started!');

// Listening commands
chrome.commands.onCommand.addListener(command => {
  console.log(command);
  return chrome.tabs.create('https://vnexpress.net');
});