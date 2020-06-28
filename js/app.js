
const definition = document.querySelector('.definition');
const btnInput = document.querySelector('.get-def');
const wordInput = document.querySelector('.my-word');
console.log(wordInput.value)


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
        .then(data => {
            let dataOutput = ''
            data.definitions.forEach(def => {
                dataOutput += `
                <div class='card card-body mb-3'>
                <h3>${def.definition}</h3>
                <p>${def.partOfSpeech}</p>
                </div>
                `;
            })
            document.getElementById('definition').innerHTML = dataOutput;
        })
        .catch(error => console.error(error));
};




btnInput.addEventListener('click', () => myWord());