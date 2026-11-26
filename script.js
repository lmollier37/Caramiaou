/* Tous les contenus sont tirés au hasard, sans choix de catégorie. */
const BOUTIQUE = 'Caramiaou';
const SOURCES = {
  caramel: { label: 'Exploratorium · Science of Candy', url: 'https://annex.exploratorium.edu/cooking/candy/caramels-story.html' },
  chat: { label: 'Noel et Hu · PNAS (2018)', url: 'https://pubmed.ncbi.nlm.nih.gov/30455290/' }
};
const CATEGORIES = { blague: 'LA PETITE BLAGUE', mot: 'LE MOT DOUX', histoire: 'LA MINI-HISTOIRE · FICTION', fait: 'LE SAVAIS-TU ?' };
/* Format : catégorie | texte | source facultative. Une surprise par ligne. */
const MESSAGES = `
blague|Quel est le sport préféré du caramel ? Le lancer de douceur.
blague|Un chat entre dans une pâtisserie. Il demande un éclair… puis attend l’orage.
blague|Pourquoi le caramel ne garde-t-il pas les secrets ? Il finit toujours par fondre.
blague|Mon chat a ouvert un restaurant. Le menu ? À la carte… à griffer.
blague|Que dit un caramel après une longue journée ? « Je suis cuit. »
blague|Mon chat est critique culinaire : il regarde mon assiette avec beaucoup de jugement.
blague|Pourquoi le caramel est-il un bon ami ? Il ne te laisse jamais tomber… il colle à toi.
blague|J’ai demandé à mon chat de mettre la table. Il s’est allongé dessus.
blague|Un caramel va chez le coiffeur. « Un petit carré, s’il vous plaît. »
blague|Mon chat fait du yoga : sa posture préférée, c’est le canapé.
blague|Le caramel a raté son examen. Il a complètement séché sur la plaque.
blague|Comment un chat signe-t-il ses recettes ? Avec sa patte personnelle.
blague|J’ai raconté une blague à un caramel. Il s’est fendu… puis émietté.
blague|Mon chat ne procrastine pas. Il laisse ses projets infuser pendant la sieste.
blague|Quel est le rêve d’un sucre ? Une carrière dans le caramel.
blague|Mon chat a un réveil intégré. Dommage qu’il soit réglé sur « trop tôt ».
blague|Pourquoi le caramel aime les réunions ? Il adore quand les idées prennent forme.
blague|Un chat pâtissier ne rate pas ses recettes : il les réinterprète avec panache.
blague|J’ai voulu garder un caramel pour demain. Demain n’a pas été consulté.
blague|Mon chat m’aide à travailler : il teste la solidité du clavier avec son ventre.
blague|Que dit le sucre au beurre ? « Ensemble, on va faire fondre des cœurs. »
blague|Mon chat est minimaliste. Il ne garde que l’essentiel : toutes les places du canapé.
blague|Un caramel fait de la méditation. Il essaie de rester dans le moule.
blague|Pourquoi le chat aime les cartons ? Parce que le loyer des châteaux est trop cher.
blague|Mon caramel a pris des vacances. Il avait besoin de décrocher de la casserole.
blague|J’ai acheté un coussin à mon chat. Il a adopté l’emballage avec émotion.
blague|Le caramel n’a pas de mauvais caractère. Il a juste ses petits grains de sucre.
blague|Mon chat est très ponctuel : toujours à l’heure pour mon dîner.
blague|Que fait un caramel timide ? Il reste dans son papier.
blague|Mon chat a commencé un journal intime : « Aujourd’hui, les humains m’ont encore trouvé adorable. »
blague|Le beurre voulait danser. Le sucre lui a proposé un petit tour de casserole.
blague|Mon chat a négocié une semaine de quatre jours. Les trois autres, il dort aussi.
blague|Pourquoi le caramel n’aime pas les disputes ? Il préfère les mots doux.
blague|Le chat du boulanger ne pétrit pas. Il fait des patounes professionnelles.
blague|J’ai essayé de compter les caramels. Ils ont mystérieusement diminué pendant l’opération.
blague|Mon chat ne perd pas ses poils. Il personnalise les meubles.
blague|Le caramel a rejoint une chorale. Il avait une voix très sucrée.
blague|J’ai demandé à mon chat son avis sur mon pull. Il l’avait déjà essayé en dormant dessus.
blague|Un caramel devant un miroir : « Je suis carrément craquant. »
blague|Mon chat aime les livres. Surtout quand ils sont ouverts exactement là où il veut dormir.
blague|Pourquoi le sucre a-t-il acheté des lunettes ? Pour mieux voir le beurre arriver.
blague|Mon chat ne fait pas de bêtises. Il mène des études sur la gravité.
blague|Le caramel a reçu un prix : meilleur second rôle dans une pause café.
blague|Comment appelle-t-on un chat très gourmand ? Un inspecteur des assiettes.
blague|Le sucre a quitté la casserole. Il trouvait l’ambiance un peu chaude.
blague|Mon chat adore la décoration : une plante par terre, c’est tout de suite plus vivant.
blague|Un caramel au téléphone : « Allô ? Je t’entends mal, ça croustille. »
blague|Mon chat est un influenceur discret : il influence surtout ma position dans le lit.
blague|J’ai écrit « ne pas toucher » sur les caramels. Ma gourmandise ne sait pas lire.
blague|Mon chat fait du télétravail. Son bureau, c’est mon bureau. Son salaire, c’est mon attention.
blague|Que dit le caramel au café ? « On fait une pause ensemble ? »
blague|Mon chat a gagné à cache-cache. J’ai seulement retrouvé sa queue derrière le rideau.
blague|Un caramel en randonnée : « On fait bientôt une pause gourmande ? »
blague|Mon chat a un agenda chargé : fenêtre, sieste, fenêtre, grande sieste.
blague|Pourquoi le caramel aime la géométrie ? Il se sent bien dans son petit carré.
blague|Mon chat prend les décisions importantes : porte ouverte, porte fermée… finalement ouverte.
blague|Le caramel a fait une déclaration d’amour : « J’ai un faible pour ta douceur. »
blague|J’ai demandé au chat de garder mon siège. Il a pris la mission très au sérieux.
blague|Un caramel dit à un autre : « Entre nous, ça colle bien. »
blague|Mon chat ne réclame pas. Il exprime une opinion très sonore.
blague|Que fait le caramel le dimanche ? Il sucre son emploi du temps.
blague|Mon chat se considère comme un chef. Il supervise toute activité depuis le meilleur coussin.
blague|Pourquoi le sucre est-il devenu caramel ? Il voulait donner un peu de couleur à sa vie.
blague|Mon chat est en mode avion : il dort, mais ses oreilles captent tout.
blague|Un caramel veut écrire un roman. Il commence par une histoire à croquer.
blague|Le chat pâtissier a perdu sa toque. Il reste quand même très chat-peauté.
blague|Ma volonté et le caramel ont eu une discussion. Le caramel avait de meilleurs arguments.
blague|Mon chat ne monte pas sur la table. Il inspecte le plafond de plus près.
blague|Un caramel prend un selfie : « Souris… enfin, sucre ! »
blague|Mon chat a appris le partage : il me laisse le bord de mon oreiller.
blague|Pourquoi le caramel aime l’automne ? Tout le monde copie sa couleur.
blague|Mon chat dirige une entreprise de siestes. Il fait beaucoup d’heures supplémentaires.
blague|Le caramel voulait devenir une star. Il a commencé par briller dans la casserole.
blague|J’ai dit au chat : « Fais comme chez toi. » Il m’a regardé comme si c’était déjà évident.
blague|Le sucre et le beurre ont monté un groupe. Leur premier tube : « Ça va caraméliser ».
blague|Mon chat déteste les puzzles. Il préfère un seul morceau : le carton entier.
blague|Pourquoi le caramel ne fait-il jamais la tête ? Il est de bonne pâte… enfin, presque.
blague|Mon chat fait du rangement : tout ce qui dépasse doit rejoindre le sol.
blague|Que dit un caramel à la fin d’un spectacle ? « C’était du grand sucre ! »
blague|Mon chat est mon coach de repos. Son programme est très intensif.
mot|Que ta journée soit fondante de bonheur et croustillante de surprises.
mot|Un caramel pour la gourmandise, un petit miaou pour le sourire.
mot|Aujourd’hui, mets une pincée de douceur dans ton programme.
mot|La vie se savoure aussi en petits carrés.
mot|Tu mérites une pause aussi douce que ton caramel préféré.
mot|Un petit caramel ne résout pas tout. Mais il accompagne joliment la pause.
mot|Que ton cœur ronronne un peu aujourd’hui.
mot|Il y a des journées à croquer et des journées à laisser fondre doucement.
mot|Garde une place pour les gens qui rendent ta vie plus sucrée.
mot|Prends exemple sur le chat : étire-toi avant de repartir.
mot|La gourmandise a parfois la taille d’un tout petit carré.
mot|Un sourire, un caramel, et on reprend tranquillement.
mot|Les petits plaisirs n’ont pas besoin de grandes excuses.
mot|Que ta pause ait un parfum de caramel et un air de dimanche.
mot|Tu n’as pas besoin d’une toque pour mettre de la douceur autour de toi.
mot|Si la journée colle un peu, accorde-toi une pause.
mot|Le programme du jour : un peu moins de course, un peu plus de ronron.
mot|Un petit carré de tendresse pour ton grand cœur.
mot|Fais comme le chat au soleil : profite du coin de lumière.
mot|La douceur se partage, les miettes aussi.
mot|Que les bonnes surprises s’invitent dans ton sachet du jour.
mot|Une pause gourmande est encore meilleure quand on prend le temps de la vivre.
mot|Tu peux être solide et avoir un cœur tout tendre.
mot|Un caramel pour toi, un sourire pour la personne d’à côté.
mot|La recette d’un joli moment commence parfois par « on se pose ? ».
mot|Aujourd’hui, autorise-toi le bonheur en petit format.
mot|Un chat sur un coussin, un caramel près du café : chacun son petit luxe.
mot|Laisse la douceur prendre un peu de place dans ta journée.
mot|Que ta prochaine pensée soit aussi gentille qu’un petit miaou.
mot|Les moments simples ont souvent le meilleur goût.
mot|Tu as le droit de ralentir, même si le caramel disparaît vite.
mot|Un grain de fantaisie fait parfois toute la recette.
mot|Que ta journée soit dorée sans avoir besoin d’être parfaite.
mot|On t’envoie une poignée de ronrons et une pincée de bonne humeur.
mot|Le bonheur ne tient pas toujours dans une boîte. Le caramel, si.
mot|Une petite attention laisse parfois un grand souvenir.
mot|Il reste sûrement un joli moment à déballer aujourd’hui.
mot|La tendresse est un ingrédient qu’on peut ajouter partout.
mot|Que ton rire fasse plus de bruit que le papier du bonbon.
mot|Un peu de caramel dans la pause, un peu de légèreté dans la tête.
mot|Prends soin de ton petit monde intérieur, comme d’un chat endormi.
mot|La meilleure pause est parfois celle qu’on n’avait pas prévue.
mot|Tu mérites des journées avec des coins moelleux.
mot|Croque le moment, savoure la compagnie, garde le sourire.
mot|Un petit bonheur peut se glisser entre deux rendez-vous.
mot|Que tes soucis rapetissent et que tes pauses grandissent.
mot|Rien ne presse autant qu’un chat ne le croit à l’heure du repas.
mot|La douceur n’a pas besoin de permission pour entrer.
mot|Il y a du soleil dans les choses qu’on prépare avec attention.
mot|Aujourd’hui, sois tendre avec toi et généreux en sourires.
mot|Une miette de joie reste de la joie.
mot|Ta bonne humeur peut devenir le petit cadeau de quelqu’un d’autre.
mot|Le temps d’un caramel, laisse le reste attendre.
mot|Pas besoin de grande fête pour sortir les petites douceurs.
mot|Les jours gris aussi ont droit à leur carré doré.
mot|Tu peux reprendre ta journée du bon côté de la douceur.
mot|Merci d’avoir fait une place à Caramiaou dans ta pause.
mot|Un petit miaou pour te rappeler que tu peux souffler.
mot|Que les gens qui t’entourent aient le cœur aussi chaud qu’une cuisine en hiver.
mot|Ton sourire est le plus joli supplément de cette recette.
mot|Un caramel se termine. Une gentille attention peut rester longtemps.
mot|Que ta journée ait le charme d’un chat qui vient s’installer près de toi.
mot|Garde un petit coin de ton agenda pour les plaisirs spontanés.
mot|Un carré après l’autre, un instant après l’autre.
mot|La gourmandise est encore plus jolie avec un merci.
mot|Tu peux être toi-même, même avec des miettes sur le pull.
mot|Que ton prochain café ait de la bonne compagnie.
mot|Un peu de folie, beaucoup de douceur : joli mélange.
mot|Le chat recommande une pause. Pour une fois, suivons son avis.
mot|On ne peut pas emballer les câlins, alors on a créé des caramels.
mot|Que ce petit sachet te réserve autant de sourires que de douceurs.
mot|Les petites joies sont des recettes à refaire souvent.
mot|Une douceur offerte, c’est une petite façon de dire « j’ai pensé à toi ».
mot|Tu as le droit de garder le dernier caramel pour toi.
mot|Une journée bien remplie mérite aussi un petit moment vide.
mot|Fais une place à l’imprévu, il apporte parfois des bonbons.
mot|Les meilleurs ingrédients d’une pause : du temps et un peu d’envie.
mot|Que ton humeur trouve son rayon de soleil.
mot|Un petit carré doré, et le quotidien prend un air de fête.
mot|Emporte un peu de douceur. Le monde en redemande toujours.
histoire|Un chat trouva une toque trop grande. Il s’endormit dedans. La pâtisserie gagna son premier chef en résidence.
histoire|Un caramel rêvait de voir le monde. Il partit dans une poche et découvrit surtout le chemin du retour à la maison.
histoire|Le chat du chef s’assit devant la recette. Personne ne pouvait la lire. Il appela cela « garder le secret ».
histoire|Une miette de caramel tomba près du café. Deux amis parlèrent encore une heure. Elle avait accompli sa mission.
histoire|Un petit caramel voulait être un gâteau. Puis quelqu’un dit : « Juste la bonne taille. » Il resta lui-même.
histoire|Le chat ouvrit un hôtel pour siestes. Une seule chambre : le carton. Complet depuis l’ouverture.
histoire|Une boîte de caramels se retrouva sur une table de jeu. Tout le monde gagna une petite douceur, même les mauvais perdants.
histoire|Un chat voulut aider à emballer des cadeaux. Il choisit de retenir le ruban. Avec beaucoup, beaucoup d’application.
histoire|Deux caramels se rencontrèrent dans un sachet. « Tu viens d’où ? » « De la même casserole. » Une grande amitié était née.
histoire|Le chef chercha sa toque toute la matinée. Le chat avait enfin trouvé un lit à sa taille.
histoire|Un caramel partit en pique-nique. Il ne vit jamais le paysage, mais il entendit beaucoup de rires.
histoire|Le chat lança un concours de détente. Il gagna avant même que les autres aient compris les règles.
histoire|Une petite boîte attendait sur un bureau. Dedans, des caramels et un mot : « Pour les jours trop longs. » Le lundi sourit.
histoire|Un chat s’invita à une réunion de cuisine. Il resta silencieux. Le compte rendu indiqua : « Présence très remarquée. »
histoire|Un caramel n’aimait pas sa forme de travers. Puis on le choisit en premier : il avait l’air d’avoir une histoire.
histoire|Le chat du quartier avait un itinéraire précis : trois fenêtres, deux salutations et un grand détour pour le soleil.
histoire|Un sachet de caramels accompagna un voyage en train. À l’arrivée, les voisins ne l’étaient plus tout à fait : ils avaient fait connaissance.
histoire|Un chat décida d’apprendre la pâtisserie. Première leçon : surveiller le four. Il préféra surveiller le coussin.
histoire|Le dernier caramel se croyait oublié. En réalité, on le gardait pour le meilleur moment : la pause de fin de journée.
histoire|Le chat installa une pancarte sur le canapé : « Atelier de repos. » Les inscriptions dépassèrent toutes les attentes.
histoire|Un caramel entendit « fait maison » et se sentit important. Il emportait un petit morceau de cuisine avec lui.
histoire|Un chat tenta de compter les étoiles. Il s’arrêta à la fenêtre : la lune était une distraction beaucoup trop sérieuse.
histoire|Une personne offrit un caramel à son voisin. Le lendemain, elle reçut une fleur. La semaine avait trouvé son thème.
histoire|Le chat ouvrit un carnet de recettes. Il y dessina un soleil, un coussin et une fenêtre. Pour lui, c’était complet.
histoire|Un caramel rêvait d’être servi dans une grande assiette. Il finit dans une petite main ravie. C’était encore mieux.
histoire|Un chat s’allongea sur une liste de tâches. Pendant dix minutes, personne ne put rien faire. Il trouva cela très réussi.
histoire|Deux amis avaient oublié pourquoi ils s’étaient retrouvés. Il restait du café et des caramels : la raison pouvait attendre.
histoire|Le chat inspecta un panier vide, y entra et ferma les yeux. Le contrôle qualité dura toute l’après-midi.
histoire|Un caramel traversa la ville dans un sac. Sa grande aventure se termina par un « oh, merci ! ». Belle destination.
histoire|Un chat demanda une porte ouverte. Puis il s’assit sur le seuil. Il aimait surtout avoir des possibilités.
histoire|Une boîte de caramels passa de main en main. Quand elle fut vide, il restait quelque chose : une conversation.
histoire|Le chat pâtissier annonça sa spécialité : la sieste feuilletée. Une couche de sommeil, une couche de soleil, puis on recommence.
fait|Le caramel doit sa couleur à des transformations chimiques du sucre sous l’effet de la chaleur.|caramel
fait|Caramélisation et réaction de Maillard sont deux phénomènes différents. Dans les confiseries au lait, Maillard peut aussi contribuer à la couleur.|caramel
fait|Le sucre chauffé ne change pas seulement de couleur : il forme aussi de nouvelles molécules aromatiques.|caramel
fait|La réaction de Maillard intervient aussi dans le brunissement des noix grillées. Une petite parenté gourmande avec certaines confiseries au lait !|caramel
fait|La langue du chat porte de petites pointes appelées papilles, orientées vers l’arrière.|chat
fait|Certaines papilles de la langue du chat ont une cavité qui recueille la salive et la dépose sur les poils pendant la toilette.|chat
fait|Des chercheurs ont étudié les langues de six espèces de félins, du chat domestique au lion, pour comprendre leur toilette.|chat
fait|La langue du chat a inspiré une brosse expérimentale avec des papilles imprimées en 3D. Le chat a du génie jusque dans sa toilette !|chat
`.trim().split('\n').map(line => {
  const [category, text, source] = line.split('|');
  return { category, text, source };
});

document.querySelectorAll('[data-brand]').forEach(element => { element.textContent = BOUTIQUE; });
document.title = `${BOUTIQUE} · Du caramel et des miaous`;

const messageElement = document.querySelector('#message');
const scene = document.querySelector('#letter-scene');
const anotherButton = document.querySelector('#another');
const shareButton = document.querySelector('#share');
const statusElement = document.querySelector('#share-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentIndex = -1;
let remaining = [];
let changing = false;

// Un sac mélangé : tous les messages passent avant de recommencer un cycle.
function drawMessage() {
  if (remaining.length === 0) {
    remaining = MESSAGES.map((_, index) => index);
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    if (remaining.length > 1 && remaining[remaining.length - 1] === currentIndex) {
      [remaining[0], remaining[remaining.length - 1]] = [remaining[remaining.length - 1], remaining[0]];
    }
  }
  currentIndex = remaining.pop();
  const message = MESSAGES[currentIndex];
  messageElement.textContent = message.text;
  document.querySelector('#message-category').textContent = CATEGORIES[message.category];
  const sourceLink = document.querySelector('#fact-source');
  const source = SOURCES[message.source];
  sourceLink.hidden = !source;
  if (source) {
    sourceLink.href = source.url;
    sourceLink.textContent = `Source : ${source.label} (nouvel onglet)`;
  } else {
    sourceLink.removeAttribute('href');
  }
}

async function revealNext() {
  if (changing) return;
  changing = true;
  anotherButton.disabled = true;
  shareButton.disabled = true;
  statusElement.textContent = '';
  document.querySelector('#copy-fallback').hidden = true;
  scene.classList.remove('is-arriving');
  scene.classList.add('is-changing');
  if (!reducedMotion.matches) await new Promise(resolve => setTimeout(resolve, 180));
  drawMessage();
  scene.classList.remove('is-changing');
  scene.classList.add('is-arriving');
  if (!reducedMotion.matches) await new Promise(resolve => setTimeout(resolve, 450));
  anotherButton.disabled = false;
  shareButton.disabled = false;
  changing = false;
}

anotherButton.addEventListener('click', revealNext);
shareButton.addEventListener('click', async () => {
  const text = `${MESSAGES[currentIndex].text}\n\n${BOUTIQUE} · Création de Lucas et Yoann${MESSAGES[currentIndex].source ? "\n" + SOURCES[MESSAGES[currentIndex].source].url : ""}`;
  statusElement.textContent = '';
  document.querySelector('#copy-fallback').hidden = true;
  // Partage le texte affiché : le destinataire reçoit exactement ce petit mot.
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Ton petit miaou', text });
      statusElement.textContent = 'Un petit miaou partagé ♡';
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    statusElement.textContent = 'Petit miaou copié. Il ne reste qu’à l’envoyer ♡';
  } catch {
    const field = document.querySelector('#copy-text');
    document.querySelector('#copy-fallback').hidden = false;
    field.value = text;
    field.focus();
    field.select();
    statusElement.textContent = 'Le petit miaou est prêt à être copié.';
  }
});

document.querySelector('#privacy-toggle').addEventListener('click', event => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('#privacy').hidden = expanded;
});

drawMessage();
scene.classList.add('is-arriving');
