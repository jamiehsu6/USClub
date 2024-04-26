$(function(){

 let allClubs = {
  "Trojan Marketing Group":
  $(".club1"),
  "Women's Volleyball Club":
   $(".club2"),
  "Innovative Design Club":
  $(".club3"),
  "Red Cross Club":
  $(".club4"),
  "Spark SC":
  $(".club5"),
  "Black Student Alliance":
  $(".club6")
  }

  let clubList = $(".clubs");

  for (let key in allClubs){
     clubList.append($(allClubs[key]));
  }
  
   $("#searchBar").keyup(function(){
      let query =  $(this).val().toLowerCase();
      clubList.children().hide();
      for (let key in allClubs){
         if(key.toLowerCase().startsWith(query)){
         $(allClubs[key]).show();
          
         }
      }


   });

  }); 


















