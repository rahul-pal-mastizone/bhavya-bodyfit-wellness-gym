/*-----------------------------------------------------------------------------------

    Theme Name: Bhavya Bodyfit Wellness Gym
    Description: Fitness and Gym by Dinesh Baghel
    Author: Dinesh Baghel
    Version: 1.0
    
    ---------------------------------- */

! function(l) {
    "use strict";
    var n = l(window);

    function a() {
        var e, a, o, s, t;
        e = l(".full-screen"), a = n.height(), e.css("min-height", a), o = l("header").height(), s = l(".screen-height"), t = n.height() - o, s.css("height", t)
    }
    l("#preloader").fadeOut("normall", function() {
        l(this).remove()
    }), l.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -70
    }), n.on("scroll", function() {
        500 < l(this).scrollTop() ? l(".scroll-to-top").fadeIn(400) : l(".scroll-to-top").fadeOut(400)
    }), l(".scroll-to-top").on("click", function(e) {
        e.preventDefault(), l("html, body").animate({
            scrollTop: 0
        }, 600)
    }), l("#sidebar_toggle").length && (l("body").addClass("sidebar-menu"), l("#sidebar_toggle").on("click", function() {
        l(".sidebar-menu").toggleClass("active"), l(".side-menu").addClass("side-menu-active"), l("#close_sidebar").fadeIn(700)
    }), l("#close_sidebar").on("click", function() {
        l(".side-menu").removeClass("side-menu-active"), l(this).fadeOut(200), l(".sidebar-menu").removeClass("active")
    }), l("#btn_sidebar_colse").on("click", function() {
        l(".side-menu").removeClass("side-menu-active"), l("#close_sidebar").fadeOut(200), l(".sidebar-menu").removeClass("active")
    })), n.on("scroll", function() {
        var e = n.scrollTop(),
            a = l(".navbar"),
            o = l(".blog-nav .logo> img"),
            s = l(".bg-black .logo> img"),
            t = l(".navbar .logo> img");
        100 < e ? (a.addClass("nav-scroll"), t.attr("src", "img/logos/logo-dark.png"), s.attr("src", "img/logos/logo-light.png")) : (a.removeClass("nav-scroll"), t.attr("src", "img/logos/logo-light.png"), o.attr("src", "img/logos/logo-dark.png"))
    }), n.width() <= 991 && l(".navbar-nav .nav-link").on("click", function() {
        l(".navbar-collapse.show").removeClass("show"), l(".navbar .navbar-toggler").addClass("collapsed")
    }), l(".parallax,.bg-img").each(function(e) {
        l(this).attr("data-background") && l(this).css("background-image", "url(" + l(this).data("background") + ")")
    }), l(".popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), n.resize(function(e) {
        setTimeout(function() {
            a()
        }, 500), e.preventDefault()
    }), a(), l(document).ready(function() {
        l(".service-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        }), l(".team-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), l(".testimonial-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }), l(".product-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 15
                },
                480: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), l(".client-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }), l(".slider-fade .owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            margin: 0,
            autoplay: !0,
            smartSpeed: 1e3,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut"
        }), l(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            margin: 0,
            autoplay: !1,
            smartSpeed: 500
        }), l(".header .owl-carousel").on("changed.owl.carousel", function(e) {
            var a = e.item.index - 2;
            l("h3").removeClass("animated fadeInUp"), l("h1").removeClass("animated fadeInUp"), l("p").removeClass("animated fadeInUp"), l(".btn").removeClass("animated fadeInUp"), l(".owl-item").not(".cloned").eq(a).find("h3").addClass("animated fadeInUp"), l(".owl-item").not(".cloned").eq(a).find("h1").addClass("animated fadeInUp"), l(".owl-item").not(".cloned").eq(a).find("p").addClass("animated fadeInUp"), l(".owl-item").not(".cloned").eq(a).find(".btn").addClass("animated fadeInUp")
        }), l(".countup").counterUp({
            delay: 25,
            time: 2e3
        })
    }), n.on("load", function() {
        l(".gallery").magnificPopup({
            delegate: ".popimg",
            type: "image",
            gallery: {
                enabled: !0
            }
        }), l(".single-img").magnificPopup({
            delegate: ".popimg",
            type: "image"
        }), n.stellar()
    })
}(jQuery);



  function upiPayment799(){
    let upiLink = "upi://pay?pa=9144376375-3@ybl&pn=Dinesh_Baghel_Bhavya_Fitness_Gym&am=799&cu=INR";
    window.location.href = upiLink;
    }

  function upiPayment2199(){
    let upiLink = "upi://pay?pa=9144376375-3@ybl&pn=Dinesh_Baghel_Bhavya_Fitness_Gym&am=2199&cu=INR";
    window.location.href = upiLink;
    }

  function upiPayment3599(){
    let upiLink = "upi://pay?pa=9144376375-3@ybl&pn=Dinesh_Baghel_Bhavya_Fitness_Gym&am=3599&cu=INR";
    window.location.href = upiLink;
    }