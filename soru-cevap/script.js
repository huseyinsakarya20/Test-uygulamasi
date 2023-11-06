let dogruCevap = document.querySelectorAll("#dogru");
let puan = 0;
let toplamPuan = 0;
dogruCevap.forEach((dogruCevaplandi, index) => {
    dogruCevaplandi.onclick = () => {
        dogruCevaplandi.classList.toggle('active');
        puan += 20; 
        toplamPuan += 20;
        guncellePuan(); 
    }
});

function guncellePuan() {
    const puanGoster = document.querySelector(".puan");
    puanGoster.textContent = toplamPuan;
}


let yanlisCevapListesi = document.querySelectorAll(".yanlis");
yanlisCevapListesi.forEach((yanlisCevap, index) => {
    yanlisCevap.onclick = () => {
        yanlisCevap.classList.toggle('active');
        puan -= 10;
        toplamPuan -= 10;
        guncellePuan(); 
        setTimeout(() => {
            yanlisCevap.classList.toggle('active');
        }, 700);
    }
});



// card görünüm ayarı
let card6 = document.querySelector(".card6");
let card2 = document.querySelector(".card2");
document.querySelector("#tikla").onclick = () =>{
    card2.classList.toggle('active');
    card6.style.display = "none";    
}
let card3= document.querySelector(".card3");
document.querySelector("#devam").onclick = () =>{
    card3.classList.toggle('active');
    card2.style.display = "none";   
}
let card5= document.querySelector(".card5");
document.querySelector("#ileri").onclick = () =>{
    card6.classList.toggle('active');
    card5.style.display = "none";   
}
let card7= document.querySelector(".card7");
document.querySelector("#next").onclick = () =>{
    card7.classList.toggle('active');
    card3.style.display = "none";   
}
let card8= document.querySelector(".card8");
document.querySelector("#sür").onclick = () =>{
    card8.classList.toggle('active');
    card7.style.display = "none";   
}
let Fins= document.querySelector(".sonuc");
document.querySelector("#go").onclick = () =>{
    Fins.classList.toggle('active');
    card8.style.display = "none";   
}

// süre ayarı
function startCountdown(minutes, displayId) {
    let timer = minutes * 60;
    let minutesDisplay;
    let secondsDisplay;
    const display = document.getElementById(displayId);
  
    const countdownInterval = setInterval(function() {
      minutesDisplay = String(Math.floor(timer / 60)).padStart(2, '0');
      secondsDisplay = String(timer % 60).padStart(2, '0');
      display.textContent = `${minutesDisplay}:${secondsDisplay}`;
      timer--;
  
      if (timer < 0) {
        clearInterval(countdownInterval);
        display.textContent = 'Süre Bitti!';
      }
    }, 1000);
  }
  
  window.addEventListener('load', function() {
    startCountdown(5, 'timer1');
    startCountdown(5, 'timer2');
    startCountdown(5, 'timer3');
    startCountdown(5, 'timer4');
    startCountdown(5, 'timer5');
  });



