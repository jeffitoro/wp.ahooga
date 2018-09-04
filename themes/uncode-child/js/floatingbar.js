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

function color_picker_isclicked() {
    document.body.addEventListener("click", function (event) {
        var color_picker = document.querySelector(".parent_color");
        if (color_picker != null && color_picker.contains(event.target)) {
            console.log("Inside div");
        } else {
            console.log("Outside div");
            color_picker_close();
            if (!color_picker_exist) {
                color_picker_not_selected();
            }
        }
        // event.stopPropagation()
    });
};

function color_picker_exist() {
    return document.querySelector(".parent_color");
}

function colorpiker(json) {
    var parent_background = document.createElement("div");
    parent_background.setAttribute("class", "parent_color");
    var background_color = document.createElement("div");
    background_color.setAttribute("class", "color_picker");

    parent_background.appendChild(background_color);
    for (ele in json) {
        background_color.innerHTML += "<div class='color' data-color=" + json[ele].code +
            " style='background-color:" +
            json[ele].rgb_hex.toLowerCase() + "'></div>";
    }
    color_picker_buttons(parent_background);
    return parent_background;
}

function color_picker_clicked(color_picker) {
    if (color_picker == null || color_picker == undefined) {
        console.log("error");
    }
    color_picker.addEventListener("click", function (evt) {
        if (evt.currentTarget !== evt.target) {
            var one_color_clicked = evt.toElement;
            if (one_color_clicked == undefined || this.className !== "parent_color") {
                color_picker_close();
                color_picker_not_selected();
            }
            if (evt.toElement.className == "color") {
                color_picker_img_color(this, one_color_clicked.style.backgroundColor);
                color_picker_close();
            }
        }
        evt.stopPropagation();
    })
    color_picker_isclicked();
}

function color_picker_img_color(element, color) {
    var parent = element.parentElement.querySelector(".image-choices-choice-selected");
    if (parent.querySelector(".image-choices-choice-image-wrap") !== null) {
        var img_btn = parent.querySelector(".image-choices-choice-image-wrap");
        img_btn.setAttribute("style", "background-image:inherit;background-color:" + color);
    }

}

function color_picker_buttons(parent_color_picker) {
    parent_color_picker.innerHTML += "<div class='color_picker_buttons' style='text-align:center'><button>Cancel</button></div>";
    color_picker_control_window(parent_color_picker.querySelector("button"));
}

function color_picker_control_window(button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        color_picker_close();
        color_picker_not_selected()
    });
}

function color_picker_close() {
    if (document.querySelector('div.parent_color') != null) {
        // $("div.parent_color").css({
        //     "display": "none"
        // });
        $("div.parent_color").toggle();
    }

}

function color_picker_not_selected() {
    $(".gchoice_1_32_8").removeClass("image-choices-choice-selected");
}

jQuery(document).ready(function () {
    var pageShop = $("article").html();
    // if i'm not in page shop woocommerce then action
    if (pageShop == null) {
        var color_picker_active = false;

        var width = window.innerWidth;
        if (width >= 960) {
            //show bar bottom
            $("#bar-fixed-bottom").show();
        }

        window.onscroll = function () {
            var sizescroll = window.pageYOffset;
            var sizewidth = window.innerWidth;
            if (sizewidth < 960) {
                if (sizescroll < 100) {
                    $("#bar-fixed-bottom").fadeOut();
                    $(".menu-wrapper").fadeIn();
                } else {
                    $("#bar-fixed-bottom").fadeIn();
                    $(".menu-wrapper").fadeOut();
                }
            }else{
                if (sizescroll < 100) {
                    $("#bar-fixed-bottom").fadeOut();
                    $(".menu-wrapper").fadeIn();
                } else {
                    $("#bar-fixed-bottom").fadeIn();
                    $(".menu-wrapper").fadeOut();
                }
            }
        }

        var price_top = document.querySelector("div.price-container>.price>.h2");
        price_top.setAttribute("style", "font-weight:700;font-size:16px");
        price_top.textContent = "Starting From 1269,00 €";

        // show bar bottom
        //$("#bar-fixed-bottom").show();

        // table with elements of product

        // title of product
        var title = $(".uncont>.product_title.entry-title").html();

        //get desciption
        if (document.querySelector("#description") != null) {
            var description = document.querySelector("#description");
        }

        var produits = document.querySelectorAll("input[id^='choice_']");
        produits.forEach(function (produit) {
            produit.addEventListener("click", function (event) {
                //bouton color action
                if (this.id == "choice_1_32_8") {
                    var this_element_parent = document.querySelector("#field_1_32");
                    if (color_picker_exist()) {
                        // document.querySelector(".parent_color").setAttribute("style", "display:block");
                        return;
                    }
                    $.getJSON("./../../wp-content/themes/uncode-child/color_ral.json", function (json) {
                        //creation colorpicker;
                        var color_picker = colorpiker(json);
                        if (color_picker != null) {
                            this_element_parent.appendChild(color_picker);
                            color_picker_clicked(color_picker);
                        }
                    })
                }

                var tabElementsProduct = [];
                tabElementsProduct.push(title);
                produits.forEach(function (self) {
                    if (self.checked) {
                        var label = self.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerHTML;
                        label += ": ";
                        if (document.querySelector(".image-choices-choice-text") != null) {
                            label += document.querySelector(".image-choices-choice-text").innerHTML;
                            label += self.parentElement.querySelector("label").textContent;
                        } else {
                            let doc = new DOMParser().parseFromString(self.parentElement.querySelector("label").innerHTML, 'text/html');
                            label += doc.body.firstChild.textContent;
                        }
                        tabElementsProduct.push(label);
                    }
                });
                var label = this.parentElement.parentElement.parentElement.parentElement.querySelector("label").innerText;

                var selection = document.querySelector("select[id='pa_" + label.toLowerCase() + "']");
                if (selection != null) {
                    if (this.parentElement.querySelector("label") == null) {
                        label = document.querySelector(".image-choices-choice-text").innerHTML;
                    } else {
                        label = this.parentElement.querySelector("label").innerText;
                    }
                    var otherindex = 1;
                    for (let index = 0; index < selection.length; index++) {
                        var reg = new RegExp(selection[index].label);
                        if (reg.test(label)) {
                            otherindex = index;
                        }
                    }

                    selection.options[otherindex].selected = true;
                    fireEvent(selection, 'change');
                }
                // if (document.querySelector("#description") != null) {
                //     document.querySelector("#description").remove();
                //     var tab_pane2 = document.createElement("div");
                //     tab_pane2.setAttribute("class", "tab-pane fade limit-width single-h-padding active in");
                //     tab_pane2.setAttribute("id", "description");
                //     document.querySelector(".tab-content").appendChild(tab_pane2);
                //     var i = 0;
                //     tabElementsProduct.forEach(function (ele) {
                //         var span = document.createElement("li");
                //         var em = document.createElement("em");
                //         console.log(ele);
                //         if (i != 0) {
                //             em.appendChild(document.createTextNode(ele));
                //         } else {
                //             em.appendChild(document.createTextNode(ele));
                //         }
                //         span.appendChild(em);
                //         document.querySelector("#description").appendChild(span);
                //         i++
                //     })
                // }
                setTimeout(() => {
                    var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                    var parentdescription = document.querySelector("#total").parentElement;
                    var q = document.querySelectorAll("input[id^='quantity_']")[0].value;
                    document.querySelector("#total").textContent = parseInt(fields.split(' ').join('')) * parseInt(q) + ",00 €";
                }, 2000);
            })
        });

        setTimeout(() => {
            if (document.querySelectorAll("ul[id^='gform_totals_']")[0] != null) {
                var fields = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;
                document.querySelector("#total").appendChild(document.createTextNode(fields));
            }
        }, 2000);

        var selection = document.querySelector("select[id='pa_model']");
        var otherindex = 1;
        for (let index = 0; index < selection.length; index++) {
            var chaine = selection[index].label;
            // debut valeur par defaut
            if (/Essential/.test(chaine)) {
                otherindex = index;
            }
        }
        selection.options[otherindex].selected = true;
        fireEvent(selection, 'change');

        var btnDefault;
        if (document.querySelector("button[name^='add-to-cart']") != null) {
            btnDefault = document.querySelector("button[name^='add-to-cart']");
        } else {
            btnDefault = document.querySelector("button[class^='single_add_to_cart_button']");
        }
        btnDefault.setAttribute('style', 'display:none');
        var btnPerso = document.querySelector("#btn-add");
        var form = document.querySelectorAll("form")[1];

        btnPerso.addEventListener("click", function () {
            var mEvent = document.createEvent("MouseEvent");
            mEvent.initMouseEvent("click", true, true, window, 0,
                0, 0, 0, 0,
                false, false, false, false,
                0, null);
            btnDefault.dispatchEvent(mEvent);
        })


        if (document.querySelectorAll("input[id^='quantity_']")[0] != null) {
            var produits3 = document.querySelectorAll("input[id^='quantity_']");
            ["keyup", "click"].forEach(function (event) {
                produits3[0].addEventListener(event, function (e) {
                    var quantity = e.srcElement.value;
                    var quantityCurrent = document.querySelectorAll("ul[id^='gform_totals_']")[0].querySelector(".formattedTotalPrice.ginput_total").textContent;;
                    var parentdescription = document.querySelector("#total").parentElement;
                    parentdescription.removeChild(parentdescription.lastElementChild);
                    var p = document.createElement("p");
                    p.setAttribute("id", "total");
                    p.style.textAlign = "center";
                    parentdescription.appendChild(p);
                    document.querySelector("#total").appendChild(
                        document.createTextNode(parseInt(quantity) * parseInt(quantityCurrent.split(' ').join('')) + ",00 €"));
                })
            })
        }

        //hide other form for produit	
        document.querySelectorAll("select[id^='pa_']").forEach(function (ele) {
            ele.parentElement.parentElement.setAttribute("style", "display:none");
        })

        function fireEvent(element, event) {
            if (document.createEventObject) {
                // dispatch for IE	
                var evt = document.createEventObject();
                return element.fireEvent('on' + event, evt)
            } else {
                // dispatch for firefox + others	
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(event, true, true); // event type,bubbling,cancelable	
                return !element.dispatchEvent(evt);
            }
        }

        var parent = document.querySelector(".product_totals").parentNode;
        parent.insertBefore(document.querySelector(".woocommerce-variation-add-to-cart"),document.querySelector(".product_totals"));

        var content = document.querySelector(".tab-content");
        var tab_pane = document.createElement("div");
        tab_pane.setAttribute("class", "tab-pane fade limit-width single-h-padding active in");
        tab_pane.setAttribute("id", "tab-technicals-73472");
        tab_pane.appendChild(document.createTextNode("Jefferson"));
        content.appendChild(tab_pane);

        var tab_pane2 = document.createElement("div");
        tab_pane2.setAttribute("class", "tab-pane fade limit-width single-h-padding");
        tab_pane2.setAttribute("id", "description");
        content.appendChild(tab_pane2);

        var navtabs = document.querySelector(".nav-tabs");
        var li_nav = document.createElement("li");
        li_nav.setAttribute("class", "additional_information_tab active in");
        li_nav.setAttribute("id", "tab-title-additional_information1");
        li_nav.setAttribute("role", "tab");
        li_nav.setAttribute("aria-controls", "tab-additional_information1");
        li_nav.innerHTML = '<a href="#tab-technicals-73472" data-toggle="tab"><span>Technicals Specifications</span></a> ';
        // navtabs.appendChild(li_nav);

        var li_nav2 = document.createElement("li");
        li_nav2.setAttribute("class", "additional_information_tab");
        li_nav2.setAttribute("id", "tab-title-additional_information2");
        li_nav2.setAttribute("role", "tab");
        li_nav2.setAttribute("aria-controls", "tab-additional_information2");
        li_nav2.innerHTML = '<a href="#description" data-toggle="tab"><span>Configuration Summary</span></a> ';
        // navtabs.appendChild(li_nav2);

        var reviews = document.querySelector(".reviews_tab");
        var reviews_parent = reviews.parentNode;
        reviews_parent.insertBefore(li_nav2, reviews);
        reviews_parent.insertBefore(li_nav, reviews);
        document.querySelector("#tab-title-additional_information").remove();
        // document.querySelector("#tab-additional_information-74074").remove();
        if (document.querySelector("#tab-additional_information-73472") != null) {
            document.querySelector("#tab-additional_information-73472").remove();
        }

        if (document.querySelector("#description") != null) {
            var description = document.querySelector("#tab-technicals-73472");
            // var li = document.createElement("li");tab-technicals-73472
            // li.appendChild(document.createTextNode(title));
            // description.appendChild(li);
            $.getJSON("./../../wp-content/themes/uncode-child/file-txt.json", function (data) {
                description.innerHTML = data.language.fr.options_configurateur.default;
            })
        }

        var models = document.querySelectorAll("#input_1_24>li>label");
        var i = 0;
        models.forEach(function (ele) {
            ele.setAttribute("style", "font-weight:700");
            ele.setAttribute("style", "text-align:left");

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
            ele.setAttribute("style", "font-weight:700");
            ele.setAttribute("style", "text-align:left");

        })
        warranty.forEach(function (ele) {
            switch (other_i) {
                case 0:
                    ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>5 years On Frame And Fork.</br>2 years on all other components.</div>";
                    break;
                case 1:
                    ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>On all other components</div>";
                    break;
                default:
                    break;
            }
            other_i++;
        })
        
        warranty = document.querySelectorAll("#input_1_45>li>label");
        var other_i3 = 0;
        warranty.forEach(function (ele) {
            ele.setAttribute("style", "font-weight:700");
            ele.setAttribute("style", "text-align:left");

        })
        warranty.forEach(function (ele) {
            switch (other_i3) {
                case 0:
                    ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>5 years On Frame And Fork.</br>2 years on all other components.</div>";
                    break;
                case 1:
                    ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>On all other components</div>";
                    break;
                default:
                    break;
            }
            other_i3++;
        })

        var seatpost = document.querySelectorAll("#input_1_17>li>label");
        var other_i2 = 0;
        seatpost.forEach(function (ele) {
            ele.setAttribute("style", "font-weight:700");
            ele.setAttribute("style", "text-align:left");

        })
        seatpost.forEach(function (ele) {
            switch (other_i2) {
                case 0:
                    // ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>5 years On Frame And Fork.</br>2 years on all other components.</div>";
                    break;
                case 1:
                    ele.innerHTML += "<br/><div style='left:0;font-weight:400;display:contents'>For riders above 1m85 tall</div>";
                    break;
                default:
                    break;
            }
            other_i2++;
        })
    }


})
