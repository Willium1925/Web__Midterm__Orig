// document.getElementById('all').addEventListener('click', () => {
//     document.querySelectorAll('.gallery img').forEach(img => img.classList.remove('hidden'));
// });
//
// document.getElementById('nature').addEventListener('click', () => {
//     document.querySelectorAll('.gallery img').forEach(img => {
//         img.classList.toggle('hidden', !img.classList.contains('nature'));
//     });
// });
//
// document.getElementById('city').addEventListener('click', () => {
//     document.querySelectorAll('.gallery img').forEach(img => {
//         img.classList.toggle('hidden', !img.classList.contains('city'));
//     });
// });




// 切換分類按鈕樣式與圖片顯示
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 按鈕樣式切換
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const type = button.id;
        const containers = document.querySelectorAll('.image-container');

        containers.forEach(container => {
            const img = container.querySelector('img');
            if (type === 'all') {
                container.style.display = 'block';
            } else {
                container.style.display = img.classList.contains(type) ? 'block' : 'none';
            }
        });
    });
});

// 圖片 hover 時顯示停留秒數
document.querySelectorAll('.image-container').forEach(container => {
    const img = container.querySelector('img');
    let hoverStartTime;

    img.addEventListener('mouseenter', () => {
        hoverStartTime = Date.now();
        const hoverTimeLabel = document.createElement('div');
        hoverTimeLabel.classList.add('hover-time');
        hoverTimeLabel.textContent = '0s';
        container.appendChild(hoverTimeLabel);

        img.hoverInterval = setInterval(() => {
            const elapsedTime = ((Date.now() - hoverStartTime) / 1000).toFixed(1);
            hoverTimeLabel.textContent = `${elapsedTime}s`;
        }, 100);
    });

    img.addEventListener('mouseleave', () => {
        clearInterval(img.hoverInterval);
        const hoverTimeLabel = container.querySelector('.hover-time');
        if (hoverTimeLabel) {
            hoverTimeLabel.remove();
        }
    });
});
