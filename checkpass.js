var blah = "";

$(function(){
  $('form input#login').click(function(){
     $.ajax({
       type:"GET",
       url:"http://localhost:5000/start",
       dataType: "jsonp",
       data: { "username" : $('input#userid').val(), "password" : $('input#pswrd').val()  }
     }).success(function(data){$('h1').text(eval(data))
     }).fail(function(a){console.log(a)});
  });
});

function parse(text){
  console.log(text);
}
