$(document).ready(function(){
        
    browserWidth();
    $(window).resize(function(){
        browserWidth();
    });

    //Main Visual Texting
    const typedText = $('#typedText');
    const strings = ["Javascript", "CSS", "Photoshop", "Figma"];
    
    let currentStrIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    
    function type() {
        const currentStr = strings[currentStrIdx];
        if (!isDeleting) {
            typedText.text(currentStr.substring(0, currentCharIdx + 1));
            currentCharIdx++;
        } else {
            typedText.text(currentStr.substring(0, currentCharIdx - 1));
            currentCharIdx--;
        }
    
        if (currentCharIdx === currentStr.length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, 2400);
        } else if (currentCharIdx === 0 && isDeleting) {
            isDeleting = false;
            currentStrIdx = (currentStrIdx + 1) % strings.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    }
    
    type();

    //Top Bar Scroll Part
        $(window).scroll(function(){
            var cur_scrollTop = $(window).scrollTop();
            if(cur_scrollTop > 1){
                $("header").addClass("sticky");
            }else{
                $("header").removeClass("sticky");
            }
        });

    var currentVideoIndex = 0;
    var totalVideos = $('.slideVideo').length;
    
    // 비디오에 따른 버튼 텍스트와 숫자 배열
    var buttonInfo = [
        {text: "Diary", number: "01"},
        {text: "Laptop", number: "02"},
        {text: "Beer with LP", number: "03"},
        {text: "Cherry blossom", number: "04"}
    ];

    // 다음 비디오로 이동하는 함수
    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % totalVideos;
        slideVideos();
    }

    // 이전 비디오로 이동하는 함수
    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + totalVideos) % totalVideos;
        slideVideos();
    }

    // 비디오를 슬라이드하여 표시하는 함수
    function slideVideos() {
        var slideDistance = currentVideoIndex * -100 + '%';
        $('.videoContainer').css('transform', 'translateX(' + slideDistance + ')');
        // 버튼 텍스트와 숫자 변경
        $('.prevBtn_botText').text(buttonInfo[(currentVideoIndex - 1 + totalVideos) % totalVideos].text);
        $('.prevBtn_topText').text(buttonInfo[(currentVideoIndex - 1 + totalVideos) % totalVideos].number);
        $('.nextBtn_botText').text(buttonInfo[(currentVideoIndex + 1) % totalVideos].text);
        $('.nextBtn_topText').text(buttonInfo[(currentVideoIndex + 1) % totalVideos].number);
    }

    // 이전 버튼 클릭 시 이벤트 처리
    $('.prevBtn').click(function() {
        prevVideo();
    });

    // 다음 버튼 클릭 시 이벤트 처리
    $('.nextBtn').click(function() {
        nextVideo();
    });

    // 페이지 로드 시 초기 버튼 텍스트 설정
    slideVideos();
    

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

    $(".mainVisual .moreBtn").click(function(){
        $("#contentSection").show();
        $("html, body").animate({scrollTop: $("section").offset().top - 100}, 1000);
    });
    


    //Page Button Part
    function browserWidth(){
        var $winWidth = $(this).width();
        // console.log($winWidth);
        // Reset Page Button
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
        
        if ($winWidth > 1199) { // PC
            $(".prevBtn_topLine").stop().animate({"top":"45%"}, 300, function(){
                $(".prevBtn_topLine").stop().animate({"width":"13.33%"}, 300);
            });
            $(".prevBtn_botLine").stop().animate({"top":"55%"}, 300, function(){
                $(".prevBtn_botLine").stop().animate({"width":"13.33%"}, 300);
            });
            $(".prevBtn_topText").stop().animate({"top":"50%", "transform":"translate(0, -100%)"}, 300);
            $(".prevBtn_botText").stop().animate({"top":"50%"}, 300);
        }
        else if ($winWidth > 575) { // 테블릿
            $(".prevBtn_topLine").stop().animate({"top":"65%"}, 300, function(){
                $(".prevBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_botLine").stop().animate({"top":"75%"}, 300, function(){
                $(".prevBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_topText").stop().animate({"top":"70%", "transform":"translate(0, -100%)"}, 300);
            $(".prevBtn_botText").stop().animate({"top":"70%"}, 300);
        } 
        else { // 모바일
            $(".prevBtn_topLine").stop().animate({"top":"85%"}, 300, function(){
                $(".prevBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_botLine").stop().animate({"top":"95%"}, 300, function(){
                $(".prevBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".prevBtn_topText").stop().animate({"top":"90%", "transform":"translate(0, -100%)"}, 300);
            $(".prevBtn_botText").stop().animate({"top":"90%"}, 300);
        }
    }, function(){
        browserWidth();
    });
    
    $(".nextBtn").hover(function(){
        var $winWidth = $(this).width();   
        if ($winWidth > 1199) { // PC
            $(".nextBtn_topLine").stop().animate({"top":"45%"}, 300, function(){
                $(".nextBtn_topLine").stop().animate({"width":"13.33%"}, 300);
            });
            $(".nextBtn_botLine").stop().animate({"top":"55%"}, 300, function(){
                $(".nextBtn_botLine").stop().animate({"width":"13.33%"}, 300);
            });
            $(".nextBtn_topText").stop().animate({"top":"50%", "transform":"translate(0, -100%)"}, 300);
            $(".nextBtn_botText").stop().animate({"top":"50%"}, 300);
        } else if ($winWidth > 575) { // 테블릿
            $(".nextBtn_topLine").stop().animate({"top":"65%"}, 300, function(){
                $(".nextBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_botLine").stop().animate({"top":"75%"}, 300, function(){
                $(".nextBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_topText").stop().animate({"top":"70%", "transform":"translate(0, -100%)"}, 300);
            $(".nextBtn_botText").stop().animate({"top":"70%"}, 300);
        } else { // 모바일
            $(".nextBtn_topLine").stop().animate({"top":"85%"}, 300, function(){
                $(".nextBtn_topLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_botLine").stop().animate({"top":"95%"}, 300, function(){
                $(".nextBtn_botLine").stop().animate({"width":"20%"}, 300);
            });
            $(".nextBtn_topText").stop().animate({"top":"90%", "transform":"translate(0, -100%)"}, 300);
            $(".nextBtn_botText").stop().animate({"top":"90%"}, 300);
        }
    }, function(){
        browserWidth();
    });
    

//Top Button Part
    $(window).scroll(function(){
        var $nowScroll = $(this).scrollTop();
        var $target = $("#contentSection").offset().top-200;

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
