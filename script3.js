  let currentIndex = 0;
  const itemsPerPage = 9;
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  // البيانات التي سيتم تحميلها (الروابط والصور)
  const appLinksData = [
    {
      href: "intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2022/07/screen-smartlock.png",
      alt: "Screen Smartlock",
      name: "Screen Smartlock"
    },
    {
      href: "intent://com.android.settings/#Intent;scheme=android-app;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2022/07/settings.png",
      alt: "Setting App",
      name: "Setting"
    },
    {
      href: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2022/07/galaxy-store.png",
      alt: "Galaxy Store",
      name: "Galaxy Store"
    },
    {
      href: "https://m.palmplaystore.com/#category=HOME#subCategory=",
      imgSrc: "https://www.theunlockpro.com/wp-content/uploads/al_opt_content/IMAGE/www.theunlockpro.com/wp-content/uploads/2024/07/Czczcc-300x300.png.bv_resized_mobile.png.bv.webp",
      alt: "Palm Store",
      name: "Palm Store"
    },
    {
      href: "tel:100-000-000/#Intent;scheme=android-app;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2022/07/dialer-call.png",
      alt: "Call",
      name: "(*#0*#)Sam/Tecno/Infinix"
    },
    {
      href: "intent://com.activitymanager/#Intent;scheme=android-app;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2024/07/activity-manager.png",
      alt: "Activity Manager",
      name: "Activity Manager"
    },
    {
      href: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end",
      imgSrc: "https://addrom.com/wp-content/uploads/2022/07/google-search.png",
      alt: "Google Quick Search Box",
      name: "Google Quick Search Box"
    },
    {
      href: "intent://com.sec.android.app.servicemodeapp/#Intent;scheme=promote_USBSettings_scheme;end",
      imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/usb.png",
      alt: "usb Setting",
      name: "usb Setting"
    },
    {
      href: "intent://com.splashtop.streamer.addon.knox/#Intent;scheme=android-app;end",
      imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/Splashtop.png",
      alt: "Splashtop",
      name: "Splashtop"
    },
  {
    href: "samsungapps://ProductDetail/com.infinix.xshare",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/Xshare.png",
    alt: "Xshare",
    name: "Xshare samsung"
  },
  {
    href: "samsungapps://ProductDetail/com.activitymanager",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/ActivityManager.png",
    alt: "activitymanager",
    name: "activitymanager sam"
  },
  {
    href: "intent://com.vivo.easyshare/#Intent;scheme=android-app;end",
    imgSrc: "https://img.apponic.com/19/237/f4918f9bc9a222802eeb16e5cd418638.png",
    alt: "Vivo EasyShare",
    name: "Vivo EasyShare"
  },
  {
    href: "intent://com.google.android.apps.maps/#Intent;scheme=android-app;end",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Maps_icon_%282015-2020%29.svg",
    alt: "Google Maps",
    name: "Google Maps"
  },
  {
    href: "intent://com.knox.verification.gettingstarted/#Intent;scheme=android-app;end",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/Package_Disabler.png",
    alt: "knox verification",
    name: "knox verification"
  },
  {
    href: "https://apps.samsung.com/appquery/appDetail.as?appId=com.jami.tool.hiddensetting.other",
    imgSrc: "https://m.apkshub.com/images/42/com.jami.tool.hiddensetting/icon.png",
    alt: "hidden settings",
    name: "hidden settings SAM"
  },
  {
    href: "https://galaxystore.samsung.com/detail/org.aospstudio.files",
    imgSrc: "https://blogger.googleusercontent.com/img/a/AVvXsEhl2cxHmhVQxNWmxQ7u5pHwTemNrP1BHK7DLlUtn-V4Oe3W9Yn8BLAj1zllSIjhodQ8WzC2WBv_zg7_CHl9eBWoRnwBS7kul3wK9GGrGSUnhiY2Sg8cTQXdmc3FrDjZD6OtHodNZF3jz6M52UQixrWWaUQIOew-ur-4NF2b2u2yAvHuJZWSp9UQWc_F=s0-rw-e90",
    alt: "Files Shortcut",
    name: "Files Shortcut"
  },
  {
    href: "intent://com.miui.home/#Intent;scheme=android-app;end",
    imgSrc: "https://static.wikia.nocookie.net/logopedia/images/0/0f/MIUI_2012_logo.jpg/revision/latest?cb=20210508035338",
    alt: "MIUI Home",
    name: "MIUI Home"
  },
  {
    href: "intent://com.samsung.knox.securefolder/#Intent;scheme=android-app;end",
    imgSrc: "https://downloadr2.apkmirror.com/wp-content/uploads/2024/01/86/65b0f7ec75970_com.samsung.knox.securefolder.png",
    alt: "Secure Folder",
    name: "Secure Folder"
  },
  {
    href: "intent://com.google.android.setupwizard.qrprovision.QrScanActivity/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2024/07/qr-scan-activity.png",
    alt: "Qr Scan Activity",
    name: "Qr Scan Activity"
  },
  {
    href: "intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/samsung-my-file.png",
    alt: "Samsung My Files",
    name: "Samsung My Files"
  },
  {
    href: "https://www.google.com/android/find",
    imgSrc: "https://play-lh.googleusercontent.com/GCsSBgR93cedwf2weP7s6VPsBitwir9ioOO0DYjLydIjdCkfQEv0GQzK34ky96L6XMc=w600-h300-pc0xffffff-pd",
    alt: "Find My Device Google",
    name: "Find My Device Google"
  },
  {
    href: "intent://com.google.android.youtube/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/youtube.png",
    alt: "Youtube",
    name: "Youtube"
  },
  {
    href: "intent://com.android.chrome/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/chrome.png",
    alt: "Chrome",
    name: "Chrome"
  },
  {
    href: "https://apps.samsung.com/appquery/appDetail.as?appId=com.sec.android.app.sbrowser&amp;cld-000005006635",
    imgSrc: "https://addrom.com/wp-content/uploads/2023/08/samsung-internet.png",
    alt: "Samsung Internet",
    name: "Samsung Internet"
  },
  {
    href: "https://apps.samsung.com/appquery/appDetail.as?appId=com.samsung.android.authfw&amp;cld=000004009606",
    imgSrc: "https://www.berbotoss.com/data/pass.jpg",
    alt: "Samsung Pass",
    name: "Samsung Pass"
  },
  {
    href: "intent://com.sec.android.app.popupcalculator/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2023/08/calculator.png",
    alt: "Calculator",
    name: "Calculator"
  },
  {
    href: "intent://com.rrivenllc.shieldx/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/alliance-shield.png",
    alt: "Alliance Shield",
    name: "Alliance Shield"
  },
  {
    href: "https://galaxy.store/setting",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/android-hidden-settings.png",
    alt: "Android Hidden Settings",
    name: "Android Hidden Settings"
  },
  {
    href: "intent://com.google.android.gsf.login.LoginActivity/#Intent;scheme=android-app;end",
    imgSrc: "https://addrom.com/wp-content/uploads/2022/07/google-search.png",
    alt: "Login Account",
    name: "Login Account"
  },
  {
    href: "intent://com.sec.android.app.modemui.activities.USB.settings/#Intent;scheme=android-app;end",
    imgSrc: "https://frpbypass.io/wp-content/uploads/2023/03/Open-ADB-app.jpg",
    alt: "ADB Settings",
    name: "Open ADB Settings"
  },
  {
    href: "intent://com.infinix.xshare/#Intent;scheme=android-app;end",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/Xshare.png",
    alt: "XShare",
    name: "Open XShare"
  },
  {
    href: "intent://com.cloudmdm.tools.cloud/#Intent;scheme=android-app;end",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/Package_Disabler.png",
    alt: "CloudMDM",
    name: "CloudMDM App"
  },
  {
    href: "intent://com.sec.android.app.hwmoduletest/#Intent;scheme=android-app;end",
    imgSrc: "https://easy-firmware.com/efrp/downloads/frp/images/hwmoduletest.png",
    alt: "HwModuleTest",
    name: "HwModuleTest"
  }
    // يمكنك إضافة المزيد من العناصر هنا
  ];

// دالة لعرض العناصر
function showItems(startIndex, count) {
  const appLinksContainer = document.getElementById('appLinks');
  const fragment = document.createDocumentFragment();  // استخدام fragment لتقليل عمليات DOM

  let countDisplayed = 0;  // عدد العناصر المعروضة
  let index = startIndex;

  while (countDisplayed < count) {
    const item = appLinksData[index % appLinksData.length];  // استخدام الحساب الدائري
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', item.href);

    const image = document.createElement('img');
    image.setAttribute('src', item.imgSrc);
    image.setAttribute('alt', item.alt);
    image.setAttribute('decoding', 'async');
    image.setAttribute('width', '30');
    image.setAttribute('height', '30');
    image.setAttribute('loading', 'lazy');

    const strong = document.createElement('strong');
    strong.textContent = item.name;

    anchor.appendChild(image);
    anchor.appendChild(strong);
    listItem.appendChild(anchor);
    fragment.appendChild(listItem);  // إضافة العنصر إلى fragment بدلاً من DOM مباشرة

    index++;  // تحديث المؤشر
    countDisplayed++;  // زيادة عدد العناصر المعروضة
  }

  appLinksContainer.appendChild(fragment);  // إضافة كافة العناصر دفعة واحدة
}

// عند الضغط على "Load More"
loadMoreBtn.addEventListener('click', () => {
  showItems(currentIndex, itemsPerPage);
  currentIndex += itemsPerPage;  // تحديث المؤشر بعد عرض العناصر
});

// إظهار أول 9 عناصر عند تحميل الصفحة
showItems(currentIndex, itemsPerPage);
