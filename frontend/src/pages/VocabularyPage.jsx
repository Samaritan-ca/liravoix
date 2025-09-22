/*import { useState } from "react";
import { layout } from "../styles/commonStyles";

export default function VocabularyPage() {
  const topicGroups = {
    "Les Verbes": {
      "100 Verbes les Plus Courants": {
        description: `
Voici une liste des 100 verbes les plus courants en français, avec leurs traductions en anglais. Ces verbes sont essentiels pour la communication quotidienne et forment la base de nombreuses phrases. Apprenez-les avec des exemples pour mieux les mémoriser. Les verbes sont listés à l'infinitif.
        `,
        examples: [
          "1. être - to be",
          "2. avoir - to have",
          "3. faire - to do/make",
          "4. aller - to go",
          "5. dire - to say",
          "6. voir - to see",
          "7. savoir - to know",
          "8. pouvoir - to be able",
          "9. venir - to come",
          "10. vouloir - to want",
          "11. devoir - to have to",
          "12. croire - to believe",
          "13. trouver - to find",
          "14. donner - to give",
          "15. falloir - to be necessary",
          "16. passer - to pass",
          "17. mettre - to put",
          "18. rester - to stay",
          "19. prendre - to take",
          "20. parler - to speak",
          "21. comprendre - to understand",
          "22. tenir - to hold",
          "23. porter - to carry/wear",
          "24. sembler - to seem",
          "25. montrer - to show",
          "26. continuer - to continue",
          "27. penser - to think",
          "28. commencer - to begin",
          "29. connaître - to know",
          "30. appeler - to call",
          "31. lire - to read",
          "32. vivre - to live",
          "33. écrire - to write",
          "34. perdre - to lose",
          "35. recevoir - to receive",
          "36. suivre - to follow",
          "37. offrir - to offer",
          "38. choisir - to choose",
          "39. construire - to build",
          "40. occuper - to occupy",
          "41. jouer - to play",
          "42. marcher - to walk",
          "43. courir - to run",
          "44. manger - to eat",
          "45. boire - to drink",
          "46. dormir - to sleep",
          "47. sentir - to feel",
          "48. entendre - to hear",
          "49. sortir - to go out",
          "50. entrer - to enter",
          "51. retourner - to return",
          "52. arriver - to arrive",
          "53. travailler - to work",
          "54. étudier - to study",
          "55. chanter - to sing",
          "56. danser - to dance",
          "57. voyager - to travel",
          "58. visiter - to visit",
          "59. acheter - to buy",
          "60. vendre - to sell",
          "61. payer - to pay",
          "62. aider - to help",
          "63. aimer - to love",
          "64. adorer - to adore",
          "65. détester - to hate",
          "66. préférer - to prefer",
          "67. finir - to finish",
          "68. ouvrir - to open",
          "69. fermer - to close",
          "70. casser - to break",
          "71. réparer - to repair",
          "72. laver - to wash",
          "73. nettoyer - to clean",
          "74. cuisiner - to cook",
          "75. naître - to be born",
          "76. mourir - to die",
          "77. rire - to laugh",
          "78. pleurer - to cry",
          "79. crier - to shout",
          "80. chuchoter - to whisper",
          "81. demander - to ask",
          "82. répondre - to answer",
          "83. promettre - to promise",
          "84. oublier - to forget",
          "85. se souvenir - to remember",
          "86. apprendre - to learn",
          "87. enseigner - to teach",
          "88. expliquer - to explain",
          "89. changer - to change",
          "90. grandir - to grow",
          "91. devenir - to become",
          "92. partir - to leave",
          "93. revenir - to come back",
          "94. monter - to go up",
          "95. descendre - to go down",
          "96. voler - to fly/to steal",
          "97. nager - to swim",
          "98. conduire - to drive",
          "99. rendre - to give back",
          "100. attendre - to wait",
        ],
      },
    },
    "Les Noms": {
      "100 Noms les Plus Courants": {
        description: `
Voici une liste des 100 noms les plus courants en français, avec leurs genres (m pour masculin, f pour féminin) et leurs traductions en anglais. Ces noms couvrent des thèmes comme le temps, les lieux, la famille, le corps, la nourriture et plus encore, idéaux pour les débutants.
        `,
        examples: [
          "1. an (m) - Year",
          "2. année (f) - Year",
          "3. semaine (f) - Week",
          "4. mois (m) - Month",
          "5. jour (m) - Day",
          "6. heure (f) - Hour",
          "7. minute (f) - Minute",
          "8. temps (m) - Time",
          "9. monde (m) - World",
          "10. pays (m) - Country",
          "11. endroit (m) - Place",
          "12. région (f) - Region",
          "13. mer (f) - Sea",
          "14. forêt (f) - Forest",
          "15. montagne (f) - Mountain",
          "16. magasin (m) - Shop",
          "17. banque (f) - Bank",
          "18. parc (m) - Park",
          "19. téléphone (m) - Phone",
          "20. portable (m) - Mobile phone",
          "21. ordinateur (m) - Computer",
          "22. tablette (f) - Tablet",
          "23. télé (f) - TV",
          "24. chargeur (m) - Charger",
          "25. internet (m) - Internet",
          "26. site web (m) - Website",
          "27. compte (m) - Account",
          "28. mot de passe (m) - Password",
          "29. fichier (m) - File",
          "30. logiciel (m) - Software",
          "31. maison (f) - House; Home",
          "32. porte (f) - Door",
          "33. fenêtre (f) - Window",
          "34. frigo (m) - Fridge",
          "35. armoire (f) - Closet",
          "36. pièce (f) - Room",
          "37. cuisine (f) - Kitchen",
          "38. salon (m) - Living room",
          "39. chambre (f) - Bedroom",
          "40. toilettes (f) - Toilets",
          "41. salle de bain (f) - Bathroom",
          "42. voiture (f) - Car",
          "43. bus (m) - Bus",
          "44. train (m) - Train",
          "45. avion (m) - Plane",
          "46. taxi (m) - Taxi; Cab",
          "47. vélo (m) - Bicycle",
          "48. ville (f) - City; Town",
          "49. rue (f) - Street",
          "50. avenue (f) - Avenue",
          "51. route (f) - Road",
          "52. mère (f) - Mother",
          "53. père (m) - Father",
          "54. femme (f) - Wife (literally: Woman)",
          "55. mari (m) - Husband",
          "56. frère (m) - Brother",
          "57. soeur (f) - Sister",
          "58. famille (f) - Family",
          "59. copine (f) - Girlfriend",
          "60. copain (m) - Boyfriend",
          "61. fils (m) - Son",
          "62. fille (f) - Daughter (literally: Girl)",
          "63. ami (m) - Friend",
          "64. tête (f) - Head",
          "65. oeil (m) - Eye",
          "66. bouche (f) - Mouth",
          "67. nez (m) - Nose",
          "68. cheveu (m) - Hair",
          "69. bras (m) - Arm",
          "70. main (f) - Hand",
          "71. jambe (f) - Leg",
          "72. pied (m) - Foot",
          "73. couteau (m) - Knife",
          "74. fourchette (f) - Fork",
          "75. cuillère (f) - Spoon",
          "76. assiette (f) - Plate",
          "77. verre (m) - Glass",
          "78. eau (f) - Water",
          "79. vin (m) - Wine",
          "80. fruit (m) - Fruit",
          "81. légume (m) - Vegetable",
          "82. viande (f) - Meat",
          "83. étudiant (m) - Student",
          "84. docteur (m) - Doctor; Physician",
          "85. policier (m) - Police officer",
          "86. professeur (m) - Teacher",
          "87. avocat (m) - Lawyer",
          "88. serveur (m) - Waiter",
          "89. pantalon (m) - Pants",
          "90. pull (m) - Sweater",
          "91. T-shirt (m) - T-shirt",
          "92. chemise (f) - Shirt",
          "93. manteau (m) - Coat",
          "94. chaussette (f) - Sock",
          "95. robe (f) - Dress",
          "96. chaussure (f) - Shoe",
          "97. question (f) - Question",
          "98. réponse (f) - Answer",
          "99. idée (f) - Idea",
          "100. chose (f) - Thing",
        ],
      },
    },
    "Les Adjectifs": {
      "100 Adjectifs les Plus Courants": {
        description: `
Voici une liste des 100 adjectifs les plus courants en français, avec leurs formes masculines et féminines (si applicables) et leurs traductions en anglais. Ces adjectifs aident à décrire des personnes, des objets, des sentiments et plus encore, parfaits pour enrichir votre vocabulaire de base.
        `,
        examples: [
          "1. Bon – Bonne - Good",
          "2. Mauvais – Mauvaise - Bad",
          "3. Génial – Géniale - Awesome",
          "4. Horrible - Horrible",
          "5. Bizarre - Weird, Strange",
          "6. Facile - Easy",
          "7. Difficile - Difficult, Hard",
          "8. Possible - Possible",
          "9. Impossible - Impossible",
          "10. Simple - Simple",
          "11. Compliqué – Compliquée - Complicated",
          "12. Cher – Chère - Expensive",
          "13. Grand – Grande - Large, Big, Tall, Great, Major",
          "14. Gros – Grosse - Big, Fat",
          "15. Petit – Petite - Small, Little",
          "16. Épais – Épaisse - Thick",
          "17. Fin – Fine - Thin",
          "18. Proche - Near",
          "19. Loin - Far",
          "20. Long – Longue - Long",
          "21. Court – Courte - Short",
          "22. Étroit – Étroite - Narrow, Tight",
          "23. Large - Wide, Broad, Extensive, Large",
          "24. Doux – Douce - Soft, Smooth, Gentle",
          "25. Dur – Dure - Solid, Hard, Difficult, Tough",
          "26. Plein – Pleine - Full",
          "27. Vide - Empty",
          "28. Léger – Légère - Light, Minor, Mild, Slight",
          "29. Lourd – Lourde - Heavy, Annoying",
          "30. Rapide - Fast, Quick",
          "31. Lent – Lente - Slow, Sluggish",
          "32. Chaud – Chaude - Hot, Warm",
          "33. Froid – Froide - Cold",
          "34. Sec – Sèche - Dry",
          "35. Humide - Wet, Moist, Humid",
          "36. Fragile - Fragile, Delicate",
          "37. Premier – Première - First",
          "38. Dernier – Dernière - Last, Final, Latest",
          "39. Second – Seconde - Second",
          "40. Deuxième - Second",
          "41. Prochain – Prochaine - Next",
          "42. Précédent – Précédente - Previous",
          "43. Avant-dernier – Avant-dernière - Penultimate, Second to last",
          "44. Même - Same",
          "45. Autre - Other",
          "46. Différent – Différente - Different",
          "47. Seul – Seule - Only, Alone, Lonely",
          "48. Meilleur – Meilleure - Best, Better",
          "49. Pire - Worst",
          "50. Unique - Unique, Only, Single",
          "51. Spécial – Spéciale - Special",
          "52. Particulier – Particulière - Specific, Particular, Private, Special",
          "53. Nouveau / Nouvel – Nouvelle - New",
          "54. Neuf – Neuve - Brand-new",
          "55. Pauvre - Poor",
          "56. Riche - Wealthy, Diverse, Abundant",
          "57. Propre - Clean, Own, Personal",
          "58. Sale - Dirty",
          "59. Dégueulasse - Disgusting, Nasty",
          "60. Cassé – Cassée - Broken",
          "61. Jeune - Young",
          "62. Vieux / Vieil – Vieille - Old",
          "63. Beau / Bel – Belle - Handsome, Beautiful",
          "64. Moche - Ugly",
          "65. Fort – Forte - Strong, High, Important",
          "66. Faible - Weak, Low, Small",
          "67. Mince - Slim, Thin",
          "68. Mignon – Mignonne - Cute, Sweet",
          "69. Gentil – Gentille - Nice, Kind",
          "70. Méchant – Méchante - Mean, Wicked",
          "71. Con – Conne - Dumb, Jerk",
          "72. Drôle (de) - Fun, Funny, Strange",
          "73. Fou – Folle - Crazy, Mad",
          "74. Sympa - Nice",
          "75. Heureux – Heureuse - Happy",
          "76. Triste - Sad",
          "77. Calme - Calm",
          "78. Excité – Excitée - Excited",
          "79. Content – Contente - Glad",
          "80. Malade - Sick, Ill",
          "81. Mort – Morte - Dead",
          "82. Public – Publique - Public",
          "83. Privé – Privée - Private",
          "84. Important – Importante - Important",
          "85. Dangereux – Dangereuse - Dangerous",
          "86. Ennuyeux – Ennuyeuse - Boring, Inconvenient, Annoying",
          "87. Noir – Noire - Black",
          "88. Blanc – Blanche - White",
          "89. Bleu – Bleue - Blue",
          "90. Rouge - Red",
          "91. Vert – Verte - Green",
          "92. Jaune - Yellow",
          "93. Sucré – Sucrée - Sweet",
          "94. Amer – Amère - Bitter",
          "95. Acide - Sour",
          "96. Épicé – Épicée - Spicy",
          "97. Frais – Fraîche - Fresh",
          "98. Chaud - Hot",
          "99. Froid - Cold",
          "100. Parfait – Parfaite - Perfect",
        ],
      },
    },
  };

  const [selectedGroup, setSelectedGroup] = useState(Object.keys(topicGroups)[0]);
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(topicGroups[selectedGroup])[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9fafb" }}>
      <div
        style={{
          width: isSidebarOpen ? "300px" : "0",
          background: "#1f2937",
          color: "white",
          padding: isSidebarOpen ? "1.5rem" : "1.5rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflowY: isSidebarOpen ? "auto" : "hidden",
          boxShadow: isSidebarOpen ? "2px 0 5px rgba(0,0,0,0.1)" : "none",
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "width 0.3s ease, transform 0.3s ease, padding 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            borderBottom: "1px solid #374151",
            paddingBottom: "0.5rem",
            display: isSidebarOpen ? "block" : "none",
          }}
        >
          Vocabulaire Français de Base
        </h2>
        {Object.keys(topicGroups).map((group) => (
          <div key={group} style={{ display: isSidebarOpen ? "block" : "none" }}>
            <h3 style={{ fontSize: "1.1rem", margin: "0.75rem 0 0.5rem", color: "#9ca3af" }}>
              {group}
            </h3>
            {Object.keys(topicGroups[group]).map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setSelectedGroup(group);
                  setSelectedTopic(topic);
                  setIsSidebarOpen(false); // Close sidebar on topic selection
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
                  width: "100%",
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

      <div
        style={{
          flex: 1,
          padding: "2.5rem",
          overflowY: "auto",
          maxWidth: "800px",
          margin: "0 auto",
        }}
        onClick={() => isSidebarOpen && setIsSidebarOpen(false)} // Close sidebar when clicking content
      >
        <button
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            background: "#1f2937",
            color: "white",
            border: "none",
            padding: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 1001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <h1 style={{ ...layout.heading, fontSize: "2rem", marginBottom: "1rem", color: "#1f2937" }}>
          {selectedTopic}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            marginBottom: "2rem",
            whiteSpace: "pre-line",
            color: "#4b5563",
          }}
        >
          {topicGroups[selectedGroup][selectedTopic].description}
        </p>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "#374151" }}>Liste</h3>
        <ul
          style={{
            lineHeight: "1.9",
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            color: "#4b5563",
          }}
        >
          {topicGroups[selectedGroup][selectedTopic].examples.map((ex, idx) => (
            <li key={idx} style={{ marginBottom: "0.5rem" }}>{ex}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  */

import { useState } from "react";
import { layout } from "../styles/commonStyles";
import { Volume2 } from "lucide-react";

const speak = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "fr-FR";
  window.speechSynthesis.speak(utterance);
};

const extractFrenchWord = (example) => {
  const match = example.match(/^(\d+\.\s*)(.+?)(?:\s*-\s*.*)?$/);
  if (match && match[2]) {
    return match[2].trim();
  }
  return example.trim();
};

export default function VocabularyPage() {
  const topicGroups = {
    "Les Verbes": {
      "100 Verbes les Plus Courants": {
        description: `
Voici une liste des 100 verbes les plus courants en français, avec leurs traductions en anglais. Ces verbes sont essentiels pour la communication quotidienne et forment la base de nombreuses phrases. Apprenez-les avec des exemples pour mieux les mémoriser. Les verbes sont listés à l'infinitif.
        `,
        examples: [
          "1. être - to be",
          "2. avoir - to have",
          "3. faire - to do/make",
          "4. aller - to go",
          "5. dire - to say",
          "6. voir - to see",
          "7. savoir - to know",
          "8. pouvoir - to be able",
          "9. venir - to come",
          "10. vouloir - to want",
          "11. devoir - to have to",
          "12. croire - to believe",
          "13. trouver - to find",
          "14. donner - to give",
          "15. falloir - to be necessary",
          "16. passer - to pass",
          "17. mettre - to put",
          "18. rester - to stay",
          "19. prendre - to take",
          "20. parler - to speak",
          "21. comprendre - to understand",
          "22. tenir - to hold",
          "23. porter - to carry/wear",
          "24. sembler - to seem",
          "25. montrer - to show",
          "26. continuer - to continue",
          "27. penser - to think",
          "28. commencer - to begin",
          "29. connaître - to know",
          "30. appeler - to call",
          "31. lire - to read",
          "32. vivre - to live",
          "33. écrire - to write",
          "34. perdre - to lose",
          "35. recevoir - to receive",
          "36. suivre - to follow",
          "37. offrir - to offer",
          "38. choisir - to choose",
          "39. construire - to build",
          "40. occuper - to occupy",
          "41. jouer - to play",
          "42. marcher - to walk",
          "43. courir - to run",
          "44. manger - to eat",
          "45. boire - to drink",
          "46. dormir - to sleep",
          "47. sentir - to feel",
          "48. entendre - to hear",
          "49. sortir - to go out",
          "50. entrer - to enter",
          "51. retourner - to return",
          "52. arriver - to arrive",
          "53. travailler - to work",
          "54. étudier - to study",
          "55. chanter - to sing",
          "56. danser - to dance",
          "57. voyager - to travel",
          "58. visiter - to visit",
          "59. acheter - to buy",
          "60. vendre - to sell",
          "61. payer - to pay",
          "62. aider - to help",
          "63. aimer - to love",
          "64. adorer - to adore",
          "65. détester - to hate",
          "66. préférer - to prefer",
          "67. finir - to finish",
          "68. ouvrir - to open",
          "69. fermer - to close",
          "70. casser - to break",
          "71. réparer - to repair",
          "72. laver - to wash",
          "73. nettoyer - to clean",
          "74. cuisiner - to cook",
          "75. naître - to be born",
          "76. mourir - to die",
          "77. rire - to laugh",
          "78. pleurer - to cry",
          "79. crier - to shout",
          "80. chuchoter - to whisper",
          "81. demander - to ask",
          "82. répondre - to answer",
          "83. promettre - to promise",
          "84. oublier - to forget",
          "85. se souvenir - to remember",
          "86. apprendre - to learn",
          "87. enseigner - to teach",
          "88. expliquer - to explain",
          "89. changer - to change",
          "90. grandir - to grow",
          "91. devenir - to become",
          "92. partir - to leave",
          "93. revenir - to come back",
          "94. monter - to go up",
          "95. descendre - to go down",
          "96. voler - to fly/to steal",
          "97. nager - to swim",
          "98. conduire - to drive",
          "99. rendre - to give back",
          "100. attendre - to wait",
        ],
      },
    },
    "Les Noms": {
      "100 Noms les Plus Courants": {
        description: `
Voici une liste des 100 noms les plus courants en français, avec leurs genres (m pour masculin, f pour féminin) et leurs traductions en anglais. Ces noms couvrent des thèmes comme le temps, les lieux, la famille, le corps, la nourriture et plus encore, idéaux pour les débutants.
        `,
        examples: [
          "1. an (m) - Year",
          "2. année (f) - Year",
          "3. semaine (f) - Week",
          "4. mois (m) - Month",
          "5. jour (m) - Day",
          "6. heure (f) - Hour",
          "7. minute (f) - Minute",
          "8. temps (m) - Time",
          "9. monde (m) - World",
          "10. pays (m) - Country",
          "11. endroit (m) - Place",
          "12. région (f) - Region",
          "13. mer (f) - Sea",
          "14. forêt (f) - Forest",
          "15. montagne (f) - Mountain",
          "16. magasin (m) - Shop",
          "17. banque (f) - Bank",
          "18. parc (m) - Park",
          "19. téléphone (m) - Phone",
          "20. portable (m) - Mobile phone",
          "21. ordinateur (m) - Computer",
          "22. tablette (f) - Tablet",
          "23. télé (f) - TV",
          "24. chargeur (m) - Charger",
          "25. internet (m) - Internet",
          "26. site web (m) - Website",
          "27. compte (m) - Account",
          "28. mot de passe (m) - Password",
          "29. fichier (m) - File",
          "30. logiciel (m) - Software",
          "31. maison (f) - House; Home",
          "32. porte (f) - Door",
          "33. fenêtre (f) - Window",
          "34. frigo (m) - Fridge",
          "35. armoire (f) - Closet",
          "36. pièce (f) - Room",
          "37. cuisine (f) - Kitchen",
          "38. salon (m) - Living room",
          "39. chambre (f) - Bedroom",
          "40. toilettes (f) - Toilets",
          "41. salle de bain (f) - Bathroom",
          "42. voiture (f) - Car",
          "43. bus (m) - Bus",
          "44. train (m) - Train",
          "45. avion (m) - Plane",
          "46. taxi (m) - Taxi; Cab",
          "47. vélo (m) - Bicycle",
          "48. ville (f) - City; Town",
          "49. rue (f) - Street",
          "50. avenue (f) - Avenue",
          "51. route (f) - Road",
          "52. mère (f) - Mother",
          "53. père (m) - Father",
          "54. femme (f) - Wife (literally: Woman)",
          "55. mari (m) - Husband",
          "56. frère (m) - Brother",
          "57. soeur (f) - Sister",
          "58. famille (f) - Family",
          "59. copine (f) - Girlfriend",
          "60. copain (m) - Boyfriend",
          "61. fils (m) - Son",
          "62. fille (f) - Daughter (literally: Girl)",
          "63. ami (m) - Friend",
          "64. tête (f) - Head",
          "65. oeil (m) - Eye",
          "66. bouche (f) - Mouth",
          "67. nez (m) - Nose",
          "68. cheveu (m) - Hair",
          "69. bras (m) - Arm",
          "70. main (f) - Hand",
          "71. jambe (f) - Leg",
          "72. pied (m) - Foot",
          "73. couteau (m) - Knife",
          "74. fourchette (f) - Fork",
          "75. cuillère (f) - Spoon",
          "76. assiette (f) - Plate",
          "77. verre (m) - Glass",
          "78. eau (f) - Water",
          "79. vin (m) - Wine",
          "80. fruit (m) - Fruit",
          "81. légume (m) - Vegetable",
          "82. viande (f) - Meat",
          "83. étudiant (m) - Student",
          "84. docteur (m) - Doctor; Physician",
          "85. policier (m) - Police officer",
          "86. professeur (m) - Teacher",
          "87. avocat (m) - Lawyer",
          "88. serveur (m) - Waiter",
          "89. pantalon (m) - Pants",
          "90. pull (m) - Sweater",
          "91. T-shirt (m) - T-shirt",
          "92. chemise (f) - Shirt",
          "93. manteau (m) - Coat",
          "94. chaussette (f) - Sock",
          "95. robe (f) - Dress",
          "96. chaussure (f) - Shoe",
          "97. question (f) - Question",
          "98. réponse (f) - Answer",
          "99. idée (f) - Idea",
          "100. chose (f) - Thing",
        ],
      },
    },
    "Les Adjectifs": {
      "100 Adjectifs les Plus Courants": {
        description: `
Voici une liste des 100 adjectifs les plus courants en français, avec leurs formes masculines et féminines (si applicables) et leurs traductions en anglais. Ces adjectifs aident à décrire des personnes, des objets, des sentiments et plus encore, parfaits pour enrichir votre vocabulaire de base.
        `,
        examples: [
          "1. Bon – Bonne - Good",
          "2. Mauvais – Mauvaise - Bad",
          "3. Génial – Géniale - Awesome",
          "4. Horrible - Horrible",
          "5. Bizarre - Weird, Strange",
          "6. Facile - Easy",
          "7. Difficile - Difficult, Hard",
          "8. Possible - Possible",
          "9. Impossible - Impossible",
          "10. Simple - Simple",
          "11. Compliqué – Compliquée - Complicated",
          "12. Cher – Chère - Expensive",
          "13. Grand – Grande - Large, Big, Tall, Great, Major",
          "14. Gros – Grosse - Big, Fat",
          "15. Petit – Petite - Small, Little",
          "16. Épais – Épaisse - Thick",
          "17. Fin – Fine - Thin",
          "18. Proche - Near",
          "19. Loin - Far",
          "20. Long – Longue - Long",
          "21. Court – Courte - Short",
          "22. Étroit – Étroite - Narrow, Tight",
          "23. Large - Wide, Broad, Extensive, Large",
          "24. Doux – Douce - Soft, Smooth, Gentle",
          "25. Dur – Dure - Solid, Hard, Difficult, Tough",
          "26. Plein – Pleine - Full",
          "27. Vide - Empty",
          "28. Léger – Légère - Light, Minor, Mild, Slight",
          "29. Lourd – Lourde - Heavy, Annoying",
          "30. Rapide - Fast, Quick",
          "31. Lent – Lente - Slow, Sluggish",
          "32. Chaud – Chaude - Hot, Warm",
          "33. Froid – Froide - Cold",
          "34. Sec – Sèche - Dry",
          "35. Humide - Wet, Moist, Humid",
          "36. Fragile - Fragile, Delicate",
          "37. Premier – Première - First",
          "38. Dernier – Dernière - Last, Final, Latest",
          "39. Second – Seconde - Second",
          "40. Deuxième - Second",
          "41. Prochain – Prochaine - Next",
          "42. Précédent – Précédente - Previous",
          "43. Avant-dernier – Avant-dernière - Penultimate, Second to last",
          "44. Même - Same",
          "45. Autre - Other",
          "46. Différent – Différente - Different",
          "47. Seul – Seule - Only, Alone, Lonely",
          "48. Meilleur – Meilleure - Best, Better",
          "49. Pire - Worst",
          "50. Unique - Unique, Only, Single",
          "51. Spécial – Spéciale - Special",
          "52. Particulier – Particulière - Specific, Particular, Private, Special",
          "53. Nouveau / Nouvel – Nouvelle - New",
          "54. Neuf – Neuve - Brand-new",
          "55. Pauvre - Poor",
          "56. Riche - Wealthy, Diverse, Abundant",
          "57. Propre - Clean, Own, Personal",
          "58. Sale - Dirty",
          "59. Dégueulasse - Disgusting, Nasty",
          "60. Cassé – Cassée - Broken",
          "61. Jeune - Young",
          "62. Vieux / Vieil – Vieille - Old",
          "63. Beau / Bel – Belle - Handsome, Beautiful",
          "64. Moche - Ugly",
          "65. Fort – Forte - Strong, High, Important",
          "66. Faible - Weak, Low, Small",
          "67. Mince - Slim, Thin",
          "68. Mignon – Mignonne - Cute, Sweet",
          "69. Gentil – Gentille - Nice, Kind",
          "70. Méchant – Méchante - Mean, Wicked",
          "71. Con – Conne - Dumb, Jerk",
          "72. Drôle (de) - Fun, Funny, Strange",
          "73. Fou – Folle - Crazy, Mad",
          "74. Sympa - Nice",
          "75. Heureux – Heureuse - Happy",
          "76. Triste - Sad",
          "77. Calme - Calm",
          "78. Excité – Excitée - Excited",
          "79. Content – Contente - Glad",
          "80. Malade - Sick, Ill",
          "81. Mort – Morte - Dead",
          "82. Public – Publique - Public",
          "83. Privé – Privée - Private",
          "84. Important – Importante - Important",
          "85. Dangereux – Dangereuse - Dangerous",
          "86. Ennuyeux – Ennuyeuse - Boring, Inconvenient, Annoying",
          "87. Noir – Noire - Black",
          "88. Blanc – Blanche - White",
          "89. Bleu – Bleue - Blue",
          "90. Rouge - Red",
          "91. Vert – Verte - Green",
          "92. Jaune - Yellow",
          "93. Sucré – Sucrée - Sweet",
          "94. Amer – Amère - Bitter",
          "95. Acide - Sour",
          "96. Épicé – Épicée - Spicy",
          "97. Frais – Fraîche - Fresh",
          "98. Chaud - Hot",
          "99. Froid - Cold",
          "100. Parfait – Parfaite - Perfect",
        ],
      },
    },
  };

  const [selectedGroup, setSelectedGroup] = useState(Object.keys(topicGroups)[0]);
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(topicGroups[selectedGroup])[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9fafb" }}>
      <div
        style={{
          width: isSidebarOpen ? "300px" : "0",
          background: "#1f2937",
          color: "white",
          padding: isSidebarOpen ? "1.5rem" : "1.5rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflowY: isSidebarOpen ? "auto" : "hidden",
          boxShadow: isSidebarOpen ? "2px 0 5px rgba(0,0,0,0.1)" : "none",
          transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "width 0.3s ease, transform 0.3s ease, padding 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            borderBottom: "1px solid #374151",
            paddingBottom: "0.5rem",
            display: isSidebarOpen ? "block" : "none",
          }}
        >
          Vocabulaire Français de Base
        </h2>
        {Object.keys(topicGroups).map((group) => (
          <div key={group} style={{ display: isSidebarOpen ? "block" : "none" }}>
            <h3 style={{ fontSize: "1.1rem", margin: "0.75rem 0 0.5rem", color: "#9ca3af" }}>
              {group}
            </h3>
            {Object.keys(topicGroups[group]).map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setSelectedGroup(group);
                  setSelectedTopic(topic);
                  setIsSidebarOpen(false);
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
                  width: "100%",
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

      <div
        style={{
          flex: 1,
          padding: "2.5rem",
          overflowY: "auto",
          maxWidth: "800px",
          margin: "0 auto",
        }}
        onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
      >
        <button
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            background: "#1f2937",
            color: "white",
            border: "none",
            padding: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 1001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <h1 style={{ ...layout.heading, fontSize: "2rem", marginBottom: "1rem", color: "#1f2937" }}>
          {selectedTopic}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            marginBottom: "2rem",
            whiteSpace: "pre-line",
            color: "#4b5563",
          }}
        >
          {topicGroups[selectedGroup][selectedTopic].description}
        </p>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "#374151" }}>Liste</h3>
        <ul
          style={{
            lineHeight: "1.9",
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            color: "#4b5563",
          }}
        >
          {topicGroups[selectedGroup][selectedTopic].examples.map((ex, idx) => {
            const frenchWord = extractFrenchWord(ex);
            return (
              <li key={idx} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                <span>{ex}</span>
                <span
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    userSelect: "none",
                  }}
                  onClick={() => speak(frenchWord)}
                  title="Read aloud"
                >
                                          <Volume2
                          size={18}
                          style={{ cursor: "pointer", color: "#3b82f6" }}
                        />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}