import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  Produits = [
    {
    id: 1,
    titre: "ordinateur portable",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-gratuite/equilibrage-ordinateur-portable-fond-violet_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=sph",
    prix: 1200,
    qte:12,
    categorie:"electronique"

    },
    {
    id: 2,
    titre: "Tablette samsung",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-premium/nuage-mot-croissance-economique-tablette_698953-3936.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=sph",
    prix: 1000,
    qte:30,
    categorie:"electronique"

    }
  ,{
    id: 3,
    titre: "iphone 14 pro max",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-gratuite/composition-bobines-creatives_23-2149711507.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=sph",
    prix: 800,
    qte:19,
    categorie:"electronique"

    },
    {
    id: 4,
    titre: "basket nike",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-gratuite/paire-baskets_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=ais",
    prix: 500,
    qte:22,
    categorie:"chassures"

    },
    {
    id: 5,
    titre: "montre",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-premium/montre-or-poignet-luxe-classique-analogique-pour-hommes-fond-blanc-rendu-3d_476612-5769.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=sph",
    prix: 200,
    qte:12,
    categorie:"accessoires"

    },
    {
    id: 6,
    titre: "televiseur",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-gratuite/technologie-rencontre-nature-dans-ia-generative-large-vue-paysage_188544-12133.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=ais",
    prix: 1500,
    qte:12,
    categorie:"electronique"

    },
    {
    id: 7,
    titre: "cuisiniere",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://image.shutterstock.com/image-photo/close-image-gas-stove-260nw-269083238.jpg",
    prix: 1000,
    qte:12,
    categorie:"electromenager"

    },
    {
    id: 8,
    titre: "pantalon",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://image.shutterstock.com/image-photo/black-casual-pants-cutouts-4-260nw-2160018913.jpg",
    prix: 400,
    qte:12,
    categorie:"habillement"

    },
    {
    id: 9,
    titre: "parfum",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image: "https://img.freepik.com/photos-gratuite/parfum-frais-fleur-pourpre-dans-bouteille-verre-ai-generative_188544-9642.jpg?size=626&ext=jpg&ga=GA1.1.359486737.1694125754&semt=sph",
    prix: 800,
    qte:10,
    categorie:"habillement"

  }

  ];


  storeProduit(produit:any) {
    localStorage.setItem('produit',JSON.stringify(produit));
  }


}
