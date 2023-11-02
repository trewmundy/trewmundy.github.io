
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//randon Values
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// valiables 
 let storyText= "It was 94 Fahrenheit outside, so :insertx: decided to take their :insertu: for a ride. When they arrived :inserty:, they stumbled upon their old buddy Gandalf the Gray, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was :insertk:."

 const insertX= ['Bob the Builder',
'Guy Fieri',
'Jesus']

const insertY= ['in Switzerland',
'in the depths of hell',
'at my uncle Roberts house ']

const insertZ=
["broke out into inperpretive dance",
"started trying to catch butterflies",
"rode off into the sunset and never looked back"]

const insertU= ['Dragon, Greg, the Destroyer of Worlds,',
'USS Enterprise',
'2005 Toyota Tacoma']

const insertK= ['Taco Tuesday',
'National Ice Cream Day',
'Armageddon']

randomize.addEventListener('click', result);


function result() {



    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let uItem = randomValueFromArray(insertU);
    let kItem = randomValueFromArray(insertK);


    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertu:', uItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertk:', kItem);





  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);


  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' Stones';
    let temperature = Math.round((94-32)*(5/9))+ ' Centigrades';
    newStory = newStory.replace('94 Fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
    


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}