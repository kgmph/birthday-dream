const target = new Date('2026-10-03T00:00:00+02:00').getTime();
const pad = n => String(n).padStart(2,'0');
function countdown(){const remaining=Math.max(0,target-Date.now());const secs=Math.floor(remaining/1000);for(const [id,n] of Object.entries({days:Math.floor(secs/86400),hours:Math.floor(secs%86400/3600),minutes:Math.floor(secs%3600/60),seconds:secs%60})){document.getElementById(id).textContent=pad(n)}if(!remaining)document.getElementById('countdown-note').textContent="IT'S MY BIRTHDAY! HERE'S TO LIFE ♡"}
countdown();setInterval(countdown,1000);
const gift=document.getElementById('unwrap'),message=document.getElementById('gift-message');gift.addEventListener('click',()=>{message.hidden=!message.hidden;gift.textContent=message.hidden?'UNWRAP A LITTLE MESSAGE ✧':'WRAP IT UP AGAIN ♡'});
const audio=document.getElementById('audio');
const music=document.getElementById('music');
const heroMusic=document.getElementById('hero-music');
function updateMusicUI(){
  const playing=!audio.paused;
  music.setAttribute('aria-pressed',String(playing));
  music.setAttribute('aria-label',playing?'Pause birthday soundtrack':'Play birthday soundtrack');
  music.querySelector('span').textContent=playing?'PAUSE MUSIC':'PLAY MUSIC';
  heroMusic.setAttribute('aria-pressed',String(playing));
  heroMusic.innerHTML=playing?'♫ &nbsp; PAUSE THE SOUNDTRACK <span>Ⅱ</span>':'♫ &nbsp; PLAY THE BIRTHDAY SOUNDTRACK <span>▶</span>';
}
async function toggleMusic(){
  if(!audio.paused){audio.pause();return;}
  try{await audio.play();}catch(e){console.error('Unable to play soundtrack:',e);music.querySelector('span').textContent='MUSIC UNAVAILABLE';}
}
music.addEventListener('click',toggleMusic);
heroMusic.addEventListener('click',toggleMusic);
audio.addEventListener('play',updateMusicUI);
audio.addEventListener('pause',updateMusicUI);
audio.addEventListener('ended',updateMusicUI);
updateMusicUI();
