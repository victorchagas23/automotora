let carrito=[];let abierto=false;

function agregarCarrito(modelo,precio){
    carrito.push({modelo,precio});
    renderCarrito();
}

function eliminarProducto(i){
    carrito.splice(i,1);
    renderCarrito();
}

function renderCarrito(){
    const c=document.getElementById("itemsCarrito");
    if(!c) return;
    c.innerHTML="";
    carrito.forEach((item,i)=>{
        let div=document.createElement("div");
        div.className="itemCarrito";
        div.innerHTML=`<strong>${item.modelo}</strong><br>$${item.precio.toLocaleString()}`;
        let btn=document.createElement("button");
        btn.innerText="Eliminar";
        btn.className="eliminarBtn";
        btn.onclick=()=>eliminarProducto(i);
        div.appendChild(btn);
        c.appendChild(div);
    });
}

document.addEventListener("click",e=>{
    if(e.target.id==="cerrarCarrito"){
        document.getElementById("carritoModal").style.right="-350px";
        abierto=false;
    }
});

document.addEventListener("click",e=>{
    if(e.target.matches("button") && e.target.innerText.includes("Agregar")){
        document.getElementById("carritoModal").style.right="0";
    }
});
