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
      imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735690457/Czczcc-300x300.png.bv_resized_mobile.png.bv_30x30_a2exqs.webp",
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
      imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735690660/usb_30x30_1_nz2veb.png",
      alt: "usb Setting",
      name: "usb Setting"
    },
    {
      href: "intent://com.splashtop.streamer.addon.knox/#Intent;scheme=android-app;end",
      imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735690788/Splashtop_40x40_1_rfqjfw.webp",
      alt: "Splashtop",
      name: "Splashtop"
    },
  {
    href: "samsungapps://ProductDetail/com.infinix.xshare",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735690896/Xshare_40x40_hs9hxp.webp",
    alt: "Xshare",
    name: "Xshare samsung"
  },
  {
    href: "samsungapps://ProductDetail/com.activitymanager",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691023/ActivityManager_40x40_zt3pnh.webp",
    alt: "activitymanager",
    name: "activitymanager sam"
  },
  {
    href: "intent://com.vivo.easyshare/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691090/f4918f9bc9a222802eeb16e5cd418638_40x40_wwdqho.webp",
    alt: "Vivo EasyShare",
    name: "Vivo EasyShare"
  },
  {
    href: "intent://com.google.android.apps.maps/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691496/Google_Maps_icon_2015-2020.svg_1_40x40_kypwry.webp",
    alt: "Google Maps",
    name: "Google Maps"
  },
  {
    href: "intent://com.knox.verification.gettingstarted/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691578/Package_Disabler_1_40x40_udjbm0.webp",
    alt: "knox verification",
    name: "knox verification"
  },
  {
    href: "https://apps.samsung.com/appquery/appDetail.as?appId=com.jami.tool.hiddensetting.other",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691657/icon_1_40x40_l0swik.webp",
    alt: "hidden settings",
    name: "hidden settings SAM"
  },
  {
    href: "https://galaxystore.samsung.com/detail/org.aospstudio.files",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691754/Files_Shortcut_1_40x40_oebxxg.webp",
    alt: "Files Shortcut",
    name: "Files Shortcut"
  },
  {
    href: "intent://com.miui.home/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691851/MIUI_2012_logo_1_40x40_zyktjd.webp",
    alt: "MIUI Home",
    name: "MIUI Home"
  },
  {
    href: "intent://com.samsung.knox.securefolder/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691978/65b0f7ec75970_com.samsung.knox.securefolder_40x40_viss7u.webp",
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
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735692185/unnamed_2_40x40_k64st3.webp",
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
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735692289/pass_40x40_jmcwuc.webp",
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
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735692440/Open-ADB-app_40x45_qozmdx.webp",
    alt: "ADB Settings",
    name: "Open ADB Settings"
  },
  {
    href: "intent://com.infinix.xshare/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735690896/Xshare_40x40_hs9hxp.webp",
    alt: "XShare",
    name: "Open XShare"
  },
  {
    href: "intent://com.cloudmdm.tools.cloud/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735691578/Package_Disabler_1_40x40_udjbm0.webp",
    alt: "CloudMDM",
    name: "CloudMDM App"
  },
  {
    href: "intent://com.sec.android.app.hwmoduletest/#Intent;scheme=android-app;end",
    imgSrc: "https://res.cloudinary.com/dxtvee8dt/image/upload/v1735692747/hwmoduletest_2_40x40_yq74gj.webp",
    alt: "HwModuleTest",
    name: "HwModuleTest"
  }
    // يمكنك إضافة المزيد من العناصر هنا
  ];

// دالة لعرض العناصر
function showItems(startIndex, count) {
  const appLinksContainer = document.getElementById('appLinks');
  // مسح المحتوى السابق
  appLinksContainer.innerHTML = '';

  // إضافة العناصر الجديدة
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
    appLinksContainer.appendChild(listItem);

    index++;  // تحديث المؤشر
    countDisplayed++;  // زيادة عدد العناصر المعروضة
  }
}

// عند الضغط على "Load More"
loadMoreBtn.addEventListener('click', () => {
  showItems(currentIndex, itemsPerPage);
  currentIndex += itemsPerPage;  // تحديث المؤشر بعد عرض العناصر
});

// إظهار أول 9 عناصر عند تحميل الصفحة
showItems(currentIndex, itemsPerPage);;
