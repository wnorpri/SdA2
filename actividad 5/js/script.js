function Calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value, 10);
    let numero2 = parseInt(document.getElementById("numero2").value, 10);
    document.getElementById("mensaje").innerHTML="El primer numero es: "+ numero1 + "<br> El segundo número es: " + numero2  + " <br> La suma es:" + ( numero1 + numero2 ) + "<br> La resta es: " +( numero1 - numero2 ) + "<br> El producto es:" + (numero1 * numero2) + "<br> La división es:" + (numero1 / numero2) + "<br> El resto es: " + (numero1 % numero2)
 
}