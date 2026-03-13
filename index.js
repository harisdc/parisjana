const PASSWORD = "sundar";
function playMusic(){
document.getElementById("music").play();
}
let heartInterval;
function showLove(){
document.getElementById("message").innerHTML =
"❤️I Love You So Much💕";

startLoveNote();

if(heartInterval) return;
heartInterval=setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"%";
document.body.appendChild(h);
setTimeout(()=>h.remove(),8000);
},300);
}
const loveMessage =
"Happy Birthday, janani. Every day with you feels like a beautiful dream I never want to wake up from. You are the reason behind my smiles, my strength on hard days, and the happiness in my heart. I’m so lucky to have you in my life. I hope this birthday brings you as much love and joy as you give me every single day. I love you endlessly.";

let i=0, typingStarted=false;
const speed=50;
const textEl=document.getElementById("loveText");

function startLoveNote(){
if(typingStarted) return;
typingStarted=true;
typeWriter();
}

function typeWriter(){
if(i < loveMessage.length){
textEl.innerHTML = loveMessage.substring(0,i+1)+"<span class='cursor'></span>";
i++;
setTimeout(typeWriter,speed);
}else{
textEl.innerHTML = loveMessage;
}
}
function openPassword(){
document.getElementById("passwordBox").style.display="flex";
}

function checkPassword(){
if(document.getElementById("password").value===PASSWORD){
window.location.href="open.html";
}else{
alert("ithu kuda theriyalaya chii💔");
}
}