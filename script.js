


// =================КАЗАН=============

$( document ).ready(function() {
    $(".main__descr span").click(function() {        
        $('.main__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.main__click-popup').removeClass("click-popup__open");
    })
});

// =====original попааы=======

$( document ).ready(function() {
    $(".absolute-box__item-btn1").click(function() {        
        $('.absolute-box__item1').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.absolute-box__item1').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".absolute-box__item-btn2").click(function() {        
        $('.absolute-box__item2').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.absolute-box__item2').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".absolute-box__item-btn3").click(function() {        
        $('.absolute-box__item3').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.absolute-box__item3').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".absolute-box__item-btn4").click(function() {        
        $('.absolute-box__item4').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.absolute-box__item4').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".absolute-box__item-btn5").click(function() {        
        $('.absolute-box__item5').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.absolute-box__item5').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".original-box__btn").click(function() {        
        $('.original-box__popup-original').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.original-box__popup-original').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".katalog1__popup-btn1").click(function() {        
        $('.katalog1-1__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.katalog1-1__click-popup').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".katalog1__popup-btn2").click(function() {        
        $('.katalog1-2__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.katalog1-2__click-popup').removeClass("click-popup__open");
    })
});






$( document ).ready(function() {
    $(".katalog__detail-text1").click(function() {
        $(this).parent().find('.katalog3-1__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.katalog3-1__click-popup').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".katalog__detail-text2").click(function() {        
        $(this).parent().find('.katalog3-2__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.katalog3-2__click-popup').removeClass("click-popup__open");
    })
});






// =====ТАБЫ - ВЫБОР ЛИТРОВ====

$('.litrov6-1').show();

$("#selectLitr-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item1').hide();
    var selected = $('#selectLitr-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});

$('.litrov6-2').show();

$("#selectLitr-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item2').hide();
    var selected = $('#selectLitr-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 

$('.litrov6-3').show();

$("#selectLitr-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item3').hide();
    var selected = $('#selectLitr-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 

$('.litrov6-4').show();

$("#selectLitr-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item4').hide();
    var selected = $('#selectLitr-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 

$('.litrov6-5').show();

$("#selectLitr-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item5').hide();
    var selected = $('#selectLitr-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 

$('.litrov6-6').show();

$("#selectLitr-6").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item6').hide();
    var selected = $('#selectLitr-6 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});

// ======ТАБЫ КАТАЛОГ 3 ====

$('.litrov6-kat3-1-1, .litrov6-kat3-1-2, .litrov6-kat3-1-3, .litrov6-kat3-1-4, .litrov6-kat3-1-5').show();

$("#selectLitr-kat3-1-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-1').hide();
    var selected = $('#selectLitr-kat3-1-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-1-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-2').hide();
    var selected = $('#selectLitr-kat3-1-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-1-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-3').hide();
    var selected = $('#selectLitr-kat3-1-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-1-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-4').hide();
    var selected = $('#selectLitr-kat3-1-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-1-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1-5').hide();
    var selected = $('#selectLitr-kat3-1-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 


$('.litrov6-kat3-2-1, .litrov6-kat3-2-2, .litrov6-kat3-2-3, .litrov6-kat3-2-4, .litrov6-kat3-2-5').show();

$("#selectLitr-kat3-2-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-2-1').hide();
    var selected = $('#selectLitr-kat3-2-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-2-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-2-2').hide();
    var selected = $('#selectLitr-kat3-2-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-2-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-2-3').hide();
    var selected = $('#selectLitr-kat3-2-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-2-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-2-4').hide();
    var selected = $('#selectLitr-kat3-2-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-2-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-2-5').hide();
    var selected = $('#selectLitr-kat3-2-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 


$('.litrov6-kat3-3-1, .litrov6-kat3-3-2, .litrov6-kat3-3-3, .litrov6-kat3-3-4, .litrov6-kat3-3-5').show();

$("#selectLitr-kat3-3-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-3-1').hide();
    var selected = $('#selectLitr-kat3-3-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-3-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-3-2').hide();
    var selected = $('#selectLitr-kat3-3-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-3-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-3-3').hide();
    var selected = $('#selectLitr-kat3-3-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-3-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-3-4').hide();
    var selected = $('#selectLitr-kat3-3-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-3-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-3-5').hide();
    var selected = $('#selectLitr-kat3-3-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 


$('.litrov6-kat3-4-1, .litrov6-kat3-4-2, .litrov6-kat3-4-3, .litrov6-kat3-4-4, .litrov6-kat3-4-5').show();

$("#selectLitr-kat3-4-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-4-1').hide();
    var selected = $('#selectLitr-kat3-4-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-4-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-4-2').hide();
    var selected = $('#selectLitr-kat3-4-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-4-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-4-3').hide();
    var selected = $('#selectLitr-kat3-4-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-4-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-4-4').hide();
    var selected = $('#selectLitr-kat3-4-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-4-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-4-5').hide();
    var selected = $('#selectLitr-kat3-4-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 


$('.litrov6-kat3-5-1, .litrov6-kat3-5-2, .litrov6-kat3-5-3, .litrov6-kat3-5-4, .litrov6-kat3-5-5').show();

$("#selectLitr-kat3-5-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-5-1').hide();
    var selected = $('#selectLitr-kat3-5-1 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-5-2").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-5-2').hide();
    var selected = $('#selectLitr-kat3-5-2 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-5-3").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-5-3').hide();
    var selected = $('#selectLitr-kat3-5-3 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-5-4").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-5-4').hide();
    var selected = $('#selectLitr-kat3-5-4 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
});
$("#selectLitr-kat3-5-5").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-5-5').hide();
    var selected = $('#selectLitr-kat3-5-5 option:selected').attr('id');
    localStorage.setItem("myKey", selected);
    $('.' + selected).show();
}); 


// =======ТАБЫ ОСНОВНЫЕ====

$(function() {
  var tab = $('.tab__element'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('.control__item').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('.control__item').removeClass('active__tab');
    $(this).addClass('active__tab');
    return false;
}).filter(':first').click();
});


// =====ОТЗЫВЫ появление попапа

$( document ).ready(function() {
    $(".review-item__textarea span").hover(function() {        
        $(this).parents().eq(1).find('.review-item__popup').toggleClass("review-item__popup-add");
    })
});


$( document ).ready(function() {
    $(".menu-list__item-add").hover(function() {        
        $('.menu-popup').toggleClass("menu-popup__add-visible");
    })
});

$( document ).ready(function() {
    $(".menu-popup__wr1").hover(function() {        
        $('.menu-popup__wr1-wr').toggleClass("menu-popup__add-visible");
    })
});

$( document ).ready(function() {
    $(".menu-popup__wr3").hover(function() {        
        $('.menu-popup__wr3-wr').toggleClass("menu-popup__add-visible");
    })
});

// ВОПРОСЫ-ОТВЕТЫ=====

$( document ).ready(function() {
    $(".item-stat__arrow").click(function() {
        $(this).parents().eq(1).find('.item-answer').addClass("item-answer__add");
    })
});
$( document ).ready(function() {
    $(".item-answer__close").click(function() {
        $(this).parents().eq(0).removeClass("item-answer__add");
    })
});


// $(".katalog3-katalog__wr .cloned .pricebox__select").find('select').removeAttr('id');

// ======слайдер карточек==


$(document).ready(function(){
    $(".katalog3-katalog__wr").owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        smartSpeed: 300,
    });

    $(".katalog-item__slider").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        smartSpeed: 300,
    });

    $(".review__wr").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        dots: true,
        smartSpeed: 300,
    });

    $(".element__slider-wr").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 300,
    });

    

   //  var owl = $('.katalog-item__slider');
   //  owl.owlCarousel();
   //  $('.katalog-item__NextBtn').click(function() {
   //     owl.trigger('next.owl.carousel');
   // })
   //  $('.katalog-item__PrevBtn').click(function() {
   //      owl.trigger('prev.owl.carousel', [500]);
   //  })

   //  var owlelement = $('.element__slider-wr');
   //  owl.owlCarousel();
   //  $('.element-item__NextBtn').click(function() {
   //     owlelement.trigger('next.owl.carousel');
   // })
   //  $('.element-item__PrevBtn').click(function() {
   //      owlelement.trigger('prev.owl.carousel', [500]);
   //  })

});


// ======ПОПАП-ФОРМА======

$( document ).ready(function() {
    $(".popup__form-open").click(function() {        
        $('.popup__form').addClass("popup__form-visible");
    })
});
$( document ).ready(function() {
    $(".popup__form-close").click(function() {        
        $('.popup__form').removeClass("popup__form-visible");
    })
});