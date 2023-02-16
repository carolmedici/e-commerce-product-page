function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
     
  }

  function addCart(i){
    var cartQuant = document.getElementById("quant")
    var add = document.getElementById("add") 
 
    if(addCart() || i >= 5 ){
      cartQuant.innerHTML = Number(cartQuant.value) + 1
      return;
    }

    
  }

