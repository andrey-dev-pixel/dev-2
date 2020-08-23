$(function () {
    var transTime = 5000;
    var numBgColors = $('.bg-grad').length;
    var bgtrans = setInterval(function () {
        if ($('.bg-grad.active').index() == ($('.bg-grad').length - 1)) {
            $('.bg-grad.active').removeClass('active');
            $('.bg-grad').eq(0).addClass('active');
        } else {
            var curIndex = $('.bg-grad.active').index();
            $('.bg-grad.active').removeClass('active');
            $('.bg-grad').eq(curIndex + 1).addClass('active');
        }
    }, transTime);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");

        }
    });
    // плавное перемещение страницы к нужному блоку
    $(".nav-link").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({
            scrollTop: destination
        }, 800);
    });
    // Menu opener hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.nav-menu').toggleClass('menu-opened');
        $('.menu-open .icon-bar:nth-child(1)').toggleClass('first');
        $('.menu-open .icon-bar:nth-child(2)').toggleClass('middle');
        $('.menu-open .icon-bar:nth-child(3)').toggleClass('last');
    });
    $('.nav-link, header').click(function () {
        $('.menu-collapse').addClass('d-none').css('order', '1');
        $('.nav-menu').removeClass('menu-opened');
        $('span:nth-child(1)').removeClass('first');
        $('span:nth-child(2)').removeClass('middle');
        $('span:nth-child(3)').removeClass('last');
    });

    //info window
    $('.we-do_content__item').click(function () {
        $('.we-do_content__info').toggleClass('d-none');
    });
    $('.we-do_content__item1').click(function () {
        $('.we-do_content__info2').toggleClass('d-none');
    });
    $('.we-do_content__item2').click(function () {
        $('.we-do_content__info3').toggleClass('d-none');
    });
    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $(".scroll-to-top a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({
            scrollTop: destination
        }, 800);
    });

    //animated

    $(window).scroll(function () {
        $('.about-card, .card-left, .team-left, .logos-img').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("fadeInLeft");
            }
        });
        $('.about-right, .card-right, .design-iphone, .content__info, .icons, .client-content').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("fadeInRight");
            }
        });
        $('.about-center, .title, .text, .bottom-line, .team-center').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("fadeInUp");
            }
        });
        $('.abcd, .barbershop').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("fadeInDown");
            }
        });
        $('.we-do_img, .design-img, .sends-slider, .progress-icons__block, .work_us-img, .client-img').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("zoomIn").css('opacity', '1');;
            }
        });
        $('.card-center').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 750) {
                $(this).addClass("flipInX").css('opacity', '1');;
            }
        });
    });

    //animated numbers

    var show = true;
    var countbox = ".progress-icons";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 750 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.progress-icons__block__number').css('opacity', '1');
            $('.progress-icons__block__number').spincrement({
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });

    //big slider
    $('.header-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    //sends slider
    $('.sends-slider').slick({
        autoplay: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button1" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    //popup open
    $('.popup-opens').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});
