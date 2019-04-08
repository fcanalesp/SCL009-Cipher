
//BOTON CIFRAR
document.getElementById("botonCifrar").onclick = () => {
  let texto = document.getElementById("textoEntrada").value; // creando variable donde se guardara texto ingresado
  // console.log(texto); // Probando
  let desplazamiento = document.getElementById("clave").value; //creando variable que guardara la clave
  //console.log(desplazamiento);// Probando
  let show = window.cipher.encode(texto, desplazamiento); // conectando con el archivo js
  //console.log(show);
  document.getElementById("outputText").value = show;
}

//BOTON DESCIFRAR
document.getElementById("botonDescifrar").onclick = () => {
  let texto = document.getElementById("textoEntrada").value; //variable que guarda texto
  //console.log(texto); // probando
  let desplazamiento = document.getElementById("clave").value; // variable que guarda la clave
  //console.log(desplazamiento); //Pprobando

  // Conectando con cioher.js
  let show = window.cipher.decode(texto, desplazamiento);
  //console.log(show);

  document.getElementById("outputText").value = show;
}
// BOTON LIMPIAR
// document.getElementById("limpiar").onclick = () => {//addEventListener("click", function(){
//   //location.reload();
// }