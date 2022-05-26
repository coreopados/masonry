$(document).ready(function () {

    $('.mobile-button').on('click', function () {
        event.preventDefault();
        $(this).toggleClass('active')
        $(this).next().toggleClass('active')
    })


    if ($('.show-hide-list').find('li').length > 5) {
        $('#show-hide-button').on('click', function () {
            $('.show-hide-list li:nth-child(n+9)').slideToggle('');
            $(this).toggleClass('hide-more');
            if ($(this).hasClass('hide-more')) {
                $(this).html('Скрыть');

            } else {
                $(this).html('Больше вопросов');
            }
        })
    } else {
        $('#show-hide-button').hide();
    }

    $('.block-question').on('click', function () {
        $(this).parent().find('.block-answer').slideToggle('');
        $(this).parent().find('i.fas.fa-plus').toggleClass('rotate');
    });


    $('.block-accept-top').on('click', function () {
        $('.first-screen').find('p').not('.text-accept').fadeOut();
        setTimeout(function () {
            $('.block-contacts').fadeIn();
        }, 500);


    });
    $('.message-close').on('click', function () {
            $('.message-wrap').fadeOut();
            document.cookie = "name = John; max-age = 3600";
    });



});

function updSwiperNumericPagination() {
    this.el.querySelector('.swiper-counter').innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + '</span>';
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-container').forEach(function (node) {
        // Getting slides quantity before slider clones them
        node.slidesQuantity = node.querySelectorAll('.swiper-slide').length;

        // Swiper initialization
        new Swiper(node, {
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: node.querySelector('.swiper-pagination'),
                clickable: true
            },
            on: { // Secondary pagination is update after initialization and after slide change
                init: updSwiperNumericPagination,
                slideChange: updSwiperNumericPagination
            }
        });
    });
});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookie() {
    if (getCookie('name')) {
        $('.message-wrap').hide();
    } else {
        $('.message-wrap').show();
    }
}
