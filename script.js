
let demandes = [
    {
        id: 1,
        titre: "Connexion Wi-Fi instable",
        description: "Le réseau se déconnecte régulièrement.",
        categorie: "Réseau",
        priorite: "Haute"
    },

    {
        id: 2,
        titre: "Installation d’un logiciel",
        description: "Installer un logiciel sur le poste.",
        categorie: "Logiciel",
        priorite: "Normale"
    },

    {
        id: 3,
        titre: "Clavier défectueux",
        description: "Certaines touches ne fonctionnent plus.",
        categorie: "Matériel",
        priorite: "Basse"
    }
];


const formulaire = document.querySelector(".formulaire");
const cartes = document.querySelector(".cartes");
const compteure = document.querySelector("#compteur");






  //    AFFICHER
function afficher() {

    cartes.innerHTML = "";

    compteure.textContent = demandes.length + " demande(s)";
    for (let i = 0; i < demandes.length; i++) {
        const cart = document.createElement("div");
        cart.className = "ticket-card";
        cart.dataset.id = demandes[i].id;




        
         //HEADER OF CARTE
        const header = document.createElement("div");
        header.className = "ticket-header";




        // ICON
        const icon = document.createElement("div");
        icon.className = "ticket-icon";
        icon.textContent = "⌁";
        icon.style.backgroundColor = "#EAF0F9";
        icon.style.color = "#587397";





        // HD

        const number = document.createElement("span");
        number.className = "ticket-id";
        number.textContent = "HD-00" + demandes[i].id;



        header.appendChild(icon);
        header.appendChild(number);



        // TITRE
        const titre = document.createElement("h5");
        titre.textContent = demandes[i].titre;
          

        // DESCRIPTION
        const description = document.createElement("pre");
        description.textContent = demandes[i].description;






        // CATEGORIE
        const categorie = document.createElement("div");
        categorie.className = "categorie-card";
        categorie.textContent = demandes[i].categorie;











        // PRIORITE
        const priorite = document.createElement("div");
        priorite.className = "priorite-card";
        priorite.textContent = demandes[i].priorite;






        const infos = document.createElement("div");
        infos.className = "ticket-infos";
        infos.appendChild(categorie);
        infos.appendChild(priorite);
  


         // Boutons (le meme ligne)
        const actions = document.createElement("div");
        actions.className = "ticket-actions";




         // Bouton Modifier
        const modifier = document.createElement("button");
        modifier.className = "Modifier";
        modifier.textContent = "✎ Modifier";

        // Bouton Supprimer
        const supprimer = document.createElement("button");
        supprimer.className = "Supprimer";
        supprimer.textContent = "♜ Supprimer";


        actions.appendChild(modifier);
        actions.appendChild(supprimer);






       








        cart.appendChild(header);
        cart.appendChild(titre);
        cart.appendChild(description);
        cart.appendChild(infos);
        cart.appendChild(actions);
          
        cartes.appendChild(cart);




    } 
}
   //AJOUTE DE DEMANDE
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();


    // VALUE

    const titre = document.querySelector("#titre").value;
    const categorie = document.querySelector("#categorie").value;
    const priorite = document.querySelector("#priorite").value;
    const description = document.querySelector("#description").value;





    // Creer une nouvelle demande

    const nouvelleDemande = {
        id: demandes.length + 1,
        titre: titre,
        description: description,
        categorie: categorie,
        priorite: priorite

    };

    // Ajouter la demannde in array
    demandes.push(nouvelleDemande);



    // Vider le formulaire
    formulaire.reset();


    // Afficher les demandes
    afficher();

});
