Je vous présente mon portfolio !

Premièrement, c'est un travail fait avec plusieurs langages : le HTML, du CSS et du JavaScript pour une partie du front et du back.
Nous avons trois dossiers qui composent l'application : le dossier Backend (qui gère le back), le dossier Public (qui gère le front) et node_modules (qui contient la bibliothèque de modules Node.js).

Backend :

Index.js est le point d'entrée du backend, il joue le rôle de chef d'orchestre en configurant toute l'application.
Il initialise le serveur, configure les autorisations pour permettre la communication entre le back et le front, traite les données et gère les requêtes.
Il utilise plusieurs modules :

Express permet la création de notre serveur.

Cors autorise la communication entre le back et le front.

Path gère les chemins de mes fichiers.

Dotenv interprète mes variables d'environnement qui sont dans mon fichier .env

ContactHandler.js est mon fichier spécialisé dans la gestion du formulaire de contact. Son rôle est de recevoir les données du formulaire, vérifier que tous les champs du formulaire sont remplis.
Enfin, il formate et envoie l'email en gérant les potentielles erreurs et renvoie des réponses au front selon le succès ou l'échec de l'envoi.
Il utilise :

Express pour les routes.

Nodemailer pour l'envoi de mail.

Frontend :

Dans le dossier Public, on peut trouver plusieurs sous-dossiers comme les dossiers CSS, JS et Assets.

CSS contient mes fichiers fonts.css où se trouvent mes polices d'écriture et style.css qui gère mes styles.

JS contient swiper.js qui est un fichier JavaScript qui permet de créer et configurer un carrousel pour mon projet.

Assets contient des dossiers img où sont mes images et PDF où sont mes fichiers PDF.

Dans Public on peut également trouver index.html qui affiche et présente l'application à l'utilisateur, il affiche le rendu final.

Enfin, à la racine on trouve les fichiers .env, .gitignore, package.json et package-lock.json.

Le fichier .env contient les variables d'environnement, notamment les identifiants Gmail (côté administrateur) pour le formulaire de contact et le port d'écoute du serveur.
Le .gitignore spécifie les fichiers à exclure des commits Git (comme le .env et node_modules). Le package.json décrit le projet et liste toutes ses dépendances, tandis que le package-lock.json verrouille les versions exactes des modules.






 
