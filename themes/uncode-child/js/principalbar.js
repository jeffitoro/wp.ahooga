jQuery(document).ready(function () {
    var li = document.createElement('li');
    var div = document.createElement("div");
    
    window.addEventListener("resize", function (evt) {
        var width = evt.target.outerWidth;
        if (width > 960 && document.querySelector("#menu-top")==null) {
            var menu = document.querySelector(".row-menu>.row-menu-inner");
            var link_lines = document.querySelector(".row-menu>.row-menu-inner>.mmb-container>div");
            menu.setAttribute("style", "padding:18px");
            console.log(link_lines);
            var logo = document.querySelector("#main-logo");
            li.id = "button-lines";
            if(link_lines!==null){
                li.appendChild(link_lines);
            }

            div.appendChild(logo);
            div.className = "col-lg-12 main-menu-container middle";
            div.id = "menu-top";
            div.innerHTML += "<ul style='color:white' class='menu-burger'><li><a href='https://devahooga.molengeek.com/test-ride'>Test Ride</a></li><li><a href='https://devahooga.molengeek.com/homepages/e-shop'>E-Shop</a></li></ul>";
            menu.appendChild(div);
            menu.querySelector('ul').appendChild(li);

        }
    })
})