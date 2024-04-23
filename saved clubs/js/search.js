const search = () =>{
    const searchbox = document.getElementById("searchBar").value.toUpperCase();
    const storeitems = document.getElementById("club-list")
    const club = document.querySelectorAll(".club")
    const cname = storeitems.getElementsByTagName("p")

    for( var i=0; i < cname.length; i++){
        let match = club[i].getElementsByTagName("club")[0];

       if(match){
         let textvalue= match.textContent || match.innerHTML

         if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            club[i].style.display = "";
         }else{
            club[i].style.display = "none";
         }
       }
    }
};


    


  






