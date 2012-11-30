var c;
var ctx;
var hex;
var changeColor = true;
$(document).ready(function(){
  c=$("#canvasArea")[0];
  var imageObj = new Image();
  imageObj.src = "wheel.jpg"; 
  imageObj.onload = function() {
    ctx = c.getContext("2d");
    ctx.drawImage(imageObj, 0, 0);
  };

  $("#canvasArea").mousemove(function(event){
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    var p = ctx.getImageData(x, y, 1, 1).data;
      hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  });
  $("#canvasArea").click(function(event){
      console.log(hex);
      $('p').html("<font color=\""+hex+"\">SampleText</font>");
  });
});

function rgbToHex(r, g, b){
  if (r > 255 || g > 255 || b > 255) throw "Invalid color choice";
  return ((r << 16 ) | (g << 8) | b).toString(16);
}
