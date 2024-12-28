const translations = {
  ar: {
    memberName: "اسم العضو",
    specialization: "التخصص: فك حساب جوجل",
    workArea: "نطاق العمل: القاهرة",
    workTime: "وقت العمل: 10 صباحًا - 8 مساءً",
    whatsapp: "واتساب",
    facebook: "فيسبوك",
    details: "عرض التفاصيل",
    popupDetails: "تفاصيل عن العضو",
  },
  en: {
    memberName: "Member Name",
    specialization: "Specialization: Google Account Unlock",
    workArea: "Work Area: Cairo",
    workTime: "Working Hours: 10 AM - 8 PM",
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    details: "View Details",
    popupDetails: "Member Details",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[lang][key];
  });
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
}