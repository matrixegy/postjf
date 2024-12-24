  const customTools = [
 { name: "Nova Launcher", link: "https://github.com/TheUnlockPro/APK-BYPASS/raw/main/Nova_Launcher.apk" },
    { name: "Apex Launcher", link: "https://s.id/1DAUh" },
    { name: "Hush SMS APK", link: "https://bit.ly/3voEjyc" },
    { name: "Google Play Services Bypass", link: "https://www.mediafire.com/file/4qfl7p20qmx7mfp/GooglePlayServices+bypassfw.apk/file" },
    { name: "Samsung Smart Switch", link: "https://www.mediafire.com/file/bi8rm95oezmjn0j/Smart_Switch_Mobile.apk/file" },
    { name: "Quick Shortcut Maker", link: "https://www.mediafire.com/file/03jvdt6ien2yue5/QuickShortcutMaker.apk/file" },
    { name: "LG Backup", link: "https://easy-firmware.com/efrp/downloads/frp/LGBackup_2022.lbf" },
    { name: "IPTV Smarters Pro", link: "https://easy-firmware.com/efrp/downloads/frp/IPTV_Smarters_Pro_v3.1.3.apk" },
    { name: "Alliance Shield", link: "https://frpbypass.romstage.com/wp-content/uploads/2022/01/Alliance-Shield-app" },
    { name: "Google Setting", link: "https://frpbypass.romstage.com/wp-content/uploads/2020/09/Google_Setting.apk" },
    { name: "Notification Bar", link: "https://frpbypass.romstage.com/wp-content/uploads/2022/09/Notification-Bar_frpbypass.romstage.apk" },
    { name: "Technocare", link: "https://easy-firmware.com/efrp/downloads/frp/technocare.apk" },
    { name: "ShieldX Install", link: "https://shieldx.alliancex.org/shieldx_install.apk" },
    { name: "LG Backup Market", link: "https://easy-firmware.com/efrp/downloads/frp/LGBackup_Market.lbf" },
    { name: "PackageDisabler PDC", link: "https://easy-firmware.com/efrp/downloads/frp/PackageDisabler_pdc.apk" },
    { name: "Disable SystemUI XML", link: "https://easy-firmware.com/efrp/downloads/frp/pd_disable_apps_disable_systemUI.xml" },
    { name: "Disable Google Services XML", link: "https://easy-firmware.com/efrp/downloads/frp/pd_disable_apps_disable_googleservice.xml" },
    { name: "Disable MDM/Google/Knox XML", link: "https://easy-firmware.com/efrp/downloads/frp/pd_disable_apps_disable_mdmknox.xml" },
    { name: "FRP Android 7 APK", link: "https://easy-firmware.com/efrp/downloads/frp/FRP_Android_7.apk" },
    { name: "FRP Add ROM APK", link: "https://easy-firmware.com/efrp/downloads/frp/FRP_addROM.apk" },
    { name: "File Commander Manager", link: "https://easy-firmware.com/efrp/downloads/frp/File_Commander_Manager.apk" },
    { name: "Google Play Service", link: "https://easy-firmware.com/efrp/downloads/frp/Google%20play%20service.apk" },
    { name: "Menu Button APK", link: "https://easy-firmware.com/efrp/downloads/frp/Menu_Button.apk" },
    { name: "Remote GSM Edge", link: "https://easy-firmware.com/efrp/downloads/frp/remote%20gsmedge.apk" },
    { name: "Test DPC APK", link: "https://easy-firmware.com/efrp/downloads/frp/Test_DPC.apk" },
  ];

  // إعداد المتغيرات
  const customToolsContainer = document.getElementById("customToolsContainer");
  const customLoadMoreButton = document.getElementById("customLoadMoreButton");
  let customCurrentIndex = 0;
  const customToolsPerPage = 12;

  function displayCustomTools() {
    // إزالة جميع الأدوات المعروضة
    customToolsContainer.innerHTML = "";

    let count = 0;
    let index = customCurrentIndex;

    // عرض الأدوات حتى الوصول إلى العدد المطلوب أو انتهاء القائمة
    while (count < customToolsPerPage) {
      const tool = customTools[index % customTools.length]; // إذا وصلنا للنهاية، نبدأ من البداية
      const toolLink = document.createElement("a");
      toolLink.href = tool.link;
      toolLink.textContent = tool.name;
      toolLink.target = "_blank";
      toolLink.className = "custom-tool-link";
      customToolsContainer.appendChild(toolLink);

      index++;
      count++;
    }

    // تحديث المؤشر
    customCurrentIndex = index;
  }

  customLoadMoreButton.addEventListener("click", displayCustomTools);

  // عرض الأدوات عند التحميل الأول
  displayCustomTools();
