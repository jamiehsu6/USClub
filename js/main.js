
//emily -- login functionality - profile picture and sign out
$(function(){

    $("#user-menu").hide();
    $("#icon-button").click(function() {
        $("#user-menu").slideToggle("fast");
    });

    if(localStorage.getItem('fname') != null) {
    
        let fname = localStorage.getItem('fname');
    
        $("#welcome").html("<h1>Hello " + fname +"!</h1>");
        $("#welcome").css({"padding-top": "5px", "font-size": "28px"});

        //$("#icon-button").html(fname.charAt(0)+fname.charAt(1));
    }



});

