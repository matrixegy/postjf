let currentIndex = 0;
  const itemsPerPage = 9;
  const items = document.querySelectorAll('.app-links li');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  function showItems(startIndex, count) {
    const endIndex = startIndex + count;
    items.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  loadMoreBtn.addEventListener('click', () => {
    const remainingItems = items.length - currentIndex;
    
    // إذا كانت العناصر المتبقية أقل من 9
    if (remainingItems < itemsPerPage) {
      // عرض العناصر المتبقية
      showItems(currentIndex, remainingItems);
      
      // حساب العدد المتبقي من العناصر التي يجب إظهارها من البداية
      const itemsToDisplayFromStart = itemsPerPage - remainingItems;
      currentIndex = 0;  // العودة للبداية
      showItems(currentIndex, itemsToDisplayFromStart);
      
    } else {
      // إذا كانت هناك 9 أو أكثر من العناصر المتبقية
      showItems(currentIndex, itemsPerPage);
      currentIndex += itemsPerPage;
    }
  });

  // إظهار أول 9 عناصر عند تحميل الصفحة
  showItems(currentIndex, itemsPerPage);