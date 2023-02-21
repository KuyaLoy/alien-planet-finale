new WOW().init();

$(function () {
    var height = $("header").outerHeight();
    if (window.matchMedia("(orientation: portrait)").matches) {
        $("main .header-banner").css({
            "margin-top": height + "px",
            minHeight: "calc(50vh - " + height + "px)",
        });

        $(window).resize(function () {
            $("main .header-banner").css({
                "margin-top": height + "px",
                minHeight: "calc(50vh - " + height + "px)",
            });
        });
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        $("main .header-banner").css({
            "margin-top": height + "px",
            minHeight: "calc(100vh - " + height + "px)",
        });

        $(window).resize(function () {
            $("main .header-banner").css({
                "margin-top": height + "px",
                minHeight: "calc(100vh - " + height + "px)",
            });
        });
    }
});

$(function () {
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('header ul li a[href^="#"]').on("click", function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $("a").each(function () {
                $(this).removeClass("active");
            });
            $(this).addClass("active");

            var target = this.hash,
                menu = target;
            $target = $(target);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $target.offset().top + 2,
                    },
                    500,
                    "swing",
                    function () {
                        window.location.hash = target;
                        $(document).on("scroll", onScroll);
                    }
                );
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $("header ul li a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $("header ul li a").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }
});

anime({
    targets: "main .header-banner img:nth-of-type(2)",
    right: 0,
    duration: 1000,
    easing: "easeInOutQuad",
});
anime({
    targets: "main .header-banner img:nth-of-type(3)",
    bottom: "15%",
    duration: 2000,
    delay: 1000,
});
$("main .header-banner img:nth-of-type(1)").fadeIn("slow");

var waypoint = new Waypoint({
    element: document.querySelector(".story"),
    handler: function (direction) {
        anime({
            targets: "main .story img",
            left: "-5%",
            easing: "easeInOutQuad",
            duration: 750,
            //delay: 500
        });
        // $('main .story .container .story-wrapper').fadeIn('slow');
        $('main .story .container .story-wrapper').slideDown('slow').fadeIn('slow');
    }, offset: "50%"
});

var waypoint = new Waypoint({
    element: document.querySelector(".step"),
    handler: function (direction) {
        anime({
            targets: "main .step > img",
            right: 0,
            easing: "easeInOutQuad",
            duration: 750,
            //delay: 500
        });
        
        $('main .step .container .step-wrapper .step-content').css('opacity','1');
    },
});

var waypoint = new Waypoint({
    element: document.querySelector(".team"),
    handler: function (direction) {
        anime({
            targets: "main .team  img.bottom-rock",
            bottom: "-2.5%",
            easing: "easeInOutQuad",
            duration: 750,
            //delay: 500
        });
    },
    offset: "50%",
});

// $(function(){
//     $('.alien-planet-nft-1').owlCarousel({
//         loop:true,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 2000,
//         autoplaySpeed: 2000,
//         responsive:{
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });

//     $('.alien-planet-nft-2').owlCarousel({
//         loop:true,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 2000,
//         autoplaySpeed: 2000,
//         rtl: true,
//         responsive:{
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:4
//             }
//         }
//     })

// });
const swiper = new Swiper(".alien-planet-nft-1", {
    // Optional parameters
    loop: true,
    speed: 1200,
    grabCursor: true,
    breakpoints: {
        300: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    freeMode: true,
    lazy: true,
});

const swiper2 = new Swiper(".alien-planet-nft-2", {
    // Optional parameters
    loop: true,
    speed: 1200,
    grabCursor: true,
    breakpoints: {
        300: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    freeMode: true,
    lazy: true,
});
