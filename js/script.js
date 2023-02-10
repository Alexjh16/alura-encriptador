document.addEventListener("DOMContentLoaded",function(event){
    var ClassDesencriptarHidden = document.getElementById("texto-desencriptado-hidden");
    ClassDesencriptarHidden.style.display = "none";
});

function Encriptar(){
    var BtnEncriptar;
    var texto;
    var Cantletras;
    var TextoEncriptado;
    
    

    BtnEncriptar = document.getElementById("btn-encriptar");
    texto = document.getElementById("texto").value;

    //ocultar primer Text Area de Desencriptado
    var ClassDesencriptar = document.getElementById("texto-desencriptado");
    ClassDesencriptar.style.display  = "none";

    
    //Mostrar segundo Text Area de Desencriptado
    var ClassDesencriptarHidden = document.getElementById("texto-desencriptado-hidden");
    ClassDesencriptarHidden.style.display = "block";

    ClassDesencriptar.style.display  = "none";
    var NewTexto;
    var result = "";
    for(let i = 0; i < texto.length; i++){
        switch(texto[i]){
            case 'a':
                NewTexto = texto[i].replace(/a/, "ai");
                break;
            case 'e':
                NewTexto = texto[i].replace(/e/, "enter");
                break;
            case 'i':
                NewTexto = texto[i].replace(/i/, "imes");
                break;
            case 'o':
                NewTexto = texto[i].replace(/o/, "ober");
                break;
            case 'u':
                NewTexto = texto[i].replace(/u/, "ufat");
                break;
            default:
                NewTexto = texto[i];
        }
        result += NewTexto;
    }
    
    TextoEncriptado = ClassDesencriptarHidden;
    TextoEncriptado.value = result;
}

function Desencriptar(){
    //Ocultar primer Text Area de Desencriptado
    var ClassDesencriptar = document.getElementById("texto-desencriptado");
    ClassDesencriptar.style.display  = "none";

    
    //Mostrar segundo Text Area de Desencriptado
    var ClassDesencriptarHidden = document.getElementById("texto-desencriptado-hidden");
    ClassDesencriptarHidden.style.display = "block";
}

function Copiar(){

    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          alert("Write access granted!");
        }
      });
    var TextoCopiado = document.getElementById("texto-desencriptado-hidden");

    const CopyContent = async() => {
        try{
            await navigator.clipboard.writeText(TextoEncriptado);
            console.log('Contenido copiado');
        }
        catch(error){
            console.error("Falló al copiar", error);
        }
    }

    
    //navigator.clipboard.write(TextoCopiado.value);
    //alert("TextoCopiado: " + TextoCopiado.value);
}
