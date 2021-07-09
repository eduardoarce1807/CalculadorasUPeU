function secante(){

  //Limpiar
  document.getElementById("tbody").innerHTML = '';

  var f = document.querySelector("#eq").value;
  var x0 = document.querySelector("#x0").value;
  var x1 = document.querySelector("#x1").value;
  var tol = 0.00001;
  var error = 100;
  var n = 0;

  console.log(f);

  while (error > tol) {
    //x1 feval
    document.querySelector("#invisible").value = "x="+x1+"; "+f;
    calculate("invisible","out1");
    var numx1 = document.getElementById("out1").innerHTML.indexOf("</span>");
    var respuestax1 = document.getElementById("out1").innerHTML.slice(numx1+8);

    //x0 feval
    document.querySelector("#invisible").value = "x="+x0+"; "+f;
    calculate("invisible","out1");
    var numx0 = document.getElementById("out1").innerHTML.indexOf("</span>");
    var respuestax0 = document.getElementById("out1").innerHTML.slice(numx0+8);

    
    var x2 = x1 - (x1-x0) * respuestax1 / (respuestax1 - respuestax0);
    console.log(x2);


    //x2 feval
    document.querySelector("#invisible").value = "x="+x2+"; "+f;
    calculate("invisible","out1");
    var numx2 = document.getElementById("out1").innerHTML.indexOf("</span>");
    var respuestax2 = document.getElementById("out1").innerHTML.slice(numx2+8);

    //valor absoluto
    error = Math.abs(respuestax2);

    //print
    console.log(n + " "+ x0 + " "+ x1 + " "+ x2 + " "+ error);
    
    document.getElementById("tbody").innerHTML +=
      '<tr>'+
        '<th>'+n+'</th>'+
        '<td>'+x0+'</td>'+
        '<td>'+x1+'</td>'+
        '<td>'+x2+'</td>'+
        '<td>'+error+'</td>'+
      '</tr>'
    ;

    x0=x1;
    x1=x2;
    n=n+1;
  }

  document.getElementById("ans").textContent = "Respuesta: " + x0;
  
}

function excelSecante(){
  $("#tblSecante").table2excel({
    name: "Worksheet Name",
    filename: "Secante", //do not include extension
    fileext: ".xlsx" // file extension
  }); 
}