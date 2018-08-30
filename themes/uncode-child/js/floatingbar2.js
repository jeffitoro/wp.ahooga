(function ($) {
    this.randomtip = function () {
        var length = $("#bar-fixed-top").length;
        var ran = Math.floor(Math.random() * length) + 1;
        $("#bar-fixed-top:nth-child(" + ran + ")").show();
    };

    $(document).ready(function () {
        randomtip();
    });
})(jQuery);

jQuery(document).ready(function () {
    var isFolding = $("#shop").html();

    // if i'm in page shop woocommerce then action
    if (isFolding != null) {
        var sizenav = $(".menu-wrapper").css("height");
        var menumobile = document.querySelector(".mobile-menu-button");
        menumobile.addEventListener("click", function () {
            console.log("size: "+$(".vmenu-wrap-cell").css("width"));
            var sizenav_mobile = $(".vmenu-wrap-cell").css("width");
            if (menumobile.classList.contains("close")) {
                sizemenu = $("article").css("width");
                var sizebar = parseInt(sizemenu) - parseInt(sizenav_mobile);
                $("#bar-fixed-top>.row").css({"justify-content":"flex-end","transition":"0.5s"})
                $("#nav-icons").css({"width":sizebar,"margin":"inherit","transition":"0.5s","padding-right":"42%"});
                $(".masthead-vertical.menu-sticky").css({"z-index":"3000","transition":"0.5s"});
            } else {
                $("#bar-fixed-top>.row").css({"justify-content":"center","transition":"0.5s"})
                $("#nav-icons").css({"width":"100%","margin":"0 auto","padding":"inherit"});
                sizemenu = $("article").css("width");
            }
        })
        $("#nav-icons").css({
            "top": sizenav
        });

        window.onscroll = function () {
            var sizescroll = window.pageYOffset;
            var sizewidth = window.innerWidth;
            var sizenav = $(".menu-wrapper").css("height");
            if (sizescroll < 10) {
                $("#nav-icons").css({
                    "top": sizenav
                });
                $(".menu-wrapper").fadeIn();
            } else {
                $("#nav-icons").css({
                    "top": "0px"
                });
                $(".menu-wrapper").fadeOut();
            }
        }
        // show bar bottom
        $("#bar-fixed-top").show();
    }
})