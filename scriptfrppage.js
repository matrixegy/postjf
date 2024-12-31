  // دمج جميع السكربتات في السكربت الواحد.
  const scripts = [
    { src: "https://matrixegy.github.io/postjf/script5.js", id: "script5" },
    { src: "https://matrixegy.github.io/postjf/script4.js", id: "script4" },
    { src: "https://matrixegy.github.io/postjf/script3.js", id: "script3" },
    { src: "https://matrixegy.github.io/postjf/script1.js", id: "script1" }
  ];

  // وظيفة لتحميل السكربت بشكل غير متزامن
  function loadScript(script) {
    const existingScript = document.getElementById(script.id);
    if (!existingScript) {
      const newScript = document.createElement('script');
      newScript.id = script.id;
      newScript.src = script.src;
      newScript.type = 'module';
      document.body.appendChild(newScript);
    }
  }

  // إنشاء مراقب التقاطع lazy loading لكل السكربتات
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const scriptId = entry.target.getAttribute('data-script-id');
        const script = scripts.find(s => s.id === scriptId);
        if (script) {
          loadScript(script);
          observer.unobserve(entry.target); // إيقاف المراقبة بعد تحميل السكربت
        }
      }
    });
  }, { threshold: 0.5 });

  // مراقبة العناصر التي تحتاج إلى السكربتات
  document.querySelectorAll('[data-script-id]').forEach(element => {
    observer.observe(element);
  });