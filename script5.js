const tools = [
    {
      androidVersion: 'Android 8.X',
      links: [
        { name: 'Google Account Manager 8', url: 'https://s.id/1DASf' },
        { name: 'Bypass FRP Android 8', url: 'https://s.id/1DASo' },
        { name: 'Hush SMS', url: 'https://s.id/1WDFT', rel: 'nofollow' },
      ],
    },
    {
      androidVersion: 'Android 7.X',
      links: [
        { name: 'Remote APK', url: 'https://s.id/1DASx' },
        { name: 'Google Account Manager', url: 'https://s.id/1DASD' },
        { name: 'QuickShortcut Maker', url: 'https://s.id/1DASJ' },
        { name: 'FRP Android 7 APK', url: 'https://s.id/1DASM' },
      ],
    },
    {
      androidVersion: 'Android 6.X',
      links: [
        { name: 'Google Account Manager APK', url: 'https://s.id/1DASP' },
        { name: 'QuickShortcut Maker', url: 'https://s.id/1DASS' },
      ],
    },
    {
      androidVersion: 'Android 5.X',
      links: [
        { name: 'Google Account Manager APK', url: 'https://s.id/1DASY' },
        { name: 'QuickShortcut Maker', url: 'https://s.id/1DAT1' },
        { name: 'Quick Touch APK', url: 'https://s.id/1DAT4' },
      ],
    },
    {
      androidVersion: 'Other Bypass Tools',
      links: [
        { name: 'Vnrom Bypass FRP APK', url: 'https://s.id/1DATK' },
        { name: 'Vnrom Bypass FRP APK', url: 'https://s.id/1DATN' },
        { name: 'QuickShortcutMaker APK', url: 'https://s.id/1DATQ' },
        { name: 'Factory Test', url: 'https://www.mediafire.com/file/58fhjuajnyjlqdg/factorytest.apk/file', rel: 'nofollow' },
        { name: 'Setting Shortcut', url: 'https://s.id/1DATW' },
      ],
    },
    {
      androidVersion: 'FRP Global Android',
      links: [
        { name: 'Android - ( 8 - 9 - 10 - 11 ) - GAM', url: 'https://github.com/YemenFrp/Bypass/raw/main/Android_8-9-10_GAM_10_By_FRP.AZZPlus.COM.apk' },
        { name: 'Google Account Manager9', url: 'https://easy-firmware.com/efrp/downloads/frp/Google%20Account%20Manger%209.apk' },
        { name: 'Android_8-9_GAM.apk', url: 'https://easy-firmware.com/efrp/downloads/frp/Android_8-9_GAM.apk' },
        { name: 'Easy Frp Bypass.apk', url: 'https://easy-firmware.com/efrp/downloads/frp/Easy_Frp_Bypass.apk' },
        { name: 'Bypass FRP APK', url: 'http://www.mediafire.com/file/e3zbv3djd6gqewz/FRPBYPASS.apk/file' },
      ],
    },
  ];

  const container = document.getElementById('tools-container');

  tools.forEach(toolCategory => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('tools-category');

    const categoryTitle = document.createElement('h3');
    categoryTitle.innerText = toolCategory.androidVersion;
    categoryDiv.appendChild(categoryTitle);

    const list = document.createElement('ul');
    toolCategory.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = link.rel || '';
      anchor.innerText = link.name;
      listItem.appendChild(anchor);
      list.appendChild(listItem);
    });

    categoryDiv.appendChild(list);
    container.appendChild(categoryDiv);
  });