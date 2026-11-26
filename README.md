# Caramiaou · Du caramel et des miaous

Une page pour les caramels Caramiaou, création de Lucas et Yoann, avec une surprise aléatoire à découvrir en scannant un QR code. HTML, CSS et JavaScript uniquement : aucune installation, aucun service tiers, aucune police externe.

## Ouvrir dans VS Code

Ce dépôt est déjà cloné dans le sous-dossier `Caramiaou/`. Dans VS Code, **Fichier → Ouvrir un dossier**, choisir le dossier qui contient ce README et `index.html`.

Pour voir le site, ouvrir `index.html` dans un navigateur. On peut aussi utiliser **Live Server** dans VS Code, ou lancer depuis le terminal de ce dossier :

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvrir ensuite http://127.0.0.1:8000. `Ctrl+C` arrête le serveur. Pour tester le partage natif et la copie, privilégier localhost ou le futur site HTTPS plutôt que l’ouverture directe du fichier.

## Fonctionnement

- 200 surprises en français, tirées au hasard à l’arrivée : 80 blagues, 80 mots doux, 32 mini-histoires fictives et 8 anecdotes sourcées. Aucun choix de catégorie.
- Un sac mélangé évite les répétitions pendant toute la visite, jusqu’à épuisement des messages. Aucun doublon immédiat au passage au cycle suivant.
- Une nouvelle ouverture effectue un nouveau tirage indépendant : elle peut retrouver par hasard un message d’une visite précédente.
- Partage du texte exact par le menu natif si disponible, sinon copie. Une zone de sélection apparaît si la copie automatique est refusée.
- Animation de carte façon emballage de bonbon, avec respect de la préférence système de réduction des animations.
- Page utilisable au clavier, message annoncé aux technologies d’assistance, premier message disponible sans JavaScript.
- Aucun cookie, stockage local, compte, outil de suivi ou publicité. L’hébergeur peut conserver ses propres journaux de connexion.

## Personnaliser

- **Boutique** : changer `BOUTIQUE` en haut de `script.js`. Modifier aussi le titre et la description dans `index.html` pour les aperçus sans JavaScript et les moteurs de recherche.
- **Messages** : modifier la liste `MESSAGES` dans `script.js`, avec une surprise par ligne au format `catégorie|texte|source facultative`. Catégories : `blague`, `mot`, `histoire`, `fait`. Les clés des sources et les liens sont définis dans `SOURCES`. Éviter les accents graves et la séquence dollar-accolade dans les messages (syntaxe JavaScript).
- **Couleurs** : modifier les variables au début de `style.css`.
- **Logo** : l’image `logo_transparent.png` est utilisée dans l’introduction et comme favicon. Remplacer ce fichier pour changer le logo.

## Publier sur GitHub Pages

Le dépôt local pointe déjà vers https://github.com/lmollier37/Caramiaou.git, branche `main`.

1. Vérifier dans GitHub que le dépôt **Caramiaou** existe sur le compte personnel. Avec GitHub Free, le dépôt doit être public pour utiliser Pages. Le code et tous les messages seront alors publics : ne rien y mettre de confidentiel.
2. Ouvrir le dossier du dépôt dans VS Code. Dans **Contrôle de code source**, préparer les fichiers avec **+**, saisir `Créer le site de petits bonheurs`, puis **Valider**.
3. Choisir **Publier la branche** ou **Synchroniser les modifications**. Suivre la connexion GitHub proposée par VS Code si nécessaire.
4. Sur GitHub : dépôt → **Settings → Pages**.
5. Dans **Build and deployment**, choisir **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
6. Attendre la fin du déploiement et utiliser le lien fourni par GitHub. L’adresse attendue est https://lmollier37.github.io/Caramiaou/ ; elle n’est active qu’après publication réussie.
7. Pour chaque modification suivante, valider puis synchroniser : Pages republie automatiquement.

Alternative dans le terminal du dépôt :

```sh
git add index.html style.css script.js logo_transparent.png README.md .gitignore .nojekyll
git commit -m "Créer le site de petits bonheurs"
git push -u origin main
```

L’authentification doit passer par VS Code, le gestionnaire d’identifiants ou SSH ; ne jamais mettre de jeton dans les fichiers du site.

### Conditions d’utilisation

GitHub Pages interdit notamment d’héberger une activité de vente en ligne ou un site principalement destiné aux transactions commerciales. Cette page se limite à des messages gratuits, sans vente ni catalogue. Cela semble compatible, sans constituer une validation de GitHub. Si le site devient une vitrine commerciale ou reçoit des fonctions de vente, revoir l’hébergement et consulter GitHub en cas de doute.

Conditions : https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Configuration : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Domaine et QR code, après publication

Tester d’abord le site sur iPhone et Android, puis choisir l’adresse définitive avant d’imprimer. Un QR code **statique** encode simplement cette adresse : il n’exige aucun abonnement et continue à fonctionner si le contenu change. Si l’adresse change, le QR doit être refait sauf si l’ancienne adresse redirige toujours.

Un domaine personnel permet de conserver une adresse indépendante de l’hébergeur, à condition de le renouveler. Vérifier le prix initial et le renouvellement chez le registrar avant achat. Configurer le domaine dans GitHub Pages et le DNS selon la documentation avant de générer le QR. Aucun achat n’est nécessaire pour commencer.

Ne pas imprimer le QR avant d’avoir vérifié l’adresse publique réelle et le chargement sur un téléphone hors Wi-Fi.


## Informations sur les caramels

- Ingrédients fournis par Lucas et Yoann : sucre, beurre et lait condensé sucré. Les quantités et la méthode de fabrication ne doivent pas être publiées. Allergène lait mis en évidence. Vérifier les sous-ingrédients sur les emballages utilisés si une liste détaillée est nécessaire.
- Texture décrite : dure mais friable. Emballage : sachet plastique fermé.
- Aucune durée de conservation propre à Caramiaou n’a été validée. La page donne des conseils généraux et laisse les durées en cours de vérification. La recette ne suffit pas à établir une durée garantie : celle-ci dépend aussi de l’humidité finale et de l’étanchéité réelle de l’emballage.
- Repères consultés : [Swissmilk](https://www.swissmilk.ch/fr/recettes-idees/trucs-et-astuces/trop-secs-trop-humides-nos-conseils-pour-reussir-vos-caramels-a-la-creme/) recommande un récipient hermétique dans un endroit frais et sec ; sa durée annoncée concerne ses propres caramels. [Betty Bossi](https://www.bettybossi.ch/fr/recettes/recette/caramels-durs-10009403/) indique environ deux semaines pour une autre recette. Ces durées ne sont pas interchangeables.

## Sources des anecdotes

Les anecdotes sont des faits généraux, pas des affirmations sur la cuisson de Caramiaou.

- [Exploratorium · Caramelization and Caramels](https://annex.exploratorium.edu/cooking/candy/caramels-story.html) : couleur, arômes et distinction entre caramélisation et réaction de Maillard.
- [Noel et Hu, PNAS, 2018](https://pubmed.ncbi.nlm.nih.gov/30455290/) : papilles de la langue des félins et brosse expérimentale inspirée de leur toilette.

Les liens sont consultables sur les cartes « Le savais-tu ? » et sont inclus lors du partage des anecdotes. Les histoires et les blagues sont des créations de fiction.

- Congélation : les [conseils généraux de Land O’Lakes](https://www.landolakes.com/faqs/baking/freezing-guidelines/candy/) couvrent les caramels et le fudge. La page recommande un emballage adapté à la congélation et hermétique, une décongélation dans l’emballage fermé et un essai de texture pour Caramiaou ; le repère général de cette source (jusqu’à six mois au congélateur pour les caramels et fudges) est présenté comme tel, sans le transformer en durée validée pour Caramiaou.

- Source fournie ensuite par l’utilisateur : [Béquet Confections · How to Store Caramel Candy](https://bequetconfections.com/blogs/news/how-to-store-caramel-candy). La page reprend ses repères généraux de 2 à 3 semaines pour les caramels maison sans emballage individuel et de 3 à 6 mois au congélateur avec emballage adapté, sans les annoncer comme une durée validée pour Caramiaou. Les durées de plusieurs mois à température ambiante évoquées ailleurs dans l’article ne sont pas appliquées à notre recette.
