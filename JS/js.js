let num = 0;
let counter = 0;
    function addButton() {
        if (num < 9999999999) {
        num += counter;
        counter = 0;}
        
       

    }
    function updatePhone(){
        const phoneElement = document.getElementById('phoneNumber');
        const addingNumber =addingNewNumber(num);
        phoneElement.textContent = addingNumber;

    }

    function addingNewNumber(Number){
        const numberString = Number.toString().padStart(10, '0');
        return numberString.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    
    }



    function moveButton() {
        const button = document.querySelector('button');
        const buttonLeft = Math.random()*window.innerWidth;
        const buttonTop = Math.random()*window.innerHeight;

        button.style.left = buttonLeft +'px';
        button.style.top = buttonTop +'px';


      }

      function loop(){
        counter += 1;
        updatePhone();
        requestAnimationFrame(loop);
      }
      loop();


      