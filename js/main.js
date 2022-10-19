$('.hamburger').click(function() {
    $(this).toggleClass('is-active')
    $('.mobileMenu').toggleClass('menuActive')
    $('body').toggleClass('scroll')
})

var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $('.mobileMenu').removeClass('menuActive')
    $('body').removeClass('scroll')
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл