var timer = 30;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score +=10;
    document.querySelector('#scoreVal').textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble(){
    var clutter= "";
for(var i=1; i<=64; i++){
    var rn= Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#panel-bottom")
.innerHTML = clutter;
}

function runTimer(){
      var clrtimer = setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(clrtimer);
            document.querySelector('#panel-bottom').innerHTML = `<h1>Game Over</h1>`
        }
        
      },1000)
}

document.querySelector('#panel-bottom')
.addEventListener('click',function(details){
   var clickednumber = Number(details.target.textContent);
   if(clickednumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
})
runTimer();
makeBubble();
getNewHit();
