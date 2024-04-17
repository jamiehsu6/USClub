$(function(){

    $("#user-menu").hide();
    $("#icon-button").click(function() {
        $("#user-menu").slideToggle("fast");
    });

    if(localStorage.getItem('fname') != null) {
    
        let fname = localStorage.getItem('fname');
        let lname = localStorage.getItem('lname');
    
        $("#account").html("<h1>Hi " + fname +"!</h1>");
        $("#account").css({"top": "40px", "font-size": "18px"});

        $("#icon-button").html(fname.charAt(0)+fname.charAt(1));
    }
});

