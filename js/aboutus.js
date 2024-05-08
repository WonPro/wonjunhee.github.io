$(document).ready(function(){
    $(".joinBtn").click(function(){
        $("#joinSection").fadeIn(300);
        return false;
    });
    $("#joinSection .closeBtn, #joinSection .darkBg").click(function(){
        $("#joinSection").fadeOut(300);
    });
    $("#joinSection .loginLink").click(function(){
        $("#joinSection").hide();
        $("#loginSection").show();
        return false;
    });











    
});