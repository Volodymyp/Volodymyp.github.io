$(document).ready(function () {

  //Page Loader
  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);


  /*-------class for background----------*/

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

  /*----burger-----*/
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('.header').toggleClass('bege');
    /* ---- lock scroll main content when burger open -------  */
    $('body').toggleClass('lock');
  })

  //change nav bg when scroll or resize
  function consoleBG() {
    if ($(window).scrollTop() <= 100 && $(window).width() >= '768') {
      $('.header').css('background', 'transparent');
      $('.header').css('margin-top', '20px');
      $('.modal__box').css('background-color', 'transparent');
    } else if ($(window).scrollTop() <= 100 && $(window).width() < '768') {
      $('.header').css('background', 'transparent');
      $('.modal__box').css('background-color', 'transparent');
    }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
      $('.header').css('background', '#4f453b');
      $('.header').css('margin-top', '0');  
      $('.modal__box').css('background-color', '#675143');
    } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
      $('.header').css('background', '#4f453b');
      $('.header').css('margin-top', '0');  
      $('.modal__box').css('background-color', '#675143');
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });

  $(window).on('load resize',consoleBG);

/*-------slick slider--------*/
  $('.main__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: true,
    arrows:true,
    prevArrow: "<img src='img/left.svg' class='prev' alt='prev'>",
    nextArrow: "<img src='img/right.svg' class='next' alt='next'>",
  });


/*----latest works section button switch img*/

  $('.projects__body-all').on('click',function () {
    $(this).css({'background-color':'#998675', 'color': '#ffffff'});
    $('.projects__body-web, .projects__body-mob, .projects__body-ill, .projects__body-photo').css({'background-color':'#ffffff', 'color': '#8c8c8c'});
  });

  $('.projects__body-web').on('click',function () {
    $(this).css({'background-color':'#998675', 'color': '#ffffff'});
    $('.projects__body-all, .projects__body-mob, .projects__body-ill, .projects__body-photo').css({'background-color':'#ffffff', 'color': '#8c8c8c'});
  });

  $('.projects__body-mob').on('click',function () {
    $(this).css({'background-color':'#998675', 'color': '#ffffff'});
    $('.projects__body-all, .projects__body-web, .projects__body-ill, .projects__body-photo').css({'background-color':'#ffffff', 'color': '#8c8c8c'});
  });

  $('.projects__body-ill').on('click',function () {
    $(this).css({'background-color':'#998675', 'color': '#ffffff'});
    $('.projects__body-all, .projects__body-web, .projects__body-mob, .projects__body-photo').css({'background-color':'#ffffff', 'color': '#8c8c8c'});
  });

  $('.projects__body-photo').on('click',function () {
    $(this).css({'background-color':'#998675', 'color': '#ffffff'});
    $('.projects__body-all, .projects__body-web, .projects__body-mob, .projects__body-ill').css({'background-color':'#ffffff', 'color': '#8c8c8c'});
  });


  $('.projects__load-more').on('click', function () {
    $(this).parent().toggleClass('showLatestWorks');
    var replaceText = $(this).parent().hasClass('showLatestWorks') ? "LOAD LESS" : "LOAD MORE";
    $(this).text(replaceText);
});

/*-------slick slider Posts block box resize unslick--------*/

$(window).on('resize', function(e){
  var init = $(".posts__body").data('init-slider');
  if(window.innerWidth > 600){
    if(init != 1){
      $('.posts__body').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: "<img src='img/posts/left.png' class='prev' alt='prev'>",
        nextArrow: "<img src='img/posts/right.png' class='next' alt='next'>",
      }).data({'init-slider': 1});
    }
  }
  else {
    if(init == 1){
      $('.posts__body').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

// load more button in posts block
  function resizePosts() {
    if ($(window).width() <= 600) {
      $('.posts__body-box').hide();
      $('.posts__body-box').slice(0, 2).show();
      $('.posts__btn').show();
    } else if ($(window).width() > 600) {
      $('.posts__body-box').slice(0, 9999).show();
    }
  }
  resizePosts();

  $(window).on('load resize',resizePosts);

  // show and hide btn
  $('.posts__btn').on('click', function () {
      $('.posts__body-box:hidden').slice(0, 2).show();
      if ($('.posts__body-box:hidden').length == false) {
        $('.posts__btn').hide();
      }
  });

  //fancybox video
  $('[data-fancybox="gallery"]').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'close'
    ]
  });

  //---btn click open fancybox galery
  $('.presentation__content-btn').on('click', function () {
    $('.presentation__video-link').click();
  });


  //  numb counter plus show when visible
  $(window).scroll(function() {
    var cont = $('.excelent__bot-numb');
    if (!cont.hasClass('visible')) {
      var wh = $(this).height();
      var topOffset = cont.offset().top - $(this).scrollTop();
      var visible = (topOffset <= wh) && (topOffset + cont.height() > 0);
      if (visible) {
        cont.addClass('visible');
        $('.excelent__bot-numb').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter:$(this).text()
          },{
            duration: 4000,
            easing: 'swing',
            step:function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    }
  });

});//end

/*-------wow animate----------*/

new WOW().init();
