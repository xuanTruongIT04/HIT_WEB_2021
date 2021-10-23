$(document).ready(function(){
    $(".eye").click(function(){
        $(this).children("i").toggleClass("switch")
        $(this).children("i").toggleClass("fa-eye-slash fa-eye");

        if($(this).children("i").hasClass("switch")){
            $(this).prev().attr('type', 'text');
        }
        else {
            $(this).prev().attr('type', 'password');
        }
    })

    $("form").submit(function(){
        alert("Nhập đi anh zai");
    })

    $(".close").click(function(){
        alert("Không cho thoát ^^");
    })
});