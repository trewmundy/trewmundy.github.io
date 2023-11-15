displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    'images/pic6.jpg', 
    'images/pic7.jpg', 
    'images/pic8.jpg', 
    'images/pic9.jpg', 
    'images/pic10.jpg'
  ]

/* Declaring the alternative text for each image file */
const altText = {
    'images/pic6.jpg': 'close-up of the human eye',
    'images/pic7.jpg': 'something',
    'images/pic8.jpg': 'flowers',
    'images/pic9.jpg': 'egyptian painting',
    'images/pic10.jpg': 'butterfly',
   }
/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",() => {
    
        displayedImage.setAttribute('src',image );
        displayedImage.setAttribute('alt',altText[image] );
    })
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() => {
    const btnClass = btn.getAttribute('class')
    if(btnClass==="dark"){
        btn.setAttribute('class','light');
        btn.textContent='Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

    }



else{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor='rgba(0, 0, 0, 0)';
}

});