$(function(){	
	
	let checkboxes = [];

	if (localStorage.getItem('checkboxes') != null){
		checkboxes = localStorage.getItem('checkboxes').split(",");
	}

	//Club List page
	$("#club-list .club input:checkbox").each(function() { 
		this.checked = (checkboxes[$(this).val()] == "true");
	});

	$("#club-list .club input:checkbox").change(function() {
		checkboxes[$(this).val()] = this.checked;
		localStorage.setItem('checkboxes',checkboxes.toString());
	});


	//Saved Club page
	//$("#saved-clubs .club").hide();
	$("#saved-clubs .club input:checkbox").each(function() { 
		if(checkboxes[$(this).val()] == "true"){
			this.checked = true;
			$(this).parent().show();
		}
		else{
			this.checked = false;
			$(this).parent().hide();
		}
	});

	$("#saved-clubs .club input:checkbox").change(function() {
		checkboxes[$(this).val()] = this.checked;
		if(!this.checked){
			$(this).parent().slideDown(500).fadeOut(400);
		}
		localStorage.setItem('checkboxes',checkboxes.toString());
	});

	//console.log(checkboxes);
});


$(function() {
 
    let allClubs = {
     "Trojan Marketing Group":
     $("#club1"),
     "Women's Volleyball Club":
     $("#club2"),
     "Innovative Design Club":
     $("#club3"),
     "Red Cross Club":
     $("#club4"),
     "Spark SC":
     $("#club5"),
     "Black Student Alliance":
     $("#club6")
     }
     
      let clubList = $("#club-list");
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