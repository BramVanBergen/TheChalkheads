(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        // Typing Intro Init

        setTimeout(function () {
            $(".typed").typewriter({
                speed: 60
            });
        }, 2250);
    }); // end of document ready
})(jQuery); // end of jQuery name space
