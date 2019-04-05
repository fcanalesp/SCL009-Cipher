//BOTON CIFRAR
function botonCifrar() {
    let texto = document.getElementById("textoEntrada").value;// creando variable donde se guardara texto ingresado
    console.log(texto); // Probando
    let desplazamiento = document.getElementById("clave").value;//creando variable que guardara la clave
    console.log(desplazamiento);// Probando
  
    let outputText= "";
    
    for(let i = 0; i < texto.length; i++){ // el for recorre cosas string, array, objetos, watevah!
      let deLetraNumero= texto.charCodeAt(i); //pasando de letra a numero
      let resultado="";
      if (deLetraNumero >= 65 && deLetraNumero <=90){ //  Limitando mayusculas
         resultado = (deLetraNumero - 65 + parseInt(desplazamiento)) % 26 + 65;// obteniendo el numero con codigo mayusculas
        console.log(resultado)// Probando
    }
      else if(deLetraNumero >=97 && deLetraNumero <= 122){ // limitando minusculas
        resultado =(deLetraNumero - 97 + parseInt(desplazamiento))% 26 + 97; // obteniendo codigo de minusculas 
        console.log(resultado) // Probando
      }
      else if(deLetraNumero == 32){ // me respete el espacio que el usuario me de.
      resultado= (deLetraNumero);
      }
      
      let deNumeroLetra = String.fromCharCode(resultado); // pasando de numero a letra
      outputText= outputText + deNumeroLetra;
    
    }  
    document.getElementById("outputText").value=outputText;
  
  }
  
  //BOTON DESCIFRAR
  function botonDescifrar() {
    let texto = document.getElementById("textoEntrada").value; //variable que guarda texto
    console.log(texto); // probando
    let desplazamiento = document.getElementById("clave").value; // variable que guarda la clave
    console.log(desplazamiento);
    
    let outputText="";
     // variable que me ayudara a sacar descifrado del for.
    for(let i=0; i< texto.length; i++){ // for recorre texto ingresado
      
      let deLetraNumero=texto.charCodeAt(i); // pasando las letras ingresadas a numeros
      let resultadoDescifrar= ""; //(deLetraNumero - 65 - parseInt(desplazamiento))%26+65; // Pasando de numero a letra 
      if (deLetraNumero >= 65 && deLetraNumero <=90){// Limitando caracteres mayusculas
        resultadoDescifrar= (deLetraNumero + 65 - parseInt(desplazamiento)) % 26 + 65;// obteniendo el numero con codigo mayusculas
       console.log(resultadoDescifrar)// Probando
   }
     else if(deLetraNumero >=97 && deLetraNumero <= 122){// Lmitando caracteres minusculas
       resultadoDescifrar=(deLetraNumero + 97 - parseInt(desplazamiento)) % 26 + 97; // obteniendo codigo de minusculas 
       console.log(resultadoDescifrar)
     }
     else if(deLetraNumero == 32){ // Me respecte el espacio que el usuario me de.
     resultadoDescifrar= (deLetraNumero);
     }
     
     let deNumeroLetra = String.fromCharCode(resultadoDescifrar); // pasando de numero a letra
     
     outputText= outputText + deNumeroLetra;
    
    }
    document.getElementById("outputText").value=outputText;
  }
  
  