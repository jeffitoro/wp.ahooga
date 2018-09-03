jQuery(document).ready(function () {
    var menu = document.querySelector(".row-menu>.row-menu-inner");
    menu.setAttribute("style","padding:18px");
    var link_lines = document.querySelector(".row-menu>.row-menu-inner>.mmb-container>div");
    var logo = document.querySelector("#main-logo");
    var li = document.createElement('li');
    li.id = "button-lines";
    li.appendChild(link_lines);

    var div = document.createElement("div");
    div.appendChild(logo);
    div.className = "col-lg-12 main-menu-container middle";
    div.id = "menu-top";
    div.innerHTML += "<ul style='color:white' class='menu-burger'><li><a href='https://devahooga.molengeek.com/test-ride'>Test Ride</a></li><li><a href='https://devahooga.molengeek.com/homepages/e-shop'>E-Shop</a></li></ul>";
    menu.appendChild(div);
    menu.querySelector('ul').appendChild(li);
    console.log(div);
})