
(function ($) {
    this.randomtip = function () {
        var length = $("#bar-fixed-bottom").length;
        var ran = Math.floor(Math.random() * length) + 1;
        $("#bar-fixed-bottom:nth-child(" + ran + ")").show();
    };

    $(document).ready(function () {
        randomtip();
    });
})(jQuery);

jQuery(document).ready(function () {
var pageShop = $("article").html();

// if i'm not in page shop woocommerce then action
if (pageShop == null) {
    var width = window.innerWidth;
    if (width>=960) {
        //show bar bottom
        $("#bar-fixed-bottom").show();
    }

    window.onscroll = function(){
        var sizescroll = window.pageYOffset;
        var sizewidth = window.innerWidth;
        console.log(sizewidth);
        if (sizewidth<960){
            if(sizescroll<100){
                $("#bar-fixed-bottom").fadeOut();
                $(".menu-wrapper").fadeIn();
            }else{
                $("#bar-fixed-bottom").fadeIn();
                $(".menu-wrapper").fadeOut();
            }
        }
    }

    var price_top = document.querySelector("div.price-container>.price>.h2");
    price_top.setAttribute("style","font-weight:700;font-size:16px");
    price_top.textContent = "Starting From 1269,00 €";

    // show bar bottom
    //$("#bar-fixed-bottom").show();

    // table with elements of product

    // title of product
    var title = $(".uncont>.product_title.entry-title").html();

    //get desciption
    if(document.querySelector("#description") != null){
        var description = document.querySelector("#description");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(title));
        description.appendChild(li);
    }

    var produits = document.querySelectorAll("input[id^='choice_']");
    produits.forEach(function (produit) {
        produit.addEventListener("click", function (event) {
            var tabElementsProduct = [];
            tabElementsProduct.push(title);
            produits.forEach(function (self) {
                if (self.checked) {
                    console.log("checked");
                    var label = self.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerHTML;
                    label += ": ";
                    if(document.querySelector(".image-choices-choice-text")!=null){
                        label += document.querySelector(".image-choices-choice-text").innerHTML;
                        label += self.parentElement.querySelector("label").textContent;
                        console.log(self.parentElement.querySelector("label").textContent);
                        console.log("hello");
                    }else{
                        let doc = new DOMParser().parseFromString(self.parentElement.querySelector("label").innerHTML, 'text/html');
                        label += doc.body.firstChild.textContent;
                    }
                    tabElementsProduct.push(label);
                }
            });
            console.log(this);
            var label = this.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerText;	
            console.log(label);
            
            var selection = document.querySelector("select[id='pa_"+label.toLowerCase()+"']");
            if(selection!=null){
                if (this.parentElement.querySelector("label")==null) {	
                    label = document.querySelector(".image-choices-choice-text").innerHTML;	
                } else {   	
                    label = this.parentElement.querySelector("label").innerText;	
                }	
                var otherindex=1;	
                for (let index = 0; index < selection.length; index++) {	
                    console.log(selection[index].label +" : "+label+" index: "+index    );	
                    if(selection[index].label==label){	
                        console.log("object");	
                        otherindex = index;	
                    }	
                }	
                console.log(otherindex);	
                console.log(selection.options);	
                selection.options[otherindex].selected = true;	
                fireEvent(selection,'change');
            }	
            if(document.querySelector("#description")!=null){
                document.querySelector("#description").remove();
                var tab_pane2 = document.createElement("div");
                tab_pane2.setAttribute("class","tab-pane fade limit-width single-h-padding active in");
                tab_pane2.setAttribute("id","description");
                document.querySelector(".tab-content").appendChild(tab_pane2);
                var i = 0;
                tabElementsProduct.forEach(function (ele) {
                    var span = document.createElement("li");
                    var em = document.createElement("em");
                    console.log(ele);
                    if(i!=0){
                        em.appendChild(document.createTextNode(ele));
                    }else{
                        em.appendChild(document.createTextNode(ele));
                    }
                    span.appendChild(em);
                    document.querySelector("#description").appendChild(span);
                    i++
                })
            }
            setTimeout(() => {
                var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                var parentdescription = document.querySelector("#total").parentElement;
                var q = document.querySelectorAll("input[id^='quantity_']")[0].value;
                document.querySelector("#total").textContent = parseInt(fields.split(' ').join(''))*parseInt(q)+",00 €";
            }, 2000);
        })
    });

    setTimeout(() => {
        if(document.querySelectorAll("ul[id^='gform_totals_']")[0] != null){
            var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
            document.querySelector("#total").appendChild(document.createTextNode(fields));
        }
    }, 2000);

    var selection = document.querySelector("select[id='pa_engine']");		
    var otherindex=1;	
    for (let index = 0; index < selection.length; index++) {	
        if(selection[index].label=="Your Legs" || selection[index].label=="Hybrid 24v"){	
            otherindex = index;	
        }	
    }
    selection.options[otherindex].selected = true;
    fireEvent(selection,'change');
    console.log(document.querySelector("#total"));
    console.log("ici");


    var btnDefault;
    if(document.querySelector("button[name^='add-to-cart']")!= null){
        btnDefault = document.querySelector("button[name^='add-to-cart']");
    }else{
        btnDefault = document.querySelector("button[class^='single_add_to_cart_button']");
    }
    btnDefault.setAttribute('style','display:none');
    var btnPerso = document.querySelector("#btn-add");
    var form = document.querySelectorAll("form")[1];

    btnPerso.addEventListener("click", function () {
        var mEvent = document.createEvent("MouseEvent");
        mEvent.initMouseEvent("click", true, true, window, 0,
            0, 0, 0, 0,
            false, false, false, false,
            0, null);
        console.log(btnDefault);
        btnDefault.dispatchEvent(mEvent);
    })
    

    if(document.querySelectorAll("input[id^='quantity_']")[0]!=null){
        var produits3 = document.querySelectorAll("input[id^='quantity_']");
        ["keyup","click"].forEach(function (event) {
            produits3[0].addEventListener(event,function (e) {
                var quantity = e.srcElement.value;
                var quantityCurrent = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;;
                var parentdescription = document.querySelector("#total").parentElement;
                parentdescription.removeChild(parentdescription.lastElementChild);
                var p = document.createElement("p");
                p.setAttribute("id", "total");
                p.style.textAlign = "center";
                parentdescription.appendChild(p);
                document.querySelector("#total").appendChild(
                    document.createTextNode(parseInt(quantity)*parseInt(quantityCurrent.split(' ').join(''))+",00 €"));
            })
        })
    }

    //hide other form for produit	
    document.querySelectorAll("select[id^='pa_']").forEach(function (ele) {	
        console.log(ele.id);	
        // if(ele.id != "pa_color"){	
            ele.parentElement.parentElement.setAttribute("style","display:none");        	
        // }	
    })	
     function fireEvent(element,event){	
        if (document.createEventObject){	
        // dispatch for IE	
        var evt = document.createEventObject();	
        return element.fireEvent('on'+event,evt)	
        }	
        else{	
        // dispatch for firefox + others	
        var evt = document.createEvent("HTMLEvents");	
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable	
        return !element.dispatchEvent(evt);	
        }	
    }

    var parent = document.querySelector(".product_totals").parentNode;
    parent.insertBefore(document.querySelector(".woocommerce-variation-add-to-cart"),document.querySelector(".product_totals"));

    var content = document.querySelector(".tab-content");
    var tab_pane = document.createElement("div");
    tab_pane.setAttribute("class","tab-pane fade limit-width single-h-padding");
    tab_pane.setAttribute("id","tab-technicals-73472");
    tab_pane.appendChild(document.createTextNode("Jefferson"));
    content.appendChild(tab_pane);

    var tab_pane2 = document.createElement("div");
    tab_pane2.setAttribute("class","tab-pane fade limit-width single-h-padding active in");
    tab_pane2.setAttribute("id","description");
    content.appendChild(tab_pane2);
   
    var navtabs = document.querySelector(".nav-tabs");
    var li_nav = document.createElement("li");
    li_nav.setAttribute("class","additional_information_tab");
    li_nav.setAttribute("id","tab-title-additional_information1");
    li_nav.setAttribute("role","tab");
    li_nav.setAttribute("aria-controls","tab-additional_information1");
    li_nav.innerHTML = '<a href="#tab-technicals-73472" data-toggle="tab"><span>Technicals Specifications</span></a> ';
    // navtabs.appendChild(li_nav);

    var li_nav2 = document.createElement("li");
    li_nav2.setAttribute("class","additional_information_tab active in");
    li_nav2.setAttribute("id","tab-title-additional_information2");
    li_nav2.setAttribute("role","tab");
    li_nav2.setAttribute("aria-controls","tab-additional_information2");
    li_nav2.innerHTML = '<a href="#description" data-toggle="tab"><span>Configuration Summary</span></a> ';
    // navtabs.appendChild(li_nav2);

    var reviews = document.querySelector(".reviews_tab");
    var reviews_parent = reviews.parentNode;
    reviews_parent.insertBefore(li_nav2,reviews);
    reviews_parent.insertBefore(li_nav,reviews);
    console.log(reviews);
    //document.querySelector("#tab-title-additional_information").remove();
    //document.querySelector("#tab-additional_information-73472").remove();
    if(document.querySelector("#tab-additional_information-74074") != null) {
        document.querySelector("#tab-additional_information-74074").remove();
    }

    if(document.querySelector("#description") != null){
        var description = document.querySelector("#description");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(title));
        description.appendChild(li);
    }

    var labels = document.querySelectorAll("li>label.gfield_label");
    // labels.forEach(function (ele) {
        // console.log(ele);

    //     switch (ele.innerText) {
    //         case "Engine":  ele.innerHTML += "<br/><span class='title'>Quel Engine vous faut-il?</span>";break;
    //         case "Model":   ele.innerHTML += "<br/><span class='title'>Quel Model vous voulez?</span>";break;
    //         case "Color":   ele.innerHTML += "<br/><span class='title'>Quel Color preferez vous?</span>";break;
    //         case "Brakes":  ele.innerHTML += "<br/><span class='title'>Quel Brakes utilisez vous?</span>";break;
    //         case "Saddle":  ele.innerHTML += "<br/><span class='title'>Quel Saddle preferez vous?</span>";break;
    //         case "Seatpost":ele.innerHTML += "<br/><span class='title'>Quel Seatpost preferez vous?</span>";break;
    //         case "Battery": ele.innerHTML += "<br/><span class='title'>Quel Engine vous faut-il?</span>";break;
    //         case "Warranty": ele.innerHTML += "<br/><span class='title'>Quel Durée de Warranty preferez vous?</span>";break;
    //         default:
    //             break;
    //     }
    // })


    var radio = document.querySelectorAll(".gfield_radio");
    
    console.log(radio);

    var models = document.querySelectorAll("#input_1_24>li>label");
    var i = 0;
    models.forEach(function (ele) {
        ele.setAttribute("style","font-weight:700");
        ele.setAttribute("style","text-align:left");
        
    })
    models.forEach(function (ele) {
        switch (i) {
            case 0:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>The original</div>";
            break;
            case 1:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>The most comfy, hassle-free</div>";
            break;
            case 2:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>When comfort meets style</div>";
            break;
            case 3:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>Closer to heaven, literally</div>";
            break;
        
            default:
                break;
        }
        i++;
    })
    var warranty = document.querySelectorAll("#input_1_34>li>label");
    var other_i = 0;
    warranty.forEach(function (ele) {
        ele.setAttribute("style","font-weight:700");
        ele.setAttribute("style","text-align:left");
        
    })
    warranty.forEach(function (ele) {
        switch (other_i) {
            case 0:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>5 Years On Frame And Fork</div>";
            break;
            case 1:
            ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>2 Years On All Other Components</div>";
            break;
            default:
            break;
       }
       other_i++;
    })
}
})

