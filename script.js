/* Tous les contenus sont tirés au hasard, sans choix de catégorie. */
const BOUTIQUE = 'Caramiaou';
const SOURCES = {
  caramel: { label: 'Exploratorium · Science of Candy', url: 'https://annex.exploratorium.edu/cooking/candy/caramels-story.html' },
  chat: { label: 'Noel et Hu · PNAS (2018)', url: 'https://pubmed.ncbi.nlm.nih.gov/30455290/' }
};
const CATEGORIES = { blague: 'LA PETITE BLAGUE', mot: 'LE MOT DOUX', histoire: 'LA MINI-HISTOIRE · FICTION', fait: 'LE SAVAIS-TU ?' };
/* Format : catégorie | texte | source facultative. Une surprise par ligne. */
const MESSAGES = `
blague|J’ai acheté un panier à mon chat. Il dort dans le carton. Le panier sert à ranger le carton.
blague|Mon chat m’aide à travailler : il maintient la touche « fffffffffffff ».
blague|J’ai demandé à mon chat de garder ma place. Ça fait trois heures qu’il la garde.
blague|Mon chat ne fait pas tomber les objets. Il vérifie que la gravité fonctionne toujours.
blague|Je voulais garder un caramel pour demain. C’était une belle idée, pendant huit secondes.
blague|Mon chat aime le partage : à lui l’oreiller, à moi les deux centimètres qui restent.
blague|J’ai dit « fais comme chez toi » à mon chat. Il m’a demandé depuis quand c’était chez moi.
blague|Mon chat a un réveil intégré. Je cherche encore le bouton « dimanche ».
blague|Un caramel chez le coiffeur : « Un petit carré, s’il vous plaît. »
blague|J’ai demandé à mon chat de mettre la table. Il s’est mis dessus. Consigne presque respectée.
blague|Mon chat a regardé le prix de son arbre à chat. Puis il est monté sur l’étagère.
blague|Que dit un caramel après une journée en cuisine ? « Je suis cuit. »
blague|J’ai caché les caramels pour ne pas les manger. Malheureusement, je sais où.
blague|Mon chat adore les portes ouvertes. Surtout celles qu’il vient de me faire fermer.
blague|J’ai commencé un puzzle de mille pièces. Mon chat préfère la version « mille endroits ».
blague|Mon chat est très ponctuel : il réclame toujours son repas une heure en avance.
blague|« Tu veux un caramel ? » Voilà. Un discours court qui met tout le monde d’accord.
blague|Mon chat ne perd pas ses poils. Il transforme mes vêtements en édition limitée.
blague|J’ai compté les caramels pour savoir combien il en restait. Maintenant, il en reste deux de moins.
blague|Mon chat fait du télétravail : il occupe mon bureau et me regarde faire le reste.
mot|Le temps d’un caramel, le reste peut attendre.
mot|Un petit carré de douceur dans une journée qui va trop vite.
mot|Que ton cœur ronronne un peu aujourd’hui.
mot|Tu mérites aussi la douceur que tu offres aux autres.
mot|Les jours gris aussi ont droit à leur carré doré.
mot|Pas besoin d’une grande occasion pour une petite joie.
mot|Tu peux garder le dernier caramel pour toi. On ne dira rien.
mot|Un caramel pour la pause. Un sourire pour la suite.
mot|Fais comme le chat au soleil : profite du coin de lumière.
mot|Une douceur offerte, c’est une petite façon de dire « j’ai pensé à toi ».
mot|Une miette de joie reste de la joie.
mot|Prends ton temps. Même les bonnes recettes en ont besoin.
mot|Une pause ne se mérite pas. Elle se prend.
mot|Les meilleurs moments ne sont pas toujours les plus grands.
mot|Aujourd’hui, laisse une petite place à ce qui te fait plaisir.
mot|Du caramel sur la langue, un peu moins de choses dans la tête.
histoire|Le chat trouva une toque trop grande et s’endormit dedans. Depuis, la cuisine compte un chef et un chef de sieste.
histoire|On avait apporté des caramels pour une visite de dix minutes. Deux heures plus tard, le café était froid et personne ne regardait l’heure.
histoire|Un petit caramel était de travers. On le choisit en premier : « Celui-là, on dirait un cœur. » Il n’avait jamais remarqué.
histoire|Le dernier caramel se croyait oublié. En réalité, quelqu’un le gardait pour toi.
histoire|Le chat s’allongea sur la liste des choses à faire. Pendant dix minutes, il n’y eut plus rien à faire. Personne ne s’en plaignit.
histoire|« Je n’ai rien apporté », dit-elle en posant un sachet de caramels sur la table. C’était pourtant exactement ce qu’il fallait.
histoire|Deux voisins se croisaient sans se parler. Un jour, l’un proposa un caramel. Maintenant, ils connaissent le prénom de leurs chats.
histoire|Le chat entra dans un carton trop petit. Il dépassait de partout, mais avait l’air ravi. Le confort n’était visiblement pas une affaire de dimensions.
histoire|La boîte de caramels passa de main en main. Quand elle fut vide, la conversation, elle, avait encore de quoi durer.
histoire|On avait réservé le plus joli caramel pour la photo. Puis quelqu’un l’avait mangé. La photo montra trois personnes en train de rire.
fait|Caramélisation et réaction de Maillard sont différentes. Dans les confiseries au lait, la réaction de Maillard peut aussi contribuer au brunissement.|caramel
fait|Quand le sucre caramélise, il ne change pas seulement de couleur : de nouvelles molécules lui donnent aussi ses arômes.|caramel
fait|De petites cavités sur certaines papilles de la langue du chat recueillent la salive et la déposent sur les poils pendant sa toilette.|chat
fait|La langue du chat a inspiré une brosse expérimentale avec des papilles imprimées en 3D. Même sa toilette donne des idées aux scientifiques.|chat
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
    sourceLink.textContent = `Source : ${source.label}`;
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
