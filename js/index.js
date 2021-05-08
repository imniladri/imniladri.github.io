// Loader

$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        transform: "translate(0,-50%)",
        "transition-delay": "0.3s",
    });
});

// Scroll Event

// $(window).scroll(function () {
//     $("header").toggleClass("showHeader", window.scrollY > 1000);
// });

let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight - 500) {
        header.classList.add("showHeader");
    } else {
        header.classList.remove("showHeader");
    }
});

// AOS.init();

// Rellax JS

var rellax = new Rellax(".rellax");
