//=============================== modele html =================================//

/* <!--  <article class="cart__item" data-id="{product-ID}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>Nom du produit</h2>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> --> /

//==================================================================================//              

let myArray = [];
localStorage.setItem("panier",JSON.stringify (myArray));


//recup clé des tableau
/*
function forEachKey() {
  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }
}
forEachKey();*/
/*
let tarray = {
  idlocal: idProduct, 
  imagelocal:product.imageUrl, 
  namelocal: product.name, 
  descriptionlocal: product.description, 
  colorlocal: color, 
  qtlocal: qtcom
};
//==========================//
fonctiontbleaulocalstorage ();

function fonctiontbleaulocalstorage () {
myArray.push(tarray);
localStorage.setItem("panier",JSON.stringify (myArray));  
//let myArray = localStorage.getItem("panier",JSON.stringify (myArray));  
console.log(myArray);
}*/