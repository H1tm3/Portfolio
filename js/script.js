// スクロール
const getScrollPercent = () => {
    // スクロール量
    const scrolled = window.scrollY;
    // console.log(`${scrolled} スクロールされたで`); 検証コンソールでログ出す

    // ページ全体高さ
    const pageHeight = document.documentElement.scrollHeight;
    // 表示領域高さ
    const viewHeight = document.documentElement.clientHeight;
    // console.log(`ページの高さ:${pageHeight}、 表示領域の高さ:${viewHeight}`)　検証コンソールでログ出す


    // スクロールされた割合　計算式
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    // console.log(percentage) コンソールでログ

    // バーに幅指定
    document.querySelector('#bar').style.height = `${percentage}%`;

}; 
window.addEventListener('scroll', getScrollPercent);


// Slickslider
// $('.slideimg').slick({
// slidesToShow: 1,
// slidesToScroll: 1,
// autoplay: true,
// autoplaySpeed: 2000,
// });

$('.slideimg').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // arrows: true
});

// ScrollTOP
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});