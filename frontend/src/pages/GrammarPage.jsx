import { useState } from "react";
import { layout } from "../styles/commonStyles";

export default function GrammarPage() {
  const topicGroups = {
    "Les Bases": {
      "Les noms et le genre": {
        description: `
En français, tous les noms sont classés comme masculins ou féminins, ce qui affecte les articles, adjectifs et pronoms qui les accompagnent. Le genre n'est pas toujours intuitif et repose souvent sur la mémorisation, bien que des règles générales basées sur les terminaisons puissent aider. Par exemple, les noms se terminant par -age (comme le fromage), -ment (le gouvernement), -eau (le bateau), -isme (le tourisme) sont généralement masculins. À l'inverse, ceux en -tion (la nation), -sion (la décision), -té (la liberté), -ette (la cigarette), -ure (la culture) sont féminins. Cependant, il y a des exceptions : "la page" est féminin malgré -age, et "le silence" est masculin malgré une terminaison typiquement féminine.

Certains noms changent de sens selon le genre : "un livre" (un livre) vs "une livre" (une livre sterling ou une livre de poids). Les noms composés suivent souvent le genre du premier élément principal. Pour les personnes et animaux, le genre reflète souvent le sexe biologique, comme "un garçon" (masculin) et "une fille" (féminin), mais pour les objets inanimés, c'est arbitraire.

Le pluriel s'ajoute généralement avec -s : "un chat → des chats". Exceptions incluent : noms en -au, -eau, -eu ajoutent -x (des châteaux, des jeux); noms en -al deviennent -aux (un cheval → des chevaux); certains restent invariables (des cactus). Les noms étrangers peuvent suivre leurs règles d'origine ou s'adapter. Au pluriel, le genre reste le même, mais les accords changent.

Apprendre le genre avec l'article aide : mémorisez "un arbre" (masculin) plutôt que juste "arbre". Dictionnaires indiquent le genre avec m. ou f.
        `,
        examples: [
          "un arbre (masc.), une fleur (fém.)",
          "le courage (masc.), la patience (fém.)",
          "un tour (voyage, masc.) vs une tour (bâtiment, fém.)",
          "un animal → des animaux (exception -aux)",
          "un oeil → des yeux (irrégulier)",
          "des gens (invariable, pluriel)",
          "la fin → les fins (pluriel régulier)",
        ],
      },
      "Les articles": {
        description: `
Les articles en français introduisent les noms et s'accordent en genre et nombre. Les articles définis (le/la/les/l') désignent quelque chose de spécifique ou général : "le soleil" (le soleil en général), "la maison où j'habite" (spécifique). "L'" s'utilise avant une voyelle ou h muet : l'eau, l'hôtel. Au pluriel, c'est toujours "les".

Les articles indéfinis (un/une/des) indiquent quelque chose de non spécifique : "un chien" (n'importe quel chien). "Des" est pluriel, mais devient "de" après une négation ou quantité : "Je n'ai pas de chiens".

Les articles partitifs (du/de la/de l'/des) expriment une quantité imprécise, souvent pour la nourriture : "du fromage" (un peu de fromage). Ils se forment avec "de + article défini". Après négation, c'est "de" : "Je ne veux pas de fromage".

Contractions : à + le/la/les = au/à la/aux; de + le/la/les = du/de la/des. Exceptions pour h aspiré : "le héros" (pas l'héros).

Les articles sont omis dans certains cas : après "de" pour professions ("Je suis professeur"), ou en listes. En français formel, ils sont plus fréquents qu'en anglais.
        `,
        examples: [
          "le garçon, la fille, les enfants, l'ami",
          "un crayon, une gomme, des livres",
          "du vin, de la bière, de l'eau, des pommes",
          "Je n'ai pas d'argent. (négation)",
          "Au supermarché (contraction)",
          "Je viens des États-Unis.",
          "Sans article : Paris est beau.",
        ],
      },
      "Les adjectifs": {
        description: `
Les adjectifs qualificatifs décrivent les noms et doivent s'accorder en genre (masculin/féminin) et nombre (singulier/pluriel). Position : la plupart après le nom ("une voiture rouge"), mais certains avant pour emphase ou règle (beau, bon, grand, gros, jeune, joli, mauvais, petit, vieux, nouveau, premier, dernier, même, autre). Ceux avant peuvent changer de sens : "un ancien ami" (ancien, ex-ami) vs "un ami ancien" (ami âgé).

Féminin : ajoutez -e au masculin (grand → grande), mais exceptions : -f → -ve (neuf → neuve), -x → -se (heureux → heureuse), -eur → -euse (travailleur → travailleuse), irréguliers comme blanc → blanche.

Pluriel : ajoutez -s (grands), mais -al → -aux (normal → normaux), invariables comme "orange". Adjectifs composés : seul le dernier s'accorde souvent.

Adjectifs démonstratifs (ce/cet/cette/ces) s'accordent : cet arbre (avant voyelle). Possessifs (mon/ma/mes, ton/ta/tes, etc.) aussi.

Comparatif : plus/moins/aussi + adjectif + que. Superlatif : le/la/les plus/moins + adjectif.
        `,
        examples: [
          "un grand arbre → une grande maison",
          "des chiens fidèles → des chiennes fidèles",
          "un beau livre, une belle histoire",
          "heureux → heureuse → heureux/heureuses",
          "Ce garçon, cette fille, ces enfants",
          "Mon ami, ma amie, mes amis",
          "Plus grand que toi, le plus grand",
        ],
      },
      "Les pronoms": {
        description: `
Les pronoms remplacent les noms pour éviter les répétitions. Catégories principales :

- Personnels sujets : je, tu, il/elle/on, nous, vous, ils/elles. "On" est informel pour "nous" ou général.

- Personnels compléments : directs (me/te/le/la/nous/vous/les), indirects (me/te/lui/nous/vous/leur), réfléchis (me/te/se/nous/vous/se). Position avant verbe : "Je le vois".

- Toniques (après prépositions ou emphase) : moi, toi, lui/elle/soi, nous, vous, eux/elles. "C'est moi".

- Possessifs : mine/mienne/miens/miennes, etc. "Le mien est rouge".

- Relatifs : qui (sujet), que (objet), dont (de qui/quoi), où (lieu/temps), lequel (plus formel).

- Démonstratifs : celui/celle/ceux/celles (+ -ci/-là ou de/qui/que). "Celui-ci est meilleur".

- Indéfinis : tout, rien, quelqu'un, personne, chacun, quelque chose, on (impersonnel).

- Adverbiaux : y (lieu), en (quantité/de lieu).

Ordre des pronoms : sujet > réfléchi > indirect > direct > y > en.
        `,
        examples: [
          "Je te parle. (complément)",
          "Nous nous lavons. (réfléchi)",
          "C'est lui qui vient. (tonique + relatif)",
          "La mienne est grande. (possessif)",
          "Le livre dont je parle. (relatif)",
          "Celui que tu veux. (démonstratif)",
          "Personne n'est venu. (indéfini)",
        ],
      },
    },
    "Les Verbes et Temps": {
      "Les verbes au présent": {
        description: `
Les verbes français se conjuguent selon le sujet, temps, mode. Trois groupes :

1er : -er (80% des verbes). Radical + e/es/e/ons/ez/ent. Ex: aimer → j'aime.

2e : -ir finissant en -issons (nous). Radical + is/is/it/issons/issez/issent. Ex: finir.

3e : irréguliers comme -dre (prendre → prends), -ir non réguliers (venir → viens).

Irréguliers communs : être (suis/es/est/sommes/êtes/sont), avoir (ai/as/a/avons/avez/ont), aller (vais), faire (fais), pouvoir (peux), vouloir (veux), devoir (dois), savoir (sais), voir (vois), dire (dis), boire (bois).

Présent pour actions actuelles, habitudes, vérités générales. "On" conjugue comme il/elle.

Pronoms sujets obligatoires sauf impératif. Négation entoure le verbe.
        `,
        examples: [
          "manger → je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent",
          "choisir → je choisis, tu choisis, il choisit, nous choisissons, vous choisissez, ils choisissent",
          "vendre → je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent",
          "être → je suis, tu es, il est, nous sommes, vous êtes, ils sont",
          "avoir → j'ai, tu as, il a, nous avons, vous avez, ils ont",
          "aller → je vais, tu vas, il va, nous allons, vous allez, ils vont",
          "faire → je fais, tu fais, il fait, nous faisons, vous faites, ils font",
        ],
      },
      "Le passé composé": {
        description: `
Temps composé pour actions passées complètes, souvent avec marqueurs comme hier, la semaine dernière. Formé d'auxiliaire (avoir pour la plupart, être pour mouvements/refléchis) + participe passé.

Participe passé : -er → é (mangé), -ir → i (fini), -re → u (vendu). Irréguliers : être → été, avoir → eu, faire → fait, voir → vu, prendre → pris, etc.

Avec être (verbes comme aller, venir, naître, mourir, monter, descendre, partir, arriver, rester, tomber, entrer, sortir, plus réfléchis), accord avec sujet : "Elle est allée".

Avec avoir, accord avec COD si avant verbe : "Les pommes que j'ai mangées".

Négation : ne ... pas autour auxiliaire. Questions similaires.

Souvent utilisé à l'oral au lieu du passé simple (littéraire).
        `,
        examples: [
          "J'ai lu un livre. (avoir)",
          "Nous sommes arrivés tard. (être, accord)",
          "Elle s'est lavée. (réfléchi)",
          "Les lettres que tu as écrites. (accord COD)",
          "Je n'ai pas vu le film.",
          "Ont-ils mangé ?",
          "Il est né en 1990.",
        ],
      },
      "L’imparfait": {
        description: `
Temps pour descriptions passées, habitudes, contextes, états durables. Souvent avec passé composé pour fond vs action ponctuelle.

Formation : radical de nous au présent (sans -ons) + ais/ais/ait/ions/iez/aient. Ex: parler (nous parlons → parl + ais = je parlais).

Irréguliers : être → étais (radical ét-).

Utilisé pour "used to" en anglais, météo ("il pleuvait"), âge ("j'avais 10 ans"), sentiments continus.

Avec si pour hypothèses passées. À l'oral, commun pour récits.
        `,
        examples: [
          "Je marchais quand il a plu. (habitude vs ponctuel)",
          "Nous vivions en France. (état)",
          "Il était grand et fort. (description)",
          "Tu jouais au tennis tous les jours.",
          "Elles chantaient pendant le voyage.",
          "Si j'étais riche... (mais imparfait pour conditionnel passé? Wait, no, that's conditionnel)",
          "Les enfants dormaient paisiblement.",
        ],
      },
      "Le futur et le conditionnel": {
        description: `
Futur simple : actions futures certaines. Radical = infinitif (pour réguliers, retire -e pour -re/-ir) + ai/as/a/ons/ez/ont. Irréguliers : être → serai, avoir → aurai, aller → irai, faire → ferai, voir → verrai, venir → viendrai.

Futur proche : aller + infinitif pour futur imminent.

Conditionnel présent : hypothèses, politesse, futur dans le passé. Radical même que futur + imparfait (ais/ais/ait/ions/iez/aient). Ex: je parlerais.

Conditionnel passé : auxiliaire au conditionnel + participe passé (j'aurais mangé).

Si + imparfait = conditionnel présent; si + plus-que-parfait = conditionnel passé.

Politesse : "Pourriez-vous m'aider ?"
        `,
        examples: [
          "Demain, il pleuvra. (futur simple)",
          "Je vais manger. (futur proche)",
          "Si j'avais de l'argent, je voyagerais. (conditionnel)",
          "Elle a dit qu'elle viendrait. (futur dans passé → conditionnel)",
          "J'aurais aimé te voir. (passé)",
          "Voudriez-vous du thé ? (politesse)",
          "Nous serions heureux si...",
        ],
      },
      "Le subjonctif": {
        description: `
Mode pour subjectivité : doutes, émotions, volontés, nécessités après "que". Non utilisé seul, souvent dans subordonnées.

Formation présent : radical ils présent (sans -ent) + e/es/e/ions/iez/ent. Ex: être → soi-; avoir → ai-.

Déclencheurs : verbes comme vouloir que, douter que, il faut que, bien que, pour que, avant que.

Passé : auxiliaire au subjonctif + participe passé.

Imparfait et plus-que-parfait rares, littéraires.

Certains verbes changent : pouvoir → puisse, faire → fasse.
        `,
        examples: [
          "Je veux que tu viennes. (volonté)",
          "Il est possible qu'il pleuve. (doute)",
          "Bien qu'elle soit fatiguée... (concession)",
          "Avant que nous partions. (temps)",
          "Il faut que j'aie fini. (avoir au subjonctif)",
          "Que vous soyez prêt ou non.",
          "J'aurais aimé qu'il soit là. (passé)",
        ],
      },
    },
    "Autres Structures": {
      "La négation": {
        description: `
Négation standard : ne ... pas autour verbe. "Ne" avant voyelle devient n'. Autres paires : ne ... jamais (jamais), ne ... plus (plus), ne ... rien (rien), ne ... personne (personne), ne ... ni ... ni (ni...ni), ne ... aucun (aucun), ne ... nulle part (nulle part).

À l'infinitif : ne pas manger. Après que : que je ne sois pas.

Oralement, "ne" souvent omis : "Je sais pas".

Négation partielle vs totale. Avec indéfinis, placement important : "Je ne vois personne" vs "Personne ne vient".
        `,
        examples: [
          "Elle n'aime pas le café.",
          "Nous ne voyageons jamais en hiver.",
          "Il n'a rien dit.",
          "Je ne connais personne ici.",
          "Ni lui ni elle n'est venu.",
          "Ne plus fumer. (infinitif)",
          "Je crains qu'il ne pleuve. (subjonctif)",
        ],
      },
      "Les questions": {
        description: `
Questions fermées (oui/non) : intonation ascendante ("Tu viens ?"), est-ce que ("Est-ce que tu viens ?"), inversion ("Viens-tu ?") – formelle, pas avec je.

Questions ouvertes : mots interrogatifs qui/que/quand/où/pourquoi/comment/combien + est-ce que ou inversion : "Où est-ce que tu vas ?" ou "Où vas-tu ?".

Sujet complexe avec inversion : "Où le garçon va-t-il ?"

Partielles : "Qui a mangé la pomme ?"

Indirectes : "Je me demande où il est."
        `,
        examples: [
          "As-tu faim ? (inversion)",
          "Est-ce qu'il pleut ?",
          "Quand part le train ?",
          "Combien de livres as-tu ?",
          "À qui parles-tu ?",
          "Pourquoi n'es-tu pas venu ?",
          "Où sont-ils allés ?",
        ],
      },
      "Les prépositions": {
        description: `
Prépositions lient éléments : lieu (à, dans, sur, sous, chez), temps (à, en, pendant, depuis), manière (avec, sans, par), cause (pour, à cause de).

Contractions courantes : à + le = au, de + le = du.

Pays/villes : à/en + ville/pays (à Paris, en France ; au Japon pour masc.).

Verbes + prépositions : penser à, rêver de, dépendre de. Idiomatiques, diffèrent de l'anglais.

Composées : à côté de, en face de.
        `,
        examples: [
          "Je suis à la maison. (lieu)",
          "Nous arrivons en été. (temps)",
          "Il voyage par train. (manière)",
          "C'est pour toi. (cause)",
          "Au cinéma (contraction)",
          "De la part de Marie.",
          "Penser à quelqu'un.",
        ],
      },
      "La voix passive": {
        description: `
Met l'objet en sujet, emphase sur action subie. Formé avec être + participe passé, accordé avec sujet.

Agent : par + agent ("par le chien").

Tous temps : présent (est mangé), imparfait (était mangé), etc.

Évite si agent inconnu. Alternative : se + verbe (réfléchi passif : "Le livre se vend bien").

Pas pour verbes intransitifs.
        `,
        examples: [
          "La lettre est écrite par Paul.",
          "Les maisons ont été construites en 2020.",
          "Le gâteau sera mangé demain.",
          "Elle a été surprise par la nouvelle.",
          "Cela se fait souvent. (réfléchi)",
          "Nous sommes aidés par nos amis.",
          "Il était connu de tous.",
        ],
      },
      "Les conjonctions": {
        description: `
Lient mots/propositions. Coordination (mêmes niveaux) : et (et), mais (mais), ou (ou), donc (donc), or (or), ni (ni), car (car). Mnémotechnique : mais où est donc Ornicar ?

Subordination (dépendante) : que (que), parce que (parce que), quand (quand), si (si), bien que (bien que), pour que (pour que), afin que (afin que), lorsque (lorsque), puisque (puisque), quoique (quoique).

Certaines déclenchent subjonctif : bien que, pour que.

Composées : non seulement ... mais aussi.
        `,
        examples: [
          "Il court et il saute. (coordination)",
          "Je reste mais tu pars.",
          "Parce qu'il pleut, nous restons. (subordination)",
          "Si tu viens, je suis heureux.",
          "Bien que fatigué, il continue. (subjonctif)",
          "Lorsque le soleil se lève...",
          "Non seulement beau, mais intelligent.",
        ],
      },
    },
  };

  const [selectedGroup, setSelectedGroup] = useState(Object.keys(topicGroups)[0]);
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(topicGroups[selectedGroup])[0]);

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9fafb" }}>
      {/* Enhanced Sidebar with Groups */}
      <div
        style={{
          width: "300px",
          background: "#1f2937",
          color: "white",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflowY: "auto",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Grammaire Française</h2>
        {Object.keys(topicGroups).map((group) => (
          <div key={group}>
            <h3 style={{ fontSize: "1.1rem", margin: "0.75rem 0 0.5rem", color: "#9ca3af" }}>{group}</h3>
            {Object.keys(topicGroups[group]).map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setSelectedGroup(group);
                  setSelectedTopic(topic);
                }}
                style={{
                  textAlign: "left",
                  background: selectedTopic === topic ? "#4b5563" : "transparent",
                  border: "none",
                  color: "white",
                  padding: "0.6rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background 0.3s, transform 0.1s",
                  marginLeft: "0.5rem",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateX(5px)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateX(0)")}
              >
                {topic}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Enhanced Content with Scrollbar and Formatting */}
      <div style={{ flex: 1, padding: "2.5rem", overflowY: "auto", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ ...layout.heading, fontSize: "2rem", marginBottom: "1rem", color: "#1f2937" }}>{selectedTopic}</h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem", whiteSpace: "pre-line", color: "#4b5563" }}>
          {topicGroups[selectedGroup][selectedTopic].description}
        </p>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "#374151" }}>Exemples</h3>
        <ul style={{ lineHeight: "1.9", listStyleType: "disc", paddingLeft: "1.5rem", color: "#4b5563" }}>
          {topicGroups[selectedGroup][selectedTopic].examples.map((ex, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>{ex}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}