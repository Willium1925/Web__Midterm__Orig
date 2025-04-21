function filterImages(category) {
    const images = document.querySelectorAll('.image');

    // 對每張圖片做處理
    images.forEach(img => {
        if (category === 'all') {
            // 如果是全部圖片，就全部顯示
            img.style.display = 'block';
        } else {
            // 否則依照 class 判斷是否符合篩選類別
            if (img.classList.contains(category)) {
                img.style.display = 'block';   // 顯示符合的圖片
            } else {
                img.style.display = 'none';    // 隱藏不符合的圖片
            }
        }
    });
}
