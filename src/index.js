
(()=>{
    // 点击二维码开关樱花飘落效果
    const obtn = document.querySelector('.qrcode');
    obtn.addEventListener('click', ()=>{stopp()});
    // 轮播图效果
        const carouosel = document.querySelector('.carouselContent');
    const cols = carouosel.querySelectorAll('.col');
    const disc = cols[0].querySelector('.carouselItem .thumbnail');
    const lis = cols[1].querySelectorAll('.carouselList .thumbnail');
    let index = 0;
    let timer = setInterval(() => {
        lis.forEach((v) => {
            v.className = 'thumbnail';
        });
        index == 4 ? 0 : index;
        lis[index % 4].className = 'thumbnail active';
        disc.querySelector('img').src = lis[index % 4].querySelector('img').src;
        index++;
    },5000);
    
})();

