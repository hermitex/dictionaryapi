
const definition = document.querySelector('.definition');
const btnInput = document.querySelector('.get-def');
const wordInput = document.querySelector('.my-word');
console.log(wordInput.value)

// const getInput = () => input.value;
const composeDefinition = (info) => {
    // let searchWord = info.word;
    let definitionsObtained = info.definitions;
    // let numberOfDefinitions = info.definitions.length;
    definitionsObtained.forEach(def => {
        definition.innerHTML = `<p>${def.definition}</p>`
        console.log(definition.innerHTML)
    });

};
{/* <h2 class="text-primary">${searchWord}</h2> \n ${numberOfDefinitions} definitions \n      \n def:  */ }

const myWord = () => {
    console.log(wordInput.value)
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordInput.value}/definitions`, {
        // METHOD
        method: 'GET',
        // HEADERS
        headers: {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "ab180751a9msh039c104edc4e1a7p1220fcjsn86aa8d749af3",
            "useQueryString": true
        }
    })
        .then(response => response.json())
        .then(data => composeDefinition(data))
        .catch(error => console.error(error));
};




btnInput.addEventListener('click', () => myWord());