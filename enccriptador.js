const imagen = document.getElementById("imagen")
const guardar__encriptar = document.getElementById("guardar__encriptar")
const texto__encriptar = document.getElementById("texto__encriptar")
const texto__cifrado = document.getElementById("texto__cifrado")
const copiar__datos = document.getElementById("copiar__datos")


guardar__encriptar.addEventListener("click",encriptar)

function encriptar() {
    
    const guardar= texto__encriptar.value 
    const cifrado = guardar
    .replace("e","enter")
    .replace("a","ai")
    .replace("0","ober")
    .replace("i","imes")
    .replace("u","ufat")
  
if(guardar === "") {
    alert("Lo sentimos, necesita tener acceso a esta tarjeta")
}else{
    texto__cifrado.textContent=cifrado
imagen.style.display="none"

}

}
copiar__datos.addEventListener("click",function(event){

   
    if (texto__cifrado != "") {
        navigator.clipboard.writeText(document.getElementById("texto__cifrado"))
        alert("Copiando texto")

    }  
   
})

guardar__encriptar 

mostrar__desencriptar.addEventListener("click",desencriptar)

function desencriptar() {
    
    const guardar= texto__encriptar.value 
    const cifrado = guardar
    .replace("enter","e")
    .replace("ai","a")
    .replace("ober","0")
    .replace("imes","i")
    .replace("ufat","u")

  
    if(guardar === "") {
        alert("Lo sentimos, necesita tener acceso a esta tarjeta")
    }else{
        texto__cifrado.textContent=cifrado
    imagen.style.display="none"
    }
 }


