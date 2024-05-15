$(document).ready(function(){
    $("#contentSection").hide();
        
    browserWidth();
    $(window).resize(function(){
        browserWidth();
    });

//Slider Part
    var $slider = [
        ["main_00", "Stock Photo", "+ Read More", "Main", "Page", "Everyday take a picture"],
        ["main_01", "Animal", "+ More View", "01.", "Animal", "Stock Photo"],
        ["main_02", "Art", "+ More View", "02.", "Art", "Stock Photo"],
        ["main_03", "Business", "+ More View", "03.", "Business", "Stock Photo"],
        ["main_04", "Food", "+ More View", "04.", "Food", "Stock Photo"],
        ["main_05", "Interior", "+ More View", "05.", "Interior", "Stock Photo"],
        ["main_06", "Nature", "+ More View", "06.", "Nature", "Stock Photo"]
    ];

    $("#mainVisualSlideWrap .slideItem").each(function(index){
        $(this).css("background-image", "url(img/title/"+$slider[index][0]+".jpg)");
    });


    var $last_slide = $("#mainVisualSlideWrap .slideItem").last();
    
    $("#mainVisualSlideWrap").prepend($last_slide).css("margin-left", "-100%");
    $("#mainVisualSlideWrap .slideItem").eq(1).addClass("view");

    function main_title(){
        var $now_view = $(".slideItem.view").attr("rel");
        var $next_view = $(".slideItem.view").next().attr("rel");
        var $prev_view = $(".slideItem.view").prev().attr("rel");
        console.log($now_view); 
        $(".mainTitle").text($slider[$now_view][1]);
        $(".moreBtn .btnText").text($slider[$now_view][2]);
        $(".nextBtn .nextBtn_topText").text($slider[$next_view][3]);
        $(".nextBtn .nextBtn_botText").text($slider[$next_view][4]);
        $(".prevBtn .prevBtn_topText").text($slider[$prev_view][3]);
        $(".prevBtn .prevBtn_botText").text($slider[$prev_view][4]);
        $(".subTitle").text($slider[$now_view][5]);
    }
    main_title();

//Top Bar Scroll Part
    $(window).scroll(function(){
        var cur_scrollTop = $(window).scrollTop();
        if(cur_scrollTop > 1){
            $("header").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
        }
    });

//Nextpage Part
    $(".nextBtn").click(function(){
        var $f_slide = $(".headerBg .slide").first();

        $(".headerBg").animate({"margin-left":"-200%"}, 300, function(){
            $(".headerBg").append($f_slide).css("margin-left", "-100%");
            $(".headerBg .slide").removeClass("view");    
            $(".headerBg .slide").eq(1).addClass("view");
            main_title();
        });
        $("#contentSection").hide();
    });

//Previouspage Part
    $(".prevBtn").click(function(){
        var $l_slide = $(".headerBg .slide").last();

        $(".headerBg").animate({"margin-left":"0"}, 300, function(){
            $(".headerBg").prepend($l_slide).css("margin-left", "-100%");
            $(".headerBg .slide").removeClass("view");    
            $(".headerBg .slide").eq(1).addClass("view");
            main_title();
        });
        $("#contentSection").hide();
    });

//Hamburger Menu Part
    $("#topBar .menu_hamburger").click(function(){
        var $active = $(this).hasClass("active");
        if($active!=true){
            $(this).addClass("active");
            $(".f_hamburger, .s_hamburger, .t_hamburger").stop().animate({"top":"46px"}, 200, function(){
                $(".f_hamburger, .s_hamburger, .t_hamburger").addClass("active");
            });
            $(".mobileSubMenu").slideDown();
        }else{
            $(this).removeClass("active");
            $(".f_hamburger, .s_hamburger, .t_hamburger").removeClass("active")
            $(".f_hamburger").stop().delay(200).animate({"top":"38px"}, 200);
            $(".s_hamburger").stop().delay(200).animate({"top":"46px"}, 200);
            $(".t_hamburger").stop().delay(200).animate({"top":"54px"}, 200);
            $(".mobileSubMenu").slideUp();
        }
        return false;
    });
    

    function togglePopup(selector, disableScroll) {
        $(selector).fadeToggle(300);
        if (disableScroll) {
            $("body").toggleClass("modal-open");
        }
        return false;
    }
    
    $("#loginBtn").click(function() {
        togglePopup("#loginSection", true);
    });
    
    $("#joinBtn").click(function() {
        togglePopup("#joinSection", true);
    });
    
    $(".closeBtn, .darkBg").click(function() {
        var sectionId = $(this).closest("section").attr("id");
        togglePopup("#" + sectionId, false);
    });
    
    $(".loginLink, .joinLink").click(function() {
        var targetId = $(this).data("target");
        togglePopup("#loginSection, #joinSection", true);
        togglePopup(targetId, true);
    });
    

//More Button Part
    $(".moreBtn").hover(function(){
        $(".moreBtn_bg").stop().animate({"width":"100%"}, 500);
    }, function(){
        $(".moreBtn_bg").stop().animate({"width":0},300);
    });

    $("header .btnText").hover(function(){
        $(this).addClass("active")
    }, function(){
        $(this).removeClass("active")
    });

    $("#pageSection .moreBtn").click(function(){
        $("section").show();
        var $now_view = $(".slide.view").attr("rel");
        var urls = [
            "aboutus.html",
            "animal.html",
            "art.html",
            "business.html",
            "food.html",
            "interior.html",
            "nature.html"
        ];
    
        if ($now_view >= 0 && $now_view < urls.length) {
            $.ajax({
                url: urls[$now_view],
                method: "GET",
                success: function(result) {
                    $("#content").html(result);
                },
                error: function(xhr, status, error) {
                    console.error("Error loading " + urls[$now_view] + ": " + error);
                }
            });
        } else {
            console.error("Invalid view index: " + $now_view);
        }
    
        $("html, body").animate({scrollTop: $("section").offset().top - 100}, 1000);
    });
    


    //Page Button Part
    function browserWidth(){
        var $winWidth = $(this).width();
        // console.log($winWidth);
        // Page Resizing Animation Part
        if($winWidth>575){ 
            if($winWidth>1199){//pc
                $(".prevBtn_topText").stop().animate({"top":"50%", "left":"8.33%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".prevBtn_botText").stop().animate({"top":"50%", "left":"8.33%"}, 300,);
                $(".prevBtn_topLine").stop().animate({"width":"8.33%"}, 300, function(){
                    $(".prevBtn_topLine").stop().animate({"top":"50%"}, 300);
                });
                $(".prevBtn_botLine").stop().animate({"width":"8.33%"}, 300, function(){
                    $(".prevBtn_botLine").stop().animate({"top":"50%"}, 300);
                });


                $(".nextBtn_topText").stop().animate({"top":"50%", "right":"8.33%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".nextBtn_botText").stop().animate({"top":"50%", "right":"8.33%"}, 300,);
                $(".nextBtn_topLine").stop().animate({"width":"8.33%"}, 300, function(){
                    $(".nextBtn_topLine").stop().animate({"top":"50%"}, 300);
                });
                $(".nextBtn_botLine").stop().animate({"width":"8.33%"}, 300, function(){
                    $(".nextBtn_botLine").stop().animate({"top":"50%"}, 300);
                });

                // Window Resizing hamburger menu part
                $("#topBar .menu_hamburger").removeClass("active");
                $(".f_hamburger, .s_hamburger, .t_hamburger").removeClass("active")
                $(".f_hamburger").stop().delay(200).animate({"top":"38px"}, 200);
                $(".s_hamburger").stop().delay(200).animate({"top":"46px"}, 200);
                $(".t_hamburger").stop().delay(200).animate({"top":"54px"}, 200);
                $(".mobileSubMenu").slideUp();

            }else{ //tablet
                $(".prevBtn_topText").stop().animate({"top":"70%", "left":"10%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".prevBtn_botText").stop().animate({"top":"70%", "left":"10%"}, 300,);
                $(".prevBtn_topLine").stop().animate({"width":"10%"}, 300, function(){
                    $(".prevBtn_topLine").stop().animate({"top":"70%"}, 300);
                });
                $(".prevBtn_botLine").stop().animate({"width":"10%"}, 300, function(){
                    $(".prevBtn_botLine").stop().animate({"top":"70%"}, 300);
                });


                $(".nextBtn_topText").stop().animate({"top":"70%", "right":"10%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".nextBtn_botText").stop().animate({"top":"70%", "right":"10%"}, 300,);
                $(".nextBtn_topLine").stop().animate({"width":"10%"}, 300, function(){
                    $(".nextBtn_topLine").stop().animate({"top":"70%"}, 300);
                });
                $(".nextBtn_botLine").stop().animate({"width":"10%"}, 300, function(){
                    $(".nextBtn_botLine").stop().animate({"top":"70%"}, 300);
                });

            }
        }else{ //moblie
            $(".prevBtn_topText").stop().animate({"top":"90%", "left":"10%", "trasform":"traslate(0, -100%)"}, 300,);
            $(".prevBtn_botText").stop().animate({"top":"90%", "left":"10%"}, 300,);
            $(".prevBtn_topLine").stop().animate({"width":"10%"}, 300, function(){
                $(".prevBtn_topLine").stop().animate({"top":"90%"}, 300);
            });
            $(".prevBtn_botLine").stop().animate({"width":"10%"}, 300, function(){
                $(".prevBtn_botLine").stop().animate({"top":"90%"}, 300);
            });


            $(".nextBtn_topText").stop().animate({"top":"90%", "right":"10%", "trasform":"traslate(0, -100%)"}, 300,);
            $(".nextBtn_botText").stop().animate({"top":"90%", "right":"10%"}, 300,);
            $(".nextBtn_topLine").stop().animate({"width":"10%"}, 300, function(){
                $(".nextBtn_topLine").stop().animate({"top":"90%"}, 300);
            });
            $(".nextBtn_botLine").stop().animate({"width":"10%"}, 300, function(){
                $(".nextBtn_botLine").stop().animate({"top":"90%"}, 300);
            });
        }
    }

    

    $(".prevBtn").hover(function(){  
        var $winWidth = $(this).width(); 
        if($winWidth>575){
            if($winWidth>1199){ // pc
                $(".prevBtn_topLine").stop().animate({"top":"45%"}, 300, function(){
                    $(".prevBtn_topLine").stop().animate({"width":"13.33%"}, 300);
                });
                $(".prevBtn_botLine").stop().animate({"top":"55%"}, 300, function(){
                    $(".prevBtn_botLine").stop().animate({"width":"13.33%"}, 300);
                });
                $(".prevBtn_topText").stop().animate({"top":"50%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".prevBtn_botText").stop().animate({"top":"50%"}, 300,);
            }else{ // tablet
                $(".prevBtn_topLine").stop().animate({"top":"65%"}, 300, function(){
                    $(".prevBtn_topLine").stop().animate({"width":"20%"}, 300);
                });
                $(".prevBtn_botLine").stop().animate({"top":"75%"}, 300, function(){
                    $(".prevBtn_botLine").stop().animate({"width":"20%"}, 300);
                });
                $(".prevBtn_topText").stop().animate({"top":"70%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".prevBtn_botText").stop().animate({"top":"70%"}, 300,);
            }
        }else{ // mobile
            $(".prevBtn_topLine").stop().animate({"top":"85%"}, 300, function(){
                $(".prevBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_botLine").stop().animate({"top":"95%"}, 300, function(){
                $(".prevBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_topText").stop().animate({"top":"90%", "trasform":"traslate(0, -100%)"}, 300,);
            $(".prevBtn_botText").stop().animate({"top":"90%"}, 300,);
        }
    }, function(){
        browserWidth();
    });

    $(".nextBtn").hover(function(){
        var $winWidth = $(this).width();   
        if($winWidth>575){
            if($winWidth>1199){ // pc
                $(".nextBtn_topLine").stop().animate({"top":"45%"}, 300, function(){
                    $(".nextBtn_topLine").stop().animate({"width":"13.33%"}, 300);
                });
                $(".nextBtn_botLine").stop().animate({"top":"55%"}, 300, function(){
                    $(".nextBtn_botLine").stop().animate({"width":"13.33%"}, 300);
                });
                $(".nextBtn_topText").stop().animate({"top":"50%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".nextBtn_botText").stop().animate({"top":"50%"}, 300,);
            }else{ // tablet
                $(".nextBtn_topLine").stop().animate({"top":"65%"}, 300, function(){
                    $(".nextBtn_topLine").stop().animate({"width":"20%"}, 300);
                });
                $(".nextBtn_botLine").stop().animate({"top":"75%"}, 300, function(){
                    $(".nextBtn_botLine").stop().animate({"width":"20%"}, 300);
                });
                $(".nextBtn_topText").stop().animate({"top":"70%", "trasform":"traslate(0, -100%)"}, 300,);
                $(".nextBtn_botText").stop().animate({"top":"70%"}, 300,);
            }
        }else{ // mobile
            $(".nextBtn_topLine").stop().animate({"top":"85%"}, 300, function(){
                $(".nextBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_botLine").stop().animate({"top":"95%"}, 300, function(){
                $(".nextBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_topText").stop().animate({"top":"90%", "trasform":"traslate(0, -100%)"}, 300,);
            $(".nextBtn_botText").stop().animate({"top":"90%"}, 300,);
        }
    }, function(){
        browserWidth();
    });

//Top Button Part
    $(window).scroll(function(){
        var $nowScroll = $(this).scrollTop();
        var $target = $("section").offset().top-200;

        if($nowScroll>$target){
            $(".topBtn").slideDown(500);
        }else{
            $(".topBtn").slideUp(500);
        }
    });

    $(".topBtn").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
    });
});
