$(function(){

 let allClubs = {
  "Trojan Marketing Group":
  ".club1",
  "Women's Volleyball Club":
   ".club2",
  "Innovative Design Club":
  ".club3",
  "Red Cross Club":
  ".club4",
  "Spark SC":
  ".club5",
  "Black Student Alliance":
  ".club6"
  }

  let clubList = "";

  for (let key in allClubs){
    if(key.startsWith(query)){
     clubList += "<div>" +allClubs[key] + "</div>";
    }
  }
    $("#club-list").html(clubList);
  

   $("searchbar").keyup(function(){
      let query =  $("searchbar").val().toLowerCase();


      clubList = "";
      for (let key in allClubs){
         if(key.startsWith(query)){

          clubList += "<div>" +allClubs[key] + "</div>";
         }
      }
      $("#club-list").html(clubList);

   });

  }); 


















