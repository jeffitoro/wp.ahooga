jQuery(document).ready(function () {
    /*resize_bar();*/
    check_burger_clicked();
    check_payments();  
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

function check_burger_clicked(){
    var menumobile = document.querySelector(".mobile-menu-button");
    menumobile.addEventListener("click", function () {
        if($("body").hasClass("off-opened")&&window.innerWidth>960){
             var items =document.querySelectorAll("li[id^='menu-item-']");
             items.forEach(function (ele) {
                 if(ele.querySelector("a[title='Test ride']")!=null ||ele.querySelector("a[title='E-Shop']")!=null){
                     //ele.setAttribute("style","display:none");
                 }
                 if(ele.querySelector("a[title='en']")!=null){
                     create_div(ele);
                 }else if(ele.querySelector("a[title='nl']")!=null){
                     create_div(ele);
                 }else if(ele.querySelector("a[title='fr']")!=null){
                     create_div(ele);
                 }
             })
        } 
    })

}

function create_div(child){
    var div = null;
    var menu = null;
    if(document.querySelector("#div-languages")!=null){
        console.log("div déjà crée");
        div = document.querySelector("#div-languages");
    }else{
        div = document.createElement("div");
        div.id = "div-languages";
        menu = document.querySelector("#menu-menu_top");
        menu.insertBefore(div,menu.childNodes[0]);
    }
    console.dir(child); 
    if(document.querySelector(child.id)!=null){
        console.log("child exist");
    }else{
        div.appendChild(child);
    }   
}

function check_payments(){
    if(document.querySelector("#payment")!=null){
        var payment = document.querySelector("#payment");
        console.log(payment);
        var logo_payment = document.querySelector("#payment ul").querySelectorAll("li input");
	if(logo_payment!=null){
            logo_payment.forEach(function (ele){
                console.log(ele);
                ele.addEventListener("click",function(evt){
                    console.log('helo');
                    if(!this.classList.contains("payment-border")){
                        this.classList.add("payment-border");
                    }else{
                        this.classList.remove("payment-border");
                    }
                    evt.stopPropagation();
                })
            })
        }       
    }
}
