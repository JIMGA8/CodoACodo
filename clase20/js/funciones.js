function calcular()
{
valor1=document.getElementById("valor1").value;
valor2=document.getElementById("valor2").value;


var select= document.getElementById("ope");
var select_activa=select.options[select.selectedIndex].value;


switch(select_activa=parseInt(select_activa))
{
    case 1:
            result=(parseInt(valor1)+parseInt(valor2));
           break;
    case 2:
           result=valor1-valor2;
           break;
    case 3:
           result=(valor1*valor2);
           break;
    case 4:
       if(valor2==0){
              alert("no se puede dividir por cero")
              break;
       }
       else{
              result=(valor1/valor2);
              break;
       }
           
}
document.getElementById("valor3").value=result;
}