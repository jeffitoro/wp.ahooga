
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
    
    // if i'm not in page shop woocommerce then action
    if (isFolding != null) {
        var sizenav = $(".menu-wrapper").css("height");
        console.log("sizenav: "+sizenav);
        $("#nav-icons").css({"top":sizenav});
        console.log("jeff");
	
        window.onscroll = function(){
            var sizescroll = window.pageYOffset;
            var sizewidth = window.innerWidth;
            console.log(sizescroll);
	    var sizenav = $(".menu-wrapper").css("height");
            console.log("sizenav: "+sizenav);
            if(sizescroll<10){
                $("#nav-icons").css({"top":sizenav});
                $(".menu-wrapper").fadeIn();
            }else{
                $("#nav-icons").css({"top":"0px"});
                $(".menu-wrapper").fadeOut();
            }
        }
        // show bar bottom
        $("#bar-fixed-top").show();
    }
})
