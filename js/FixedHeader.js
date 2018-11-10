document.addEventListener('DOMContentLoaded', function() {

    var mn = $('.page-head'),
        core = $('.band').eq(0),
        mns = 'page-head-scrolled',
        bit, hdr;

    $(window).resize(function() {

        bit = mn.outerHeight();
        hdr = $('.info-bar').outerHeight();
    })
        .resize().scroll(function() {

        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
            core.css('margin-top', bit);
        } else {
            mn.removeClass(mns);
            core.attr('style', '');
        }
    })
        .on('load', function() {

            $(this).scroll();
        });
});