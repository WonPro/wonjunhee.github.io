$(document).ready(function(){
        
    browserWidth();
    $(window).resize(function(){
        browserWidth();
    });

    // 상단 메뉴 스크롤 이벤트
    $(window).scroll(function(){
        let cur_scrollTop = $(window).scrollTop();
        if(cur_scrollTop > 1){
            $("header").addClass("sticky");
        }else{
            $("header").removeClass("sticky");
        }
    });

    // 상단 메뉴 클릭 이벤트
    $('.mainMenu a').click(function(event) {
        event.preventDefault();
        let target = $(this).attr('href');
        
        // href 값으로 지정된 요소의 위치를 가져와서 이동합니다.
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 500);
        }
    });

    //Main Visual 텍스팅 이벤트
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

    let currentVideoIndex = 0;
    let totalVideos = $('.slideVideo').length;
    
    // 비디오에 따른 버튼 텍스트와 숫자 배열
    let buttonInfo = [
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
        let slideDistance = currentVideoIndex * -100 + '%';
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
        let $active = $(this).hasClass("active");
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
        let sectionId = $(this).closest("section").attr("id");
        togglePopup("#" + sectionId, false);
    });
    
    $(".loginLink, .joinLink").click(function() {
        let targetId = $(this).data("target");
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
        let $winWidth = $(this).width();
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
        let $winWidth = $(this).width(); 
        
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
        let $winWidth = $(this).width();   
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
        let $nowScroll = $(this).scrollTop();
        let $target = $("#contentWrap").offset().top-200;

        if($nowScroll>$target){
            $(".topBtn").slideDown(500);
        }else{
            $(".topBtn").slideUp(500);
        }
    });

    $(".topBtn").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
    });



    // 이미지 주소와 정보를 배열로 만듭니다.
    let imageData = [
        { thumbnailUrl: '/img/homepage/cs.jpg', description: '(주)CS 회사 홈페이지 제작', category: 'homepage', url: 'http://ucsit.co.kr/' },
        { thumbnailUrl: '/img/homepage/jeus.jpg', description: '주식회사 제우스 회사 홈페이지 제작', category: 'homepage', url: 'https://www.jeuscorp.com/' },
        { thumbnailUrl: '/img/homepage/lscompany.jpg', description: '엘에스컴퍼니 회사 홈페이지 제작', category: 'homepage', url: 'https://www.xn--9t4b19cu7p32a.com/' },
        { thumbnailUrl: '/img/homepage/jdc.jpg', description: 'JDC 서브페이지 유지보수', category: 'homepage', url: 'https://www.jdcenter.com/main.cs' },
        { thumbnailUrl: '/img/homepage/jejuma.jpg', description: '제주마등록관리 정보시스템 홈페이지 제작', category: 'homepage', url: 'https://jejuhorse.jeju.go.kr/' },
        { thumbnailUrl: '/img/homepage/chagoji.jpg', description: '차고지 증명제 홈페이지 제작', category: 'homepage', url: 'https://parking.jeju.go.kr/online/proof.cs' },
        { thumbnailUrl: '/img/homepage/meercop.jpg', description: '미어캅 홈페이지 제작', category: 'homepage', url: 'https://www.meercop.com/' },
        { thumbnailUrl: '/img/detail/가을동화감귤밭_배너.jpg', description: '가을동화감귤밭', category: 'detail', url: '/img/detail/가을동화감귤밭.jpg' },
        { thumbnailUrl: '/img/detail/더카트인통영_배너.jpg', description: '더카트인통영', category: 'detail', url: '/img/detail/더카트인통영.jpg' },
        { thumbnailUrl: '/img/detail/레전드히어로즈_배너.jpg', description: '레전드히어로즈', category: 'detail', url: '/img/detail/레전드히어로즈.jpg' },
        { thumbnailUrl: '/img/detail/매미보트투어_배너.jpg', description: '매미보트투어', category: 'detail', url: '/img/detail/매미보트투어.jpg' },
        { thumbnailUrl: '/img/detail/붕어섬생태공원_배너.jpg', description: '붕어섬생태공원', category: 'detail', url: '/img/detail/붕어섬생태공원.jpg' },
        { thumbnailUrl: '/img/detail/산양큰엉곶_배너.jpg', description: '산양큰엉곶', category: 'detail', url: '/img/detail/산양큰엉곶.jpg' },
        { thumbnailUrl: '/img/detail/석예원본초족욕_배너.jpg', description: '석예원본초족욕', category: 'detail', url: '/img/detail/석예원본초족욕.jpg' },
        { thumbnailUrl: '/img/detail/스카이라인루지통영_배너.jpg', description: '스카이라인루지통영', category: 'detail', url: '/img/detail/스카이라인루지통영.jpg' },
        { thumbnailUrl: '/img/detail/오창온천로하스파_배너.jpg', description: '오창온천로하스파', category: 'detail', url: '/img/detail/오창온천로하스파.jpg' },
        { thumbnailUrl: '/img/detail/우도유람선_배너.jpg', description: '우도유람선', category: 'detail', url: '/img/detail/우도유람선.jpg' },
        { thumbnailUrl: '/img/detail/이스케이프탑_배너.jpg', description: '이스케이프탑', category: 'detail', url: '/img/detail/이스케이프탑.jpg' },
        { thumbnailUrl: '/img/detail/일타스키렌탈샵_배너.jpg', description: '일타스키렌탈샵', category: 'detail', url: '/img/detail/일타스키렌탈샵.jpg' },
        { thumbnailUrl: '/img/detail/쿵스롤러장_배너.jpg', description: '쿵스롤러장', category: 'detail', url: '/img/detail/쿵스롤러장.jpg' },
        { thumbnailUrl: '/img/detail/팔공별빛랜드_배너.jpg', description: '팔공별빛랜드', category: 'detail', url: '/img/detail/팔공별빛랜드.jpg' },
        { thumbnailUrl: '/img/detail/하이스키렌탈샵_배너.jpg', description: '하이스키렌탈샵', category: 'detail', url: '/img/detail/하이스키렌탈샵.jpg' },
        { thumbnailUrl: '/img/detail/홍천VIP렌탈샵_배너.jpg', description: '홍천VIP렌탈샵', category: 'detail', url: '/img/detail/홍천VIP렌탈샵.jpg' },
        { thumbnailUrl: '/img/etc/세계자동차&피아노박물관관악제.jpg', description: '세계자동차&피아노박물관 관악제', category: 'etc', url: '/img/etc/세계자동차&피아노박물관관악제.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스추석맞이이벤트.jpg', description: '경북투어패스추석맞이이벤트', category: 'etc', url: '/img/etc/경북투어패스추석맞이이벤트.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스모바일배너.jpg', description: '경북투어패스모바일배너', category: 'etc', url: '/img/etc/경북투어패스모바일배너.jpg' },
        { thumbnailUrl: '/img/etc/경북투어패스가맹점모집_배너.jpg', description: '경북투어패스가맹점모집', category: 'etc', url: '/img/etc/경북투어패스가맹점모집.jpg' },
        // 추가 이미지들을 여기에 추가합니다.
    ];

    // 이미지 데이터를 기반으로 .card 엘리먼트를 생성합니다.
    imageData.forEach(function(image) {
        let $card = $('<div class="card"></div>').attr('data-category', image.category);
        let $description = $('<div class="description"></div>').text(image.description);
    
        // 카테고리가 homepage인 경우 이미지를 <a> 태그로 감싸서 URL을 연결합니다.
        if (image.category === 'homepage') {
            let $image = $('<a href="' + image.url + '" target="_blank"></a>')
                        .append($('<div class="card-image"></div>')
                        .css('background-image', 'url(' + image.thumbnailUrl + ')')
                        .attr('alt', image.description));

            $card.append($image, $description);
        } else {
            let $image = $('<div class="card-image"></div>')
                        .css('background-image', 'url(' + image.thumbnailUrl + ')')
                        .attr('alt', image.description)
                        .attr('data-url', image.url);

            $card.append($image, $description);
        }
    
        $('.gallery').append($card);
    });

    // .card 이미지 클릭 이벤트를 처리합니다.
    $('.gallery').on('click', '.card', function() {
        let category = $(this).data('category');
        let imageUrl = $(this).find('.card-image').data('url');
    
        if (category !== 'homepage') {
            console.log(imageUrl)
            $('body').addClass('modal-open');
            $('.imgPopUpWindow').addClass('active');
            $('#popupImg').attr('src', imageUrl);
        }
    });
    

    // 모달 닫기 버튼 클릭 이벤트를 처리합니다.
    $('.imgPopUpWindow .closeBtn').click(function() {
        $('body').removeClass('modal-open');
        $('.imgPopUpWindow').removeClass('active');
    });

    $('.tab').click(function() {
        let category = $(this).data('category');
        filterItems(category);

        // 모든 탭에서 active 클래스를 제거합니다.
        $('.tab').removeClass('active');
        // 현재 클릭한 탭에 active 클래스를 추가합니다.
        $(this).addClass('active');
    });

    function filterItems(category) {
        $('.card').each(function() {
            let cardCategory = $(this).data('category');
            if (category === 'all' || category === cardCategory) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    }
});


