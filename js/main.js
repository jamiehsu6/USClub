
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

        function profileImg(value) {
            var element = document.getElementById('icon-button');
            if (value === 'profile1') {
                element.style.backgroundImage = "url('login/profile/profile1.png')";
            } else if (value === 'profile2') {
                element.style.backgroundImage = "url('login/profile/profile2.png')";
            } else if (value === 'profile3') {
                element.style.backgroundImage = "url('login/profile/profile3.png')";
            }
        }

        //let profile = localStorage.getItem('profile');

        //$("#icon-button").html(fname.charAt(0)+fname.charAt(1));
    }



});

