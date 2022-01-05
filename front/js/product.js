//Récupération de l'id via les paramètres de l'url
const idProduct = new URL(window.location.href).searchParams.get("id");

//console.log(idProduct);
//console.log(idProduct);

getArticle();

//Récupération de l'article grace a l'id + affichage des données de ce dernier
function getArticle() {
     fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())    
    .then(product => {
///////////////////////////////////////////////////////////////////
//Récupération des sélecteurs pour les futurs modifications
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);
////////////////////////////////////////////////////////////////////////////
// injection de la card
img.setAttribute("src", product.imageUrl);
img.setAttribute("alt", product.altTxt);    
titleProduct.innerHTML = product.name;
priceProduct.innerHTML = product.price;
descriptionProduct.innerHTML = product.description;
document.title = product.name;

///////////////////////////////////////////////////
// boucle pour injection de la card color choix option value
for (let i = 0; i < product.colors.length; i++) {
let color = document.createElement("option");
color.setAttribute("value", product.colors[i]);
color.innerHTML = product.colors[i];
colorsProduct.appendChild(color);
}
//////////////////////////////////////  

}); //  fetch       
}  //fetch

//COULEUR
//let couleur = document.getElementById();
//couleur.innerHTML = product.colors[i];

// Ajouté un article au panier le clic/////////////////
let addToCartBtn = document.getElementById("addToCart");//séléctionner le bouton
addToCartBtn.addEventListener("click", addToCart);//au clic jouer la fonction addToCart
//////////////////////////////////////////////////////////////////

// fonction principal
function addToCart() {

/////////////////////////////////////////////////////////////////////////////////////////
// selection et controle des choix ou non avant creer objet et l'envoir sur local storage
// constante sélecteur
const quantityChoice = document.querySelector("#quantity");
const colorChoice = document. querySelector("#colors");



//controle erreur saisie pas de couleur pas de quantité
if (colorChoice.value != 0 && quantityChoice.value  != 0 ) { //si couleur différente de 0 ou si quantité différente de 0 = valide

//test
//alert ('vous avez commander');

//id
//console.log(idProduct);

//color
let ColorK = document.querySelector("#colors").value;
//console.log(ColorK);

//quantité
let QtAchatK = document.querySelector("#quantity").value;;
//console.log(QtAchatK);

// object test 
//1) ajout au panier id + couleur + quantité
//consolelog(idProduct + ' : ' + colorKanap + ' : ' +QtAchat);

//console.log(JSON.stringify({ id: idProduct, color: colorKanap, qt: QtAchat}));
// on creer objet
let productCartObj = { 
    idK : idProduct,
    colorK : ColorK,
    qtyK  : QtAchatK,
}
;
                
//localStorage.setItem('maCart', productCartObj);
//produitLocalStorage = JSON.stringify("productCartObj");  
//let produitLocalStorage = JSON.stringify("productCartObj");  

localStorage.setItem('maCart', JSON.stringify(productCartObj));
console.log(productCartObj);

//localStorage.setItem('maCart', productCartObj) ;                
//console.log(productCartObj);
//let produitLocal = JSON.parse("");  
//localStorage.setItem('maCart', produitLocalStorage) ;   
//console.log(produitLocal);

// mettre en local storage :           localStorage.setItem('maCart', 'patate')            
//supprimmer du local storage :        localStorage.removeItem("maCart");

//productCart.push(productCartObj);
//let achatStorage = ;

// contruire la commande id + couleur + quantité puis mettre en localStorage


////////////////////////////////////////////////////////////////////
// changer page
function tournerPage() {
        location.href = "../html/index.html";
    }
tournerPage();


alert('vous avez rempli les champs comme il faut ,votre commande est enregistrer,vous pouvez commander autre chose ou allez dans votre panier pour valider votre commande');


} else {

alert('vous n\'avez pas rempli les champs comme il faut');
//console.log('commande réussi');
}
///////////////////////////////////////////////////////////////

//function addToCart() {
}