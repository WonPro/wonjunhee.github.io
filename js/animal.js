$(document).ready(function(){
    var $text = `
    <div class="grid-item">
    <div class="darkBg">
        <div class="contBox">
            <p class="title">Photo Title</p>
            <p class="text">Text about this photo</p>
            <div class="info">
                <p class="date">2020.02.08</p>
                <p class="like">Like&nbsp;<span>22</span></p>
            </div>
        </div>
    </div>
</div>
    `;
    for(i=0; i<=23; i++){
        $(".grid").append($text);
    }

    $(".grid-item").each(function(index){
        $(this).css("background-image", "url(img/animal/animal"+(index+1)+".jpg)")
    });

    $(".grid").masonry({
        itemSelector : ".grid-item",
        isAnimate : true
    });

    $(".grid-item, .grid .darkBg").click(function(){
        var $index = $(this).index();

        $(".imgPopUpWindow").addClass("active");
        $(".imgPopup .popupImg").css("background-image", "url(img/animal/animal"+($index+1)+".jpg)");
    });

    $(".imgPopUpWindow .close_btn, .imgPopUpWindow .blackBg").click(function(){
        $(".imgPopUpWindow").removeClass("active");
    })













});