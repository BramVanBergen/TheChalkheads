(function ($) {
    $(function () {

        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        $('.sidenav').sidenav();

        // Typing Intro Init
        setTimeout(function () {
            $(".typed").typewriter({
                speed: 60
            });
        }, 2250);
        sticky();
    }); // end of document ready

    function sticky() {
        // When the user scrolls the page, execute myFunction
        window.onscroll = function () {
            myFunction()
        };

        // Get the navbar
        var navbar = document.getElementById("nav-wrapper");

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");

            }
        }
    }

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        if ($(window).scrollTop() > $(window).height()) {
            $('#nav_bar').addClass('navbar-fixed');
            $('#about').addClass('padding');
        }
        if ($(window).scrollTop() < $(window).height()) {
            $('#nav_bar').removeClass('navbar-fixed');
            $('#about').removeClass('padding');
        }
    });



})(jQuery); // end of jQuery name space

