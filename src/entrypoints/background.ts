export default defineBackground(() => {
  // handle onInstalled
  browser.runtime.onInstalled.addListener(() => {
    // create scan url context menu
    browser.contextMenus.create({
      title: "Scan this URL",
      contexts: ["link"],
      id: "scan-url",
    });

    // create unshorten url context menu
    browser.contextMenus.create({
      title: "Unshorten this URL",
      contexts: ["link"],
      id: "unshorten-url",
    });
  });

  // handle context menu clicks
  const onMenuClick = async (menu: any) => {
    const handleSendMessage = async (message: {
      tab?: string;
      url?: string;
    }) => {
      // open popup
      browser.action.openPopup();

      // delay for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // send message
      await browser.runtime.sendMessage(message);
    };

    switch (menu.menuItemId) {
      case "scan-url":
        handleSendMessage({ tab: "scanurl", url: menu.linkUrl });
        break;
      case "unshorten-url":
        handleSendMessage({ tab: "unshortenurl", url: menu.linkUrl });
        break;
    }
  };

  browser.contextMenus.onClicked.addListener(onMenuClick);
});
