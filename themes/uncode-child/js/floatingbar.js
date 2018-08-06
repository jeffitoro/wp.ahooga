(
    function ($) {
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
        // show bar bottom
        $("#bar-fixed-bottom").show();

        // table with elements of product

        // title of product
        var title = $(".uncont>.product_title.entry-title").html();

        //get desciption
        var description = document.querySelector("#description");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(title));
        description.appendChild(li);

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
                        }else{
                            let doc = new DOMParser().parseFromString(self.parentElement.querySelector("label").innerHTML, 'text/html');
                            label += doc.body.firstChild.textContent;
                        }
                        tabElementsProduct.push(label);
                    }
                });

                var label = this.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerText;	
                var selection = document.querySelector("select[id='pa_"+label.toLowerCase()+"']");	
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

                var parentdescription = document.querySelector("#description").parentElement;
                parentdescription.removeChild(parentdescription.lastElementChild);
                var ul = document.createElement("ul");
                ul.setAttribute("id", "description");
                parentdescription.appendChild(ul);
                var i = 0;
                tabElementsProduct.forEach(function (ele) {
                    var span = document.createElement("span");
                    var em = document.createElement("em");
                    console.log(ele);
                    if(i!=0){
                        em.appendChild(document.createTextNode(", "+ele));
                    }else{
                        em.appendChild(document.createTextNode(ele));
                    }
                    span.appendChild(em);
                    document.querySelector("#description").appendChild(span);
                    i++
                })
                setTimeout(() => {
                    var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                    var parentdescription = document.querySelector("#total").parentElement;
                    parentdescription.removeChild(parentdescription.lastElementChild);
                    var p = document.createElement("p");
                    p.setAttribute("id", "total");
                    p.style.textAlign = "center";
                    parentdescription.appendChild(p);
                    var q = document.querySelectorAll("input[id^='quantity_']")[0].value;
                    document.querySelector("#total").appendChild(document.createTextNode(parseInt(fields.split(' ').join(''))*parseInt(q)+",00 €"));
                }, 2000);
            })
        });

        setTimeout(() => {
            if(document.querySelectorAll("ul[id^='gform_totals_']")[0] != null){
                var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                document.querySelector("#total").appendChild(document.createTextNode(fields));
            }
        }, 2000);

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
            if(ele.id != "pa_color"){	
                ele.parentElement.parentElement.setAttribute("style","display:none");        	
            }	
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
    }
})