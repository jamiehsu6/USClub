// Listen to radio button changes and call profileImg function
document.querySelectorAll('input[name="profile"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // Call profileImg function with selected value
        profileImg(this.value);
    });
});



$(function(){
    localStorage.clear();

    $("#login-form").on("submit", function(e){
        e.preventDefault();
        window.location = "dashboard/index.html";
    
        localStorage.setItem('fname', $('#fname').val());
        localStorage.setItem('profile', $('input[name="profile"]:checked').val()); // Store the selected profile value

    });

    $("#user-menu").hide();
});