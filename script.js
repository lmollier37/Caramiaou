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
blague|J’ai demandé à mon chat de garder ma place. Ça fait trois heures qu’il la garde.
blague|Mon chat ne fait pas tomber les objets. Il vérifie que la gravité fonctionne toujours.
blague|Je voulais garder un caramel pour demain. C’était une belle idée, pendant huit secondes.
blague|Mon chat aime le partage : à lui l’oreiller, à moi les deux centimètres qui restent.
blague|J’ai dit « fais comme chez toi » à mon chat. Il m’a demandé depuis quand c’était chez moi.
blague|Un caramel chez le coiffeur : « Un coupe carré, s’il vous plaît. »
blague|Que dit un caramel après une journée en cuisine ? « Je suis cuit. »
blague|J’ai caché les caramels pour ne pas les manger. Malheureusement, je sais où.
blague|« Tu veux un caramel ? » Voilà. Un discours court qui met tout le monde d’accord.
blague|J’ai compté les caramels pour savoir combien il en restait. Maintenant, il en reste deux de moins.
mot|Le temps d’un caramel, le reste peut attendre.
mot|Un petit carré de douceur dans une journée qui va trop vite.
mot|Les jours gris aussi ont droit à leur carré doré.
mot|Pas besoin d’une grande occasion pour une petite joie.
mot|Tu peux garder le dernier caramel pour toi. On ne dira rien.
mot|Un caramel pour la pause. Un sourire pour la suite.
mot|Une douceur offerte, c’est une petite façon de dire « j’ai pensé à toi ».
mot|Les meilleurs moments ne sont pas toujours les plus grands.
mot|Aujourd’hui, laisse une petite place à ce qui te fait plaisir.
mot|Du caramel sur la langue, un peu moins de choses dans la tête.
histoire|Un petit caramel était de travers. On le choisit en premier : « Celui-là, on dirait un cœur. » Il n’avait jamais remarqué.
histoire|Le dernier caramel se croyait oublié. En réalité, quelqu’un le gardait pour toi.
histoire|« Je n’ai rien apporté », dit-elle en posant un sachet de caramels sur la table. C’était pourtant exactement ce qu’il fallait.
histoire|Deux voisins se croisaient sans se parler. Un jour, l’un proposa un caramel. Maintenant, ils connaissent le prénom de leurs chats.
histoire|La boîte de caramels passa de main en main. Quand elle fut vide, la conversation, elle, avait encore de quoi durer.
histoire|On avait réservé le plus joli caramel pour la photo. Puis quelqu’un l’avait mangé. La photo montra trois personnes en train de rire.
blague|J’ai partagé mes caramels en deux parts égales : ceux que je mange maintenant et ceux que je mange dans cinq minutes.
blague|Mon chat m’a apporté un cadeau. Je lui avais pourtant expliqué que je préférais les caramels aux souris.
blague|J’ai ouvert le sachet sans faire de bruit. Enfin, c’est ce que je croyais avant de voir trois têtes se retourner.
blague|J’ai mis les caramels dans une boîte à couture. Pour une fois, tout le monde a été ravi de ne pas y trouver de fil.
mot|Il y a des « je t’aime » qui se disent avec un petit sachet.
mot|Que cette journée te laisse un souvenir aussi doux que cette bouchée.
mot|Un petit plaisir n’est pas une petite chose quand il arrive au bon moment.
mot|Certains jours, le bonheur tient entre deux doigts.
mot|Un sachet à ouvrir, une conversation à prolonger.
histoire|Il restait deux caramels. Chacun proposa de laisser le dernier à l’autre. Ils finirent par les manger en même temps, pour ne vexer personne.
histoire|Elle glissa un caramel dans la poche de son manteau avant de partir. Le soir, elle le retrouva avec un mot : « Pour le retour. » Quelqu’un avait eu la même idée.
histoire|Au bureau, une boîte portait l’étiquette « En cas d’urgence ». À l’intérieur : des caramels. Ce jour-là, il y eut beaucoup d’urgences.
histoire|Il apportait toujours des caramels à sa grand-maman. Un jour, elle lui avoua qu’elle en achetait aussi. « Les tiens, c’est différent. Ils arrivent avec toi. »
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
