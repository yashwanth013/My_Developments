$(document).ready(function () {

    $.ajax({
      url: "https://reqres.in/api/users?page=2",
      success: function (result){
        var res = result;
        for(i=0;i<result.data.length;i++){
          $("#email_" + i).html(result.data[i].email);
          $("#Id_" + i).html(result.data[i].id);
          $("#first_" + i).html(result.data[i].first_name);
          $("#last_" + i).html(result.data[i].last_name);
          $("#avatar_" + i).html('<img src="' + result.data[i].avatar + '" alt="Avatar">');
           
          
            
        }
       
        
      }
      
     
      });
  });

