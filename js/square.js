//document.getElementById("square").style.height = "120px";

function myFunction() {
  let str_width = document.getElementById("width_square").value;
  let str_height = document.getElementById("height_square").value;
  document.getElementById("square").style.width = str_width + "px";
  document.getElementById("square").style.height = str_height + "px";
  let str = str_width * str_height;
  document.getElementById("Text_out").innerHTML = str;
  console.log("square " + str);
  let integerW = parseInt(str_width, 10);
  let integerH = parseInt(str_height, 10);
  str = integerW + integerW + integerH + integerH;
  console.log("perimeter " + str);
}

function myTrianFunction() {
  var str_width = document.getElementById("width_trian").value;
  var str_height = document.getElementById("height_trian").value;
  document.getElementById("triangle-figure").style.width = str_width + "px";
  document.getElementById("triangle-figure").style.height = str_height + "px";
  var str_c = Math.sqrt(str_width*str_width + str_height*str_height );
  str_c = Math.round(str_c);
  var sum = parseInt(str_width) + parseInt(str_height) + parseInt(str_c);
  var perimeter = parseInt(sum)/2;
  let square = Math.sqrt(parseInt(perimeter)*(parseInt(perimeter) - parseInt(str_width))*(parseInt(perimeter) - parseInt(str_height))*(parseInt(perimeter) - parseInt(str_c)));
  square = Math.round(square);
  document.getElementById("Text_out_trian").innerHTML = square;
}

function parallFunction() {
  let str_width = document.getElementById("width_parall").value;
  let str_height = document.getElementById("height_parall").value;
  document.getElementById("parallelogram").style.width = str_width + "px";
  document.getElementById("parallelogram").style.height = str_height + "px";
  let square = str_width*str_height;
  document.getElementById("Text_out_parall").innerHTML = square;
}

function radiusFunction() {
  let str_width = document.getElementById("radius_para").value;
  let str_height = str_width;
  document.getElementById("circle").style.width = str_width + "px";
  document.getElementById("circle").style.height = str_height + "px";
  let square = Math.round(str_width*str_width*Math.PI);
  document.getElementById("Text_out_circle").innerHTML = square;  
}