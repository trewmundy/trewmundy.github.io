const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';
let jokeString = '';

const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote() {
    jokeString = '';
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        
        displayQuote(json['setup']);
        answer = json['punchline'];
        jokeString = json['setup'] + answer;
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    questionTxt.textContent = question;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

function spinner() {
    document.getElementsByClassName("loader").style.display = "block";
    }
   

getQuote();

const copyBtn = document.getElementById('copy-text').addEventListener('click', copyJoke);

function copyJoke() {     

    navigator.clipboard.writeText(jokeString)
    .then(function () {
        alert("Copied the text: " + jokeString);
    })
    .catch(function (err) {
        console.error('Unable to copy text', err);
    });
  }