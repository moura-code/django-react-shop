document.onreadystatechange = function iniciar() {


  setTimeout(() => {
  document.getElementById('load').style.display="none";
  },3000);
  }
  
  function sesion() {
      document.getElementById("sesion").style.display = "block";
      document.getElementById("main").style.display = "none";
      document.getElementById("sectioncar").style.display = "none";
      document.getElementById("myCarousel").style.display = "none";
  }
  function vercarro() {
      document.getElementById("main").style.display = "none";
      document.getElementById("sectioncar").style.display = "block";
      document.getElementById("header").style.display = "none";
      document.getElementById("myCarousel").style.display = "none";
  }
  function vertienda() {
      document.getElementById("main").style.display = "block";
      document.getElementById("sectioncar").style.display = "none";
      document.getElementById("header").style.display = "block";
      document.getElementById("myCarousel").style.display = "block";
  }
  
  const carrito = document.querySelector("#carrito")
  const template = document.querySelector("#template")
  const fragment = document.createDocumentFragment()
  const footer = document.querySelector("#footer")
  const templateFooter = document.querySelector("#templateFooter")
  
  document.addEventListener("click", e => {
    if (e.target.matches(".card .btn-outline-edwinc")){
      agregarAlCarrito(e);
    }
    
   
    if(e.target.matches(".list-group-item .btn-poner")){
      btnAumentar(e)
    }
    
     if(e.target.matches(".list-group-item .btn-verde")){
      btnDisminuir(e)
    }
    
  });
  
  let carritoArray = [] ;
  
  const agregarAlCarrito = (e) => {
    //console.log(e.target.dataset);
    
    const producto = {
          titulo: e.target.dataset.fruta,
          id: e.target.dataset.fruta,
          cantidad:1,
          precio : parseInt(e.target.dataset.precio)
      };
    
     // buscamos el indice
     const index = carritoArray.findIndex((item) => item.id === producto.id);
    
     // si no existe empujamos el nuevo elemento
      if (index === -1) {
          carritoArray.push(producto);
      } else {
          // en caso contrario aumentamos su cantidad
          carritoArray[index].cantidad++;
          //carritoArray[index].precio = carritoArray[index].cantidad * producto.precio;
      }
  
      //console.log(carritoArray);
  
      pintarCarrito();
    //console.log(producto)
  };
  
  
  
  const pintarCarrito = () => {
    
    carrito.textContent = "";
    
    carritoArray.forEach((item) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".text-white .lead").textContent = item.titulo;
      clone.querySelector(".badge").textContent = item.cantidad;
      clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;
      clone.querySelector(".btn-verde").dataset.id = item.id
      clone.querySelector(".btn-poner").dataset.id = item.id
      
      
      fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    
    pintarFooter();
  };
  
  const pintarFooter = () => {
    //console.log("pintar fOOTER")
    footer.textContent = "";
    
    const total = carritoArray.reduce(
      (acc, current) => acc + current.cantidad * current.precio, 0
    );
    
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("span").textContent = total;
    
    footer.appendChild(clone)
  };
  
  const btnAumentar = (e) => {
    //console.log("me diste click btn aumentar", e.target.dataset.id); 
    carritoArray = carritoArray.map(item => {
      if(item.id === e.target.dataset.id){
        item.cantidad ++
      }
      return item;
    });
    pintarCarrito();
  };
  
  const btnDisminuir = (e) => {
    //console.log("me diste click btn disminuir", e.target.dataset.id); 
    carritoArray = carritoArray.filter(item => {
      if(item.id === e.target.dataset.id){
        if(item.cantidad > 0){
          item.cantidad --
          if(item.cantidad === 0) return
          return item
        }
      } else { return item}
    });
    pintarCarrito();
  };
  
