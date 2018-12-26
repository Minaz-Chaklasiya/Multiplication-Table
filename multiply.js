function table()
{
  var x = document.getElementById("display").value;
  var y = "";
  for (var i = 1; i <= 10; i++)
  {
    y = y + x + " x " + i + " = " + x*i +"<br>";
  }
  document.getElementById("output").innerHTML=y;
}
