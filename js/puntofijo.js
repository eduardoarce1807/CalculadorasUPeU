function puntofijo(){
    
    //Limpiar
    document.getElementById("tbody").innerHTML = '';

    var g = document.querySelector("#eq").value;
    var x = document.querySelector("#x0").value;
    var error = 0.00001;
    var NTOL = 50;
    var k = 0;

    var x0 = 0;

    while(k<NTOL) {
        x0 = x;

        //x0
        document.querySelector("#invisible").value = "x="+x0+"; "+g;
        calculate("invisible","out1");
        var numx0 = document.getElementById("out1").innerHTML.indexOf("</span>");
        var respuestax0 = document.getElementById("out1").innerHTML.slice(numx0+8);

        x = respuestax0;

        k=k+1;

        var difer = x-x0;
        
        //print
        console.log(k + " " + x + " " + Math.abs(difer));

        document.getElementById("tbody").innerHTML +=
        '<tr>'+
            '<th>'+k+'</th>'+
            '<td>'+x+'</td>'+
            '<td>'+Math.abs(difer)+'</td>'+
        '</tr>'
        ;

        if (Math.abs(x-x0)<=error || (k==NTOL))
            break;

    }

    document.getElementById("ans").textContent = "Respuesta: " + x;

}

function excelPuntofijo(){
    $("#tblPuntoFijo").table2excel({
      name: "PuntoFijo",
      filename: "PuntoFijo", //do not include extension
      fileext: ".xlsx" // file extension
    }); 
}