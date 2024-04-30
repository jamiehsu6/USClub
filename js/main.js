
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

// Function to change profile background

var selectedProfile = localStorage.getItem('selectedProfile');

// Set the background image of the #icon-button element based on the selected profile
if (selectedProfile === 'profile1') {
    document.getElementById('icon-button').style.backgroundImage = "url('../login/profile/profile1.png')";
} else if (selectedProfile === 'profile2') {
    document.getElementById('icon-button').style.backgroundImage = "url('../login/profile/profile2.png')";
} else if (selectedProfile === 'profile3') {
    document.getElementById('icon-button').style.backgroundImage = "url('../login/profile/profile3.png')";
}

