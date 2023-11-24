gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {


    // -- -- -- -- -- --BRUGER MENU
    $('.menu-link').on('click', function () {
        $('.menumenu').removeClass("block").addClass("hidden");
    });



    // -- -- -- -- -- --ANIMATION MENU VERSION SIMPLE
    ScrollTrigger.create({
        trigger: '.pageBanner',
        start: 'bottom 130px',
        pin: false,
        end: 'bottom',
        scrub: 1,
        markers: false,
        toggleActions: 'play pause resume reverse',
        onEnter: showmenu,
        onLeave: showmenu,
        onEnterBack: showmenu,
        onLeaveBack: hidemenu,
    });

    function hidemenu() {
        $('.pageBanner').addClass('h-full');
        $('.imgimg').removeClass('md:h-[8vh]');
        $('.imgimg').addClass('md:h-[15vh]');
        $('.pageBanner').removeClass('md:bg-black');
        $('.pageBanner').addClass('md:bg-opacity-0');
        $('.pageBanner').removeClass('md:bg-opacity-50');
        $('.pageBanner').removeClass('md:backdrop-blur-sm');
        $('.pageBanner').addClass('md:backdrop-blur-none');
    }

    function showmenu() {
        $('.pageBanner').removeClass('h-full');
        $('.pageBanner').addClass('md:bg-black');
        $('.pageBanner').addClass('md:bg-opacity-50');
        $('.pageBanner').removeClass('md:bg-opacity-0');
        $('.imgimg').removeClass('md:h-[15vh]');
        $('.imgimg').addClass('md:h-[8vh]');
        $('.pageBanner').addClass('md:backdrop-blur-sm');
        $('.pageBanner').removeClass('md:backdrop-blur-none');
    }




    // -- -- -- -- -- --ICON ICON ICON
    $('#ic-citi').on('click', function () {
        $('.citizens').removeClass("hidden").addClass("flex");
        $('.manager').removeClass("flex").addClass("hidden");
        $('.virus').removeClass("flex").addClass("hidden");
        $('#ic-mana').addClass("opacity-40");
        $('#ic-vi').addClass("opacity-40");
        $('#ic-citi').removeClass("opacity-40");

    });

    $('#ic-vi').on('click', function () {
        $('.virus').removeClass("hidden").addClass("flex");
        $('.citizens').removeClass("flex").addClass("hidden");
        $('.manager').removeClass("flex").addClass("hidden");
        $('#ic-citi').addClass("opacity-40");
        $('#ic-mana').addClass("opacity-40");
        $('#ic-vi').removeClass("opacity-40");
    });

    $('#ic-mana').on('click', function () {
        $('.citizens').removeClass("flex").addClass("hidden");
        $('.manager').removeClass("hidden").addClass("flex");
        $('.virus').removeClass("flex").addClass("hidden");
        $('#ic-citi').addClass("opacity-40");
        $('#ic-mana').removeClass("opacity-40");
        $('#ic-vi').addClass("opacity-40");
    });

});