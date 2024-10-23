var timer = 60;

function getNewHit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rn;
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
        }
        
      },1000)
}
runTimer();
makeBubble();
getNewHit();