$(function(){
    localStorage.clear();

    $("#login-form").on("submit", function(e){
        e.preventDefault();
        window.location = "dashboard/index.html";

        localStorage.setItem('fname', $('#fname').val());
        //localStorage.setItem('profile-img', $('#'))

        //FIX THIS
        localStorage.setItem('profile',$('#profile').val());
    })

    $("#user-menu").hide();
});