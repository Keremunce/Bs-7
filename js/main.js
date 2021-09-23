$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop()>50);
});

$(window).scroll(function(){


    if ($(this).scrollTop() > 50) { 
        $('.navbar .navbar-brand img').attr('src','https://fetchrewards.com/wp-content/themes/pkfetch/images/logo.png');
        $('.navbar-toggler-icon').css('background',`  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")  `);

    }
    if ($(this).scrollTop() < 50) { 
        $('.navbar .navbar-brand img').attr('src','https://fetchrewards.com/wp-content/themes/pkfetch/images/logo-white.png');
        $('.navbar-toggler-icon').css('background',`  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")`);
    }

});
$(".navbar-toggler").click(function() {
    $(".navbar").css("background-color","#fff");
    $('.navbar .navbar-brand img').attr('src','https://fetchrewards.com/wp-content/themes/pkfetch/images/logo.png');
    $('.navbar-toggler-icon').css('background',`  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")  `);


})



$('.owl-carousel').owlCarousel({

    loop:true,
    margin:10,
    nav:true,
    navText:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.5
        }
    }
});

// const slider = document.querySelector("#slider");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');

// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     slider.scrollLeft = scrollLeft - walk;

// });

// for (var i = 0; i < 20; i++) {
//     $(".sliders").append('<a href=""><div class="slide"><div class="slide-img"><img src="https://images.kitapsepeti.com/Content/global/images/products/1/1530309/big-kazanirsak-kaybederiz-cevrimici.jpg" alt=""></div><div class="slide-name"><h3>Kazanırsak Kaybederiz: Çevrimiçi</h3></div><div class="slide-price"><p>31,85 ₺</p></div></div></a>');
// }

// for (var i = 0; i < 8; i++) {
//     $(".categori-products").append('<a href=""><div class="product"><div class="product-img"><img src="https://images.kitapsepeti.com/Content/global/images/products/1/1530309/big-kazanirsak-kaybederiz-cevrimici.jpg"></div><div class="product-name"><h3>Kazanırsak Kaybederiz: Çevrimiçi</h3></div><div class="product-write"><strong>Zeynep Sey</strong></div><div class="product-price"><span>31.85 ₺</span></div></div> </a>');
// }