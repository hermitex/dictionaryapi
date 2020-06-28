
const definition = document.querySelector('.definition');
const btnInput = document.querySelector('.get-def');
const wordInput = document.querySelector('.my-word');


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
            if (data.word === undefined) {
                console.log(wordInput.value)
                // errorMessage(data.word)
                document.getElementById('definition').innerHTML = `
                <div class = 'card text-card p-1 text-center'>
                <h5 class="text-primary ">We've never heard of <span class='text-warning'>${wordInput.value}</span> before 😪. Check the spelling and try again 😊</h5>
                </div>`
            }

            else {
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

            }


        })
        .catch(error => console.alert(error));

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

            let synonym = ''
            if (data.synonyms.length !== 0) {
                data.synonyms.forEach(syn => {
                    synonym += `                             
                        <li class="text-success list-group-item">${syn}</li>             
                        `;
                })
                document.getElementById('synonym').innerHTML = `
                <h5 class="text-primary"> Synonyms (${data.synonyms.length}) </h5>
                ${synonym}`;
            } else {
                document.getElementById('synonym').innerHTML = `
                <h5 class="text-primary"> Synonyms (${data.synonyms.length})</h5>
                <p class="text-warning"> No synonyms found </p>`
            }

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
            let example = ''
            if (data.examples.length !== 0) {
                data.examples.forEach(ex => {
                    example += `                             
                <li class="text-success list-group-item">${ex}</li>             
                `;
                })

                document.getElementById('examples').innerHTML = `
                <h5 class="text-primary"> Examples Usage (${data.examples.length}) </h5>
                ${example}`;
            } else {
                document.getElementById('examples').innerHTML = `
                <h5 class="text-primary"> Examples Usage (${data.examples.length})</h5>
                <p class="text-warning"> No examples found </p>`
            }
        })
        .catch(error => console.log(error));
    // wordInput.value = '';
}


btnInput.addEventListener('click', () => myWord());