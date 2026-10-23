# HelpDesk – Atlas Solutions

## 1. Présentation du projet

HelpDesk est une application web interactive qui permet de centraliser et de gérer les demandes de support informatique des collaborateurs de l’entreprise fictive **Atlas Solutions**.

L’application permet d’ajouter, de consulter, de modifier et de supprimer des demandes de support.

## 2. Objectifs du projet

- Créer une interface web simple et intuitive.
- Gérer les demandes de support informatique.
- Manipuler les tableaux et les objets en JavaScript.
- Utiliser le DOM pour afficher et modifier dynamiquement le contenu de la page.
- Adapter l’interface aux différents écrans : ordinateur, tablette et téléphone.

## 3. Technologies utilisées

- **HTML5** : structure de la page web.
- **CSS3** : mise en forme et design responsive.
- **JavaScript Vanilla** : gestion des demandes et interactions avec l’utilisateur.

## 4. Fonctionnalités

- **Afficher les demandes :** consulter les demandes de support existantes.
- **Ajouter une demande :** saisir le titre, la catégorie, la priorité et la description du problème.
- **Modifier une demande :** mettre à jour les informations d’une demande existante.
- **Supprimer une demande :** retirer une demande de la liste.
- **Compter les demandes :** afficher le nombre total de demandes.
- **Gérer les priorités :** distinguer les priorités basse, normale et haute.
- **Design responsive :** adapter l’affichage aux différentes tailles d’écran.

## 5. Structure du projet

```text
HelpDesk/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── logo help desk.png
```

- `index.html` : contient la structure de l’application.
- `style.css` : contient les styles et les règles responsive.
- `script.js` : contient la logique JavaScript pour gérer les demandes.
- `assets/` : contient les images et les ressources du projet.

## 6. Fonctionnement

Les demandes sont stockées dans un tableau JavaScript contenant des objets. Les fonctions JavaScript permettent d’ajouter, de modifier et de supprimer les demandes. La fonction d’affichage utilise la manipulation du DOM pour mettre à jour les cartes et le compteur.

**Remarque :** les données sont conservées uniquement en mémoire pendant l’utilisation de la page. Elles ne sont pas enregistrées dans une base de données.

## 7. Installation et lancement

1. Télécharger ou cloner le projet.
2. Ouvrir le dossier du projet.
3. Ouvrir le fichier `index.html` dans un navigateur web.
4. Utiliser le formulaire pour gérer les demandes de support.

Aucun backend ni aucune base de données ne sont nécessaires.

## 8. Auteur

Projet réalisé dans le cadre de la formation en développement web à YouCode.