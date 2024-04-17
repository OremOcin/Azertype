import React, { useState } from "react";
import "../css/main.css";

const Main = () => {
  const [userEntry, setUserEntry] = useState("");
  const [scoreCount, setScoreCount] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  let wordList = [
    "Bonjour",
    "Mérite",
    "Cri",
    "Désespoir",
    "Soucis",
    "Corriger",
    "Araignée",
    "Chaton",
    "Bibliothèque",
    "Cascade",
    "Labyrinthe",
    "Radiateur",
    "Papillon",
    "Croissant",
    "Péripétie",
    "Chaussette",
    "Astronaute",
    "Harmonica",
    "Tempête",
    "Parapluie",
    "Marmelade",
    "Confortable",
    "Imagination",
    "Symphonie",
    "Liberté",
    "Abondance",
    "Exquis",
    "Vibrant",
    "Merveilleux",
    "Paradis",
    "Insouciance",
    "Douceur",
    "Fraternité",
    "Harmonieusement",
    "Rayonnement",
    "Essence",
    "Générosité",
    "Mélodie",
    "Antique",
    "Folie",
    "Hôpital",
    "Corbillard",
    "Sculpture",
    "Privilège",
    "Chimère",
    "Luminosité",
    "Quadrillage",
    "Infini",
    "Juxtaposition",
    "Phénomène",
    "Pénombre",
    "Réticence",
    "Billard",
    "Tangible",
    "Plénitude",
    "Abstrait",
    "Calomnie",
    "Coïncidence",
    "Intrépide",
    "Vibrance",
    "Précision",
    "Métaphore",
    "Stalactite",
    "Divagation",
    "Consonance",
    "Ineffable",
    "Excentricité",
    "Indomptable",
    "Déambulation",
    "Irréversible",
    "Obélisque",
    "Sérénité",
    "Extravagance",
    "Quotidien",
    "Perspicacité",
    "Hétérogène",
    "Diaphane",
    "Subterfuge",
    "Magnanime",
    "Anticonstitutionnellement",
    "Fin",
    "Non mais c'est fini la",
    "Mais arrête y a plus rien",
    "Mais quel relou",
    "Bon bah bonne journée",
    "Ah tu m'énerves !",
    "Le jeu est fini l'ami",
    "Insupportable...",
    "Bon bah si t'en veux, tiens",
    "Sesquipedalophobie",
    "Macrolexiphobie",
    "Polyphobie",
    "Trigonoaversion",
    "Hexasyllabophobie",
    "Octosyllabophobie",
  ];

  const handleValidateClick = () => {
    validateUserEntry();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      validateUserEntry();
    }
  };

  const validateUserEntry = () => {
    if (userEntry === wordList[currentWordIndex]) {
      setScoreCount(scoreCount + 1);
      setCurrentWordIndex(currentWordIndex + 1);
      setUserEntry("");
      animatePointsText();
      if (currentWordIndex === 20) {
        setCurrentLevelIndex(currentLevelIndex + 1);
        animateLevelsText();
      }
      if (currentWordIndex > 93) {
        let winGameContainer = document.getElementById("WinGameContainer");
        winGameContainer.style.display = "flex";
      }
    }
  };

  const animatePointsText = () => {
    if (currentWordIndex >= 0) {
      let pointsText = document.getElementById("pointsText");
      pointsText.style.opacity = 1;
      console.log("score up");
      setTimeout(() => {
        pointsText.style.opacity = 0;
      }, 300);
    }
  };

  const animateLevelsText = () => {
    if (currentLevelIndex >= 0) {
      let levelsText = document.getElementById("levelsText");
      levelsText.style.opacity = 1;
      console.log("level up");
      setTimeout(() => {
        levelsText.style.opacity = 0;
      }, 300);
    }
  };

  return (
    <div id="mainBigFlexContainer">
      <div id="mainFlexContainer">
        <div id="mainWordContainer">
          <p id="mainWordText">{wordList[currentWordIndex]}</p>
        </div>
        <div id="mainProgressComponents">
          <input
            type="text"
            id="mainProgressContainer"
            value={userEntry}
            onChange={(e) => setUserEntry(e.target.value)}
            onKeyPress={handleKeyPress}
          ></input>
          <button id="mainValidateButton" onClick={handleValidateClick}>
            Valider
          </button>
        </div>
        <div id="mainScoreCount">
          <p id="mainScoreText">
            Votre score : {scoreCount}/80 Niveau : {currentLevelIndex}/4
          </p>
        </div>
        <button id="SendScoreButton">Partager</button>
      </div>

      <p id="pointsText">+1</p>
      <p id="levelsText">+1</p>
      <div id="WinGameContainer">
        <p id="winGameText">Vous avez battu notre donneur de mots !</p>
        <p id="winGameText">Félicitations !</p>
      </div>
    </div>
  );
};

export default Main;
