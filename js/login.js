$(function(){
    localStorage.clear();

    $("#login-form").on("submit", function(e){
        e.preventDefault();
        window.location = "dashboard/index.html";

        localStorage.setItem('fname', $('#fname').val());
        //localStorage.setItem('profile-img', $('#'))
    })

    $("#user-menu").hide();
    $("#icon-button").click(function() {
        $("user-menu").slideToggle("fast");
    });
});