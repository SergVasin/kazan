


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
        $('.katalog3-1__click-popup').addClass("click-popup__open");
    })
});
$( document ).ready(function() {
    $(".click-popup__close").click(function() {        
        $('.katalog3-1__click-popup').removeClass("click-popup__open");
    })
});

$( document ).ready(function() {
    $(".katalog__detail-text2").click(function() {        
        $('.katalog3-2__click-popup').addClass("click-popup__open");
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

// ======ТАБЫ КАТАЛОГ 3=====

$('.litrov6-kat3-1').show();

$("#selectLitr-kat3-1").change(function(){
    $('.pricebox__pricechoose').find('.pricechoose-item-kat3-1').hide();
    var selected = $('#selectLitr-kat3-1 option:selected').attr('id');
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



// ======слайдер карточек==


$(document).ready(function(){
    $(".katalog3-katalog__wr").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        smartSpeed: 300,
    });

    $(".katalog-item__slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 300,
    });

    $(".element__slider-wr").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 300,
    });

    

    var owl = $('.katalog-item__slider');
    owl.owlCarousel();
    $('.katalog-item__NextBtn').click(function() {
       owl.trigger('next.owl.carousel');
   })
    $('.katalog-item__PrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })

    var owlelement = $('.element__slider-wr');
    owl.owlCarousel();
    $('.element-item__NextBtn').click(function() {
       owlelement.trigger('next.owl.carousel');
   })
    $('.element-item__PrevBtn').click(function() {
        owlelement.trigger('prev.owl.carousel', [500]);
    })

});