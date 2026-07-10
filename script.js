/* ===========================================
   OUR VIRTUAL DIARY ❤️
   script.js
=========================================== */


/* ===========================================
   FADE-IN ANIMATION ON SCROLL
=========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

document.querySelectorAll(".photoCard,.letter,.loveLetter,.promise,.loveQuote,.ending")
.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(70px)";
item.style.transition="all .9s ease";

observer.observe(item);

});


/* ===========================================
   FLOATING HEARTS
=========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","💓","❤️","🤍","💞"][Math.floor(Math.random()*7)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="110vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.opacity=.85;

heart.style.transition="transform linear, opacity linear";

document.body.appendChild(heart);

let duration=6000+Math.random()*4000;

heart.animate([

{

transform:"translateY(0) rotate(0deg)",
opacity:1

},

{

transform:`translateY(-120vh) translateX(${Math.random()*150-75}px) rotate(360deg)`,

opacity:0

}

],{

duration:duration,

iterations:1

});

setTimeout(()=>{

heart.remove();

},duration);

}

setInterval(createHeart,450);



/* ===========================================
   SPARKLES
=========================================== */

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(12+Math.random()*15)+"px";

star.style.pointerEvents="none";

star.style.opacity=".8";

star.style.zIndex="999";

document.body.appendChild(star);

star.animate([

{

opacity:0,
transform:"scale(.3)"

},

{

opacity:1,
transform:"scale(1.3)"

},

{

opacity:0,
transform:"scale(.2)"

}

],{

duration:1800

});

setTimeout(()=>{

star.remove();

},1800);

}

setInterval(sparkle,250);



/* ===========================================
   HERO TITLE FLOAT
=========================================== */

const hero=document.querySelector(".hero h1");

if(hero){

let angle=0;

setInterval(()=>{

angle+=0.02;

hero.style.transform=`translateY(${Math.sin(angle)*6}px)`;

},30);

}



/* ===========================================
   PHOTO PARALLAX
=========================================== */

window.addEventListener("mousemove",(e)=>{

const imgs=document.querySelectorAll(".image img");

imgs.forEach(img=>{

let x=(window.innerWidth/2-e.pageX)/60;

let y=(window.innerHeight/2-e.pageY)/60;

img.style.transform=`translate(${x}px,${y}px) scale(1.02)`;

});

});



/* ===========================================
   PHOTO RESET
=========================================== */

window.addEventListener("mouseleave",()=>{

document.querySelectorAll(".image img").forEach(img=>{

img.style.transform="translate(0,0)";

});

});



/* ===========================================
   TYPEWRITER LETTER
=========================================== */

const letter=document.querySelector(".letterBox p");

if(letter){

const original=letter.innerHTML;

letter.innerHTML="";

let i=0;

function typing(){

if(i<original.length){

letter.innerHTML+=original.charAt(i);

i++;

setTimeout(typing,18);

}

}

setTimeout(typing,800);

}



/* ===========================================
   RANDOM LOVE QUOTES
=========================================== */

const quotes=[

"You are my favorite person ❤️",

"Every heartbeat whispers your name 💕",

"I'll choose you every single time 🌸",

"My heart feels complete with you 💖",

"Forever starts with us ❤️",

"You are my safe place 🤍",

"I miss you more than words can say 🥺"

];

function floatingQuote(){

const q=document.createElement("div");

q.className="floatingQuote";

q.innerText=quotes[Math.floor(Math.random()*quotes.length)];

q.style.position="fixed";

q.style.left=Math.random()*70+10+"vw";

q.style.bottom="-50px";

q.style.fontSize="18px";

q.style.fontWeight="600";

q.style.color="#ff4f96";

q.style.background="rgba(255,255,255,.75)";

q.style.padding="12px 18px";

q.style.borderRadius="30px";

q.style.boxShadow="0 10px 25px rgba(255,105,180,.25)";

q.style.zIndex="999";

q.style.pointerEvents="none";

document.body.appendChild(q);

q.animate([

{

transform:"translateY(0)",
opacity:0

},

{

opacity:1

},

{

transform:"translateY(-500px)",
opacity:0

}

],{

duration:7000

});

setTimeout(()=>{

q.remove();

},7000);

}

setInterval(floatingQuote,12000);



/* ===========================================
   BUTTON CLICK EFFECT
=========================================== */

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.92)";

setTimeout(()=>{

btn.style.transform="";

},180);

});

});



/* ===========================================
   SCROLL PROGRESS BAR
=========================================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="5px";

progress.style.width="0%";

progress.style.background="linear-gradient(to right,#ff4d94,#ff8dbb,#ffd1e6)";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});



/* ===========================================
   CURSOR HEART TRAIL
=========================================== */

window.addEventListener("mousemove",(e)=>{

if(Math.random()>0.7){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="16px";

h.style.zIndex="9999";

document.body.appendChild(h);

h.animate([

{

opacity:1,
transform:"translateY(0) scale(1)"

},

{

opacity:0,
transform:"translateY(-30px) scale(.2)"

}

],{

duration:800

});

setTimeout(()=>{

h.remove();

},800);

}

});



/* ===========================================
   WELCOME MESSAGE
=========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("❤️ Welcome to Our Virtual Diary ❤️\n\nMade with love for Nihalika Sing 🌸");

},700);

});



/* ===========================================
   END
=========================================== */