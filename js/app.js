
const definition = document.querySelector('.definition');
const btnInput = document.querySelector('.get-def');
const wordInput = document.querySelector('.my-word');
console.log(wordInput.value)


const myWord = () => {
    //  DEFINITIONS
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
            document.getElementById('word').innerHTML = `<h2 class="text-success">${data.word}</h2>`
            document.getElementById('def-found').innerHTML = `<h5 class="text-primary"> Definitions (${data.definitions.length}) </h5> `
            data.definitions.forEach(def => {
                dataOutput += `
                <div class='card card-body mb-3'>
                <p class="text-success">${def.partOfSpeech}</p>
                <p>${def.definition}</p>                
                </div>
                `;
            })
            document.getElementById('definition').innerHTML = dataOutput;
        })
        .catch(error => console.log(error));

    // PRONUNCIATIONS
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordInput.value}/pronunciation`, {
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
            console.log(data)
            document.getElementById('pronunciation').innerHTML = `<span class='text-primary'>pronunciation:</span> <span class='text-success'>${data.pronunciation.all}</span>`;
        })
        .catch(error => console.log(error));


    fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordInput.value}/synonyms`, {
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
            console.log(data)
            let synonym = ''
            data.synonyms.forEach(syn => {
                synonym += `                             
                    <li class="text-success list-group-item">${syn}</li>             
                    `;
            })
            document.getElementById('synonym').innerHTML = `
            <h5 class="text-primary"> Synonyms </h5>
            ${synonym}`;
        })
        .catch(error => console.log(error));

    // EXAMPLE USAGE
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordInput.value}/examples`, {
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
            console.log(data)
            let example = ''
            data.examples.forEach(ex => {
                example += `                             
                        <li class="text-success list-group-item">${ex}</li>             
                        `;
            })
            document.getElementById('examples').innerHTML = `
                <h5 class="text-primary"> Examples Usage </h5>
                ${example}`;
        })
        .catch(error => console.log(error));
}


btnInput.addEventListener('click', () => myWord());