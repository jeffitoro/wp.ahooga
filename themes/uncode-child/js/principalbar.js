jQuery(document).ready(function () {
    resize_bar();
    
})

function resize_bar() {
    if(document.querySelector("#buttons-lines")==null || document.querySelector("#menu-top")==null){
        var li = document.createElement('li');
        li.id = "button-lines";
        var div = document.createElement("div");
        div.id = "menu-top";
        div.className = "col-lg-12 main-menu-container middle";
    }

    window.addEventListener("resize", function (evt) {
        var width = evt.target.outerWidth;
        var menu = document.querySelector(".row-menu>.row-menu-inner");
        var link_lines = document.querySelector(".row-menu>.row-menu-inner>.mmb-container>div");
        var logo = document.querySelector("#main-logo");
        if (width > 960 ) {
            menu.setAttribute("style", "padding:18px");

            if (link_lines !== null) {
                li.appendChild(link_lines);
            }

            if(div.querySelector(".menu-burger")!=null){
                div.insertBefore(document.querySelector("#main-logo"),div.childNodes[0]);
            }else{
                div.appendChild(logo);
            }

            if(div.querySelector(".menu-burger")==null){
                div.innerHTML += "<ul style='color:white' class='menu-burger'><li><a href='https://devahooga.molengeek.com/test-ride'>Test Ride</a></li><li><a href='https://devahooga.molengeek.com/homepages/e-shop'>E-Shop</a></li></ul>";
                menu.appendChild(div);
            }
            menu.querySelector('ul').appendChild(li);

            

        }else{
            menu.querySelector("#logo-container-mobile").appendChild(logo);

            if(link_lines == null){
                menu.querySelector(".mmb-container").appendChild(document.querySelector("#button-lines>div"));
            }
        }
    })
}