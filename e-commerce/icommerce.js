const opcion__pago = document.getElementById("opcion__pago")
const pedidos =document.getElementById("pedidos")
const pedido =document.getElementById("pedido")
const Subcribite = document.getElementById("Subcribite")
const fomulario = document.getElementById("fomulario")
const escripcion = document.getElementById("escripcion")
const carro__compras= document.getElementById("carro__compras")
const container__modal = document.getElementById("container__modal")
const producto__modal = document.getElementById("producto__modal")
const bienvenida =document.getElementById("bienvenida")
const mensaje__nombre= document.getElementById("mensaje__nombre")
const direccion= document.getElementById("direccion")
const enviar= document.getElementById("enviar")
const ver =document.getElementById("ver")
const descuentos = document.getElementById("descuento")
const container__fondo = document.getElementById("container__fondo")
const container__ecomer__titulo = document.getElementById("container__ecomer__titulo")
const Ver__descuentos = document.getElementById("Ver__descuentos")
setTimeout(() => {
  bienvenida.innerText="¡ Bienvenidos/a !"

}, 1000);

// almacenar la lista de productos 
const productos__guardados = []
// Api
const container__ecomer =document.getElementById("container__ecomer")
const reducir = producto.splice(1,7)
reducir.forEach(e =>{
    const contenido_carrito=document.createElement("article")
  contenido_carrito.classList.add("contenedor__producto")
  contenido_carrito.innerHTML+=`<h2>${e.title} </h2>
  <img src="${e.images} " alt="" class="imagen_ecomen">
  <p class="descripcion">${e.description} </p>
     <p class="estrellas"> ✨⭐✨⭐✨</p>
  <h1> $  ${e.price}</h1>
  <button class="compra" id="compra">Comprar</button>
  
  `

    const agregar  = document.createElement("button")
    agregar.classList.add("agregar")
    agregar.innerText = "Agregar"

    agregar.addEventListener("click",(event)=>{
      event.preventDefault()
      productos__guardados.push(e.title,
        e.images,
        e.description)
        console.log(productos__guardados)
    })
    contenido_carrito.appendChild(agregar)
      container__ecomer.append(contenido_carrito)

      console.log(productos__guardados)
      
})
const titulo__modal =document.createElement("h1")
titulo__modal.innerText= "produto"
carro__compras.addEventListener("click",(ev)=>{
  ev.preventDefault()
 
  productos__guardados.forEach(modal =>{

    producto__modal.innerHTML +=`<h2>${modal.title} </h2>
    <img src="${modal.images} " alt="" class="imagen_ecomen">
    <p class="descripcion">${modal.description} </p>
       <p class="estrellas"> ✨⭐✨⭐✨</p>
    <h1> $  ${modal.price}</h1>
    <button class="compra" id="compra">Comprar</button>
    `
    

    container__modal.appendChild(titulo__modal)
  
  })

})
// boton de producto

ver.addEventListener("click" ,() =>{

  if(container__fondo.style.display==="none") {
    container__fondo.style.display= "inline"
    container__ecomer.style.background="black"

  } else {
    container__fondo.style.display= "none"
    container__ecomer.style.background="black"
  }

}) 

// boton de Subcribite



Subcribite.addEventListener("click",function() {
 if(fomulario.style.display==="none") {
   fomulario.style.display= "inline"
   Subcribite.style.display="none"
 
   return
 } else {
   fomulario.style.display= "none"
   Subcribite.style.display="inline"
 }
 if(escripcion.value) {
   document.write("escripcion exitosa")
 
 } 
})

// validacion de opcion de pago 

opcion__pago.addEventListener("click",function() {
  if (opcion__pago.value === "PSE") {
    alert("sin sistema")
  }  
})
// const telefono = document.querySelector("[data-telefono]")

// if (telefono.value !="") {
//   console.log("ok")
// } else {
//   console.log("no es")
// }

pedidos.addEventListener("click",()=>{
  confirm("para pedidos, click en aceptar y click donde apunta la mano")
if (pedido.style.display==="none") {

  pedido.style.display="inline"
 
} else {
  pedido.style.display="none"
}
 
})


const container_mesaje__envio = document.getElementById("container_mesaje__envio")
const fecha= new Date()
const fechas =fecha.toLocaleDateString()



mensaje__nombre.classList.add("mensaje__nombre")
enviar.addEventListener("click",(d)=>{
d.preventDefault()

const modal__mensaje__envio = document.createElement("div")
modal__mensaje__envio.classList.add("modal__exitoso")

container_mesaje__envio.appendChild(modal__mensaje__envio)
  if ( direccion.value !="") {

    modal__mensaje__envio.innerHTML= `<h1>Gracias <br> su pedido fue exitoso y enviado el ${fechas} </h1> `

    
    setTimeout(() => {
      if (pedido.style.display==="inline") {
    
        pedido.style.display="none"
       
      }
      setTimeout(() => {
        container_mesaje__envio.classList.toggle("container_mesaje__envio")
   
      },1000 );

     }, 800);
return

  } else {
 
    direccion.style.borderColor="red"
    mensaje__nombre.textContent="Lo sentimos este campo es obrigatorio"

  }


})

const buscador = document.getElementById("buscador")

buscador.addEventListener("keyup",() =>{
  console.log(buscador.value)
})


function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}


// const contraseña1 =document.getElementById("contraseña1")
// const contraseña2 = document.getElementById("contraseña2")

// function validarcontraeña() {
//   if (contraseña2.value ===contraseña1) {
//     return alert("...")
//   } else {
//     contraseña2.style.borderBlockColor="red"
//   }
// }ç



// validacion de input

// const  nombre = document.querySelector(["data-nombre"])
// const  telefono = document.querySelector(["data-telefono"])
// const  email = document.querySelector(["data-email"])
// escripcion.addEventListener("click",(event)=>{
//   event.preventDefault()
//   if (nombre.value==="" || telefono.value==="" || email.value==="") {
//     console.log("datos exitosos")
//   } else {
   
//     console.log("lo sentimos te falta ingresar nombre o telefono o email ")
//   }
// })
