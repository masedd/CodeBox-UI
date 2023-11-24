$(document).ready(function() {
    /*----------------Navbar Collapse----------------*/
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    ScrollOut({
        onShown(el) {
            el.classList.add("animated");
        }
    });

    $(document).ready(function() {
        $(".item-portfolio").slice(0, 6).show();
        $("#loadMore").on("click", function(e) {
            e.preventDefault();
            $(".item-portfolio:hidden").slice(0, 6).slideDown();
            if ($(".item-portfolio:hidden").length == 0) {
                $("#loadMore").text("No Content").addClass("noContent");
            }
        });

    })

    "use strict";
    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 300,
            autoplay: 7000,
            navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

    $("#owl-client").owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 300,
        autoplay: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    })


});