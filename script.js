
const pokemonContainer = document.getElementById('pokemon-container');
console.log(pokemonContainer);
pokemonContainer.style.visibility = "hidden";

const pokemonCategory = document.getElementById('pokemon-category');
console.log(pokemonCategory);

const stats = document.getElementById('stats');
console.log(stats);


const newStats = document.getElementById('stats');
newStats.style.display = 'flex';
newStats.style.flexDirection = 'column';
newStats.style.justifyContent = 'space-between';
newStats.style.padding = '10px';
newStats.style.margin = '10px';
console.log(newStats);


const abilities = document.getElementById('abilities');
console.log(abilities);


function getPokemonInfo () {
  let pokemonName = document.getElementById('pokemon-input').value;
  console.log(pokemonName);
  if (pokemonName === '') {
    alert('Please enter a Pokemon name');
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  fetch(url)
  .then((response) => {
    return response.json() 
})
.then((data) => {
  console.log(data);
  pokemonCategory.innerText = `${(data.species.name).toUpperCase()}`;
  pokemonCategory.style.fontSize = '30px';
  pokemonCategory.style.letterSpacing = '5px';
  console.log(data.species.name);

  const div = document.querySelector('div');
  const img = document.querySelector('img');

  img.src = data.sprites.front_shiny;
  img.style.width = '200px';
  img.style.height = '200px';
  img.style.margin = '30px 0 0px 140px';
  img.style.borderRadius = '50%';
  img.style.border = '15px solid white';
  



  stats.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = 'Stats';
  heading.style.fontSize = '35px';
  heading.style.textDecoration = 'underline';
  heading.style.color = 'black';
  heading.style.textDecorationColor = 'white';
  heading.style.textDecorationThickness = '2px';
  heading.style.fontSize = 'bold';
heading.style.margin = '0';
heading.style.textAlign = 'center';
  stats.appendChild(heading);

  data.stats.forEach((element) => {
    const statElement = document.createElement('div');
    statElement.innerText = element.stat.name;
    statElement.style.fontSize = '20px';
    statElement.style.textAlign = 'left';
    statElement.style.fontWeight = 'bold';
    const statValue = document.createElement('div');
    statValue.innerText = element.base_stat;
    statValue.style.fontSize = '20px';
    statValue.style.textAlign = 'right';
    statElement.style.fontWeight = 'bold';
    console.log(element.stat.name);
    
    stats.appendChild(statElement);
    stats.appendChild(statValue);


  });

  abilities.innerHTML = '';

  const abilitiesHeading = document.createElement('p');
  abilitiesHeading.innerText = 'Abilities';
  abilitiesHeading.style.fontSize = '35px';
  abilitiesHeading.style.textDecoration = 'underline';
  abilitiesHeading.style.color = 'black';
  abilitiesHeading.style.textDecorationColor = 'white';
  abilitiesHeading.style.textDecorationThickness = '2px';
  abilitiesHeading.style.fontWeight = 'bold';
  abilitiesHeading.style.margin = '0';
  abilitiesHeading.style.textAlign = 'center';

  abilities.appendChild(abilitiesHeading);

  data.abilities.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element.ability.name;
    li.style.fontSize = '20px';
    li.style.textAlign = 'left';
   li.style.fontWeight = 'bold';
   abilities.appendChild(li);
  });

  pokemonContainer.style.visibility = 'visible';
  pokemonContainer.className = '${data.types[0].type.name}';
  console.log(data.types[0].type.name);
});

}

const button = document.getElementById("search-btn");
button.addEventListener("click", getPokemonInfo);