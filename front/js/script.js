


// requete pour recupérer les data
fetch('http://localhost:3000/api/products')//je récupére les données
.then(data => data.json())//je les appel data et les converties en jason
.then(card =>{//j'appel mon objet card et lui aplique la fonction qui suit


// creation d'une boucle for (let card of card){let article = new article(json.article);}//création de la card
for (let i = 0; i < card.length; i++) { 
            let productLink = document.createElement("a");//creation d'une balise a
            document.querySelector(".items").appendChild(productLink);//injection productLink(balise a) dans section class items dans html
            
            // creation attribut href (de la balise a)
            productLink.href = `product.html?id=${card[i]._id}`;//injection de id dans url page product(code imbriquer) backtick

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");//creation d'une balise article
            productLink.appendChild(productArticle);//injection de la balise article en tant qu'enfant de balise a (productLink)

            // Insertion de l'image
            let productImg = document.createElement("img");//creation d'une balise image
            productArticle.appendChild(productImg);//injection de la balise image en tant qu'enfant de balise article productArticle
            productImg.src = card[i].imageUrl;//creation attribut href (de la balise a) et injection
            productImg.alt = card[i].altTxt;//creation attribut alt (de la balise img) et injection

            // Insertion du titre "h3"
            let productName = document.createElement("h3");//creation d'une balise h3
            productArticle.appendChild(productName);//injection de la balise h3 en tant qu'enfant de balise article productArticle
            productName.classList.add("productName");//ajouter une class a la balise h3 (productName)  ajouter//.classList.add
            productName.innerHTML = card[i].name;//creation et injestion de la class dans h3

            // Insertion de la description "p"
            let productDescription = document.createElement("p");//creation balise p
            productArticle.appendChild(productDescription);//injection de la balise p en tant qu'enfant balise article productArticle
            productDescription.classList.add("productName");//ajout  d'une class à la balise p
            productDescription.innerHTML = card[i].description;//injection de card dans p
///////////////////////////////////////////////////////////////////////////////////////////////

}//boucle for
});//fetch