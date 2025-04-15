/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Data is posted under classes, scroll below the Champion and Champion Catalog classes to see the data

let currentDisplayCount = 0;

/**
 * Champion class 
 * stores relevant information to each champion
 */
class Champion {
  constructor(year, team, logo, players, nation){
    this.year = year
    this.team = team;
    this.logo = logo;
    this.players = players;
    this.nation = nation;
    } 

    renderCard() {
      const templateCard = document.querySelector(".card");
      const card = templateCard.cloneNode(true);
      card.style.display = "block";

  
      const header = card.querySelector("h2");
      header.textContent = `${this.year} - ${this.team}`;
  
      const cardImage = card.querySelector("img");
      cardImage.src = this.logo;
      cardImage.alt = `${this.team} Logo`;

      const playersList = card.querySelector("ul");
      playersList.innerHTML = "";
      this.players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playersList.appendChild(li);
      });
  
      return card;
    }
  }

/**
 * ChampionsCatalog manages a fixed array of Champion objects.
 * All 20 champions are preloaded into the code.
 * It provides methods to pick how many to display, add or remove, and sort by nation
 */
class ChampionsCatalog {
  constructor(champions) {
    this.champions = champions;
  }
  
  sortChronologically() {
    this.champions.sort((a, b) => a.year - b.year);
  }

  addChampion(champion) {
    if (this.champions.length < 20) {
      this.champions.push(champion);
      this.sortChronologically();
    } else {
      alert("Maximum number of champions reached.");
    }
  }

  removeChampion(year) {
    const idx = this.champions.findIndex(champ => champ.year === year);
    if (idx !== -1) {
      this.champions.splice(idx, 1);
      alert(`Champion for year ${year} removed.`);
    } else {
      alert(`No champion found for the year ${year}.`);
    }
  }

  filterByNation(nation) {
    return this.champions.filter(champ => champ.nation.toLowerCase() === nation.toLowerCase());
  }

  getLastChampions(n) {
    return this.champions.slice(-n);
  }
  
  render(containerID, championsArray = this.champions) {
    const container = document.getElementById(containerID);
    container.innerHTML = "";
    championsArray.forEach(champion => {
      const card = champion.renderCard();
      container.appendChild(card);
    });
  }
}

//Pre-loaded data 
const championsArray = [
  new Champion(
    2005,
    "Liverpool",
    "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    ["Steven Gerrard", "Xabi Alonso", "Jamie Carragher"],
    "England"
  ),
  new Champion(
    2006,
    "Barcelona",
    "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    ["Lionel Messi", "Andres Iniesta", "Ronaldinho"],
    "Spain"
  ),
  new Champion(
    2007,
    "AC Milan",
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    ["Filippo Inzaghi", "Kaka", "Paolo Maldini"],
    "Italy"
  ),
  new Champion(
    2008,
    "Manchester United",
    "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    ["Cristiano Ronaldo", "Ryan Giggs", "Wayne Rooney"],
    "England"
  ),
  new Champion(
    2009,
    "Barcelona",
    "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    ["Lionel Messi", "Andres Iniesta", "Xavi Hernandez"],
    "Spain"
  ),
  new Champion(
    2010,
    "Inter Milan",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
    ["Javier Zanetti", "Wesley Sneijder", "Samuel Eto'o"],
    "Italy"
  ),
  new Champion(
    2011,
    "Barcelona",
    "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    ["Lionel Messi", "Andres Iniesta", "Xavi Hernandez"],
    "Spain"
  ),
  new Champion(
    2012,
    "Chelsea",
    "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    ["Frank Lampard", "John Terry", "Didier Drogba"],
    "England"
  ),
  new Champion(
    2013,
    "Bayern Munich",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg",
    ["Philipp Lahm", "Manuel Neuer", "Franck Ribery"],
    "Germany"
  ),
  new Champion(
    2014,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Cristiano Ronaldo", "Sergio Ramos", "Iker Casillas"],
    "Spain"
  ),
  new Champion(
    2015,
    "Barcelona",
    "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    ["Lionel Messi", "Luis Suarez", "Neymar"],
    "Spain"
  ),
  new Champion(
    2016,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Cristiano Ronaldo", "Sergio Ramos", "Iker Casillas"],
    "Spain"
  ),
  new Champion(
    2017,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Cristiano Ronaldo", "Sergio Ramos", "Luka Modric"],
    "Spain"
  ),
  new Champion(
    2018,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Cristiano Ronaldo", "Sergio Ramos", "Luka Modric"],
    "Spain"
  ),
  new Champion(
    2019,
    "Liverpool",
    "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    ["Mohamed Salah", "Virgil Van Dijk", "Trent Alexander-Arnold"],
    "England"
  ),
  new Champion(
    2020,
    "Bayern Munich",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg",
    ["Robert Lewandowski", "Manuel Neuer", "Joshua Kimmich"],
    "Germany"
  ),
  new Champion(
    2021,
    "Chelsea",
    "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    ["N'golo Kante", "Thiago Silva", "Cesar Azpilicueta"],
    "England"
  ),
  new Champion(
    2022,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Vinicius Junior", "Federico Valverde", "Thibaut Courtois"],
    "Spain"
  ),
  new Champion(
    2023,
    "Manchester City",
    "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    ["Kevin De Bruyne", "Erling Haaland", "Ruben Dias"],
    "England"
  ),
  new Champion(
    2024,
    "Real Madrid",
    "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    ["Vinicius Junior", "Federico Valverde", "Thibaut Courtois"],
    "Spain"
  )
];

const catalog = new ChampionsCatalog(championsArray);
catalog.sortChronologically();

function showLast5Champions() {
  currentDisplayCount = 5;
  showCurrentSubset();
}

function showLast10Champions() {
  currentDisplayCount = 10;

  showCurrentSubset();
}

function showAllChampions() {
  currentDisplayCount = catalog.champions.length; 
  showCurrentSubset();
}

document.addEventListener("DOMContentLoaded", () => {
  catalog.render("card-container");
});

function showCurrentSubset() {
  catalog.render("card-container", catalog.champions.slice(0, currentDisplayCount));
}

function addChampionToDisplay() {
  if (currentDisplayCount < catalog.champions.length) {
    currentDisplayCount++;
    showCurrentSubset();
  } else {
    alert("All champions are already displayed.");
  }
}

function filterByNation() {
  const nationInput = document.getElementById("nationInput").value;
  
  if (nationInput && nationInput.trim() !== "") {
    const filteredChampions = catalog.filterByNation(nationInput);
    
    if (filteredChampions.length > 0) {
      catalog.render("card-container", filteredChampions);
    } else {
      alert("No champions found from that nation.");
      catalog.render("card-container", []);
    }
  } else {
    catalog.render("card-container", catalog.champions);
  }
}
window.filterByNation = filterByNation;

function removeChampionFromDisplay() {
  if (currentDisplayCount > 1) {
    currentDisplayCount--;
    showCurrentSubset();
  } else {
    alert("At least one champion must be displayed.");
  }
}
