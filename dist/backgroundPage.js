console.log('I am the event page and I should run');

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     console.log('details of request are', details);
//     return {
//       cancel: details.url.indexOf("shuki-buki") != -1,
//       redirectUrl: 'http://www.my-own-shuki-inc.com '
//     };
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );