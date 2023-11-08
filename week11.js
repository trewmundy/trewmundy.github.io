console.log("test");

const x = 2;
const y = 2;
if (x === y){
    console.log("Sucsess")


}
else{
    console.log("Fail")
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

document.addEventListener("DOMContentLoaded",() =>{
   canvas.width = document.documentElement.clientHeight;
   canvas.height= document.documentElement.clientHeight; 
})

function random(number){
return Math.floor(Math.random() * number);

}


function draw (){
//console.log("test");
ctx.clearRect(0,0,canvas.width,canvas.height);
for(let i = 0; i<1000;i++){
    ctx.beginPath();
    let red = random(255);
    let blue = random(255);
    let green = random(255);
    let color = "rgba("
    ctx.fillStyle = "rgba(7, 100, 1, 0.1)";
    ctx.arc(
        random(canvas.width),
        random(canvas.height),
        random(50),0,2*Math.PI);
    ctx.fill();
}


}


btn.addEventListener("click", draw);
