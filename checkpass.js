

$(function(){
  $('form input#login').click(function(){
     $.ajax({
       type:"GET",
       url:"http://localhost:5000/start",
       dataType: "jsonp",
       data: { "username" : $('input#userid').val(), "password" : $('input#pswrd').val() }
     }).done(function(data){
       console.log(data);
     });
  });
});
