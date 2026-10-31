const playlists=[
["☪️","Islam For A/L","https://youtube.com/playlist?list=PLq13nu2KwXVomDaKjTrXzmhks8AZ-dwoh"],
["💻","ICT","https://youtube.com/playlist?list=PLq13nu2KwXVpCreI7J3aa7EKJvXZ6B9_r"],
["📊","Accounting","https://youtube.com/playlist?list=PLq13nu2KwXVrfQ4I-GrdG1ElOnJMOTlSi"],
["🏫","School Introduction","https://youtube.com/playlist?list=PLq13nu2KwXVrn9aqIV7ocJIpRiJhQUMRg"],
["🌍","Geography For A/L","https://youtube.com/playlist?list=PLq13nu2KwXVomMSE8_zUpmhuluoW7FT28"],
["🧬","Bio Technology","https://youtube.com/playlist?list=PLq13nu2KwXVrghv0W6wzp9EPcHdPQZgEh"],
["☪️","Islam For O/L","https://youtube.com/playlist?list=PLq13nu2KwXVpACKxAGNBfPhnK8tZQsTe6"],
["📚","English Language","https://youtube.com/playlist?list=PLq13nu2KwXVoLQqmn9xr0axQHVF09zQ-2"],
["🕌","Ahadiya Islamic Sunday School","https://youtube.com/playlist?list=PLq13nu2KwXVp2OsEq7ETX-fq58KNWakVQ"],
["📖","Arabic Literature","https://youtube.com/playlist?list=PLq13nu2KwXVpH3kcckpNFkMJojf0xC7Kb"],
["🏥","Medical Information","https://youtube.com/playlist?list=PLq13nu2KwXVrkwrf6WjVwP93r1uGtSj5i"],
["🧘","Mindfulness","https://youtube.com/playlist?list=PLq13nu2KwXVoFPKzI0hXvMDDLjJSNxLf4"],
["👨‍👩‍👧","Good Family","https://youtube.com/playlist?list=PLq13nu2KwXVrtu3lSCjnLogzJCsTGKDjA"],
["🎵","Meaningful Songs","https://youtube.com/playlist?list=PLq13nu2KwXVoS9Ad2zw1Zq_DD08_o58rV"],
["🎓","Smart Education","https://youtube.com/playlist?list=PLq13nu2KwXVrEyJcsKXU0s6wNJRNLMVf7"],
["☪️","Islamic Civilization","https://youtube.com/playlist?list=PLq13nu2KwXVr5h9eJuUY72UCvyWfgDDEr"],
["🕌","Islamic Speeches & Kothuba","https://youtube.com/playlist?list=PLq13nu2KwXVoSsiQ1c4R8mXpStGZVBCON"],
["🌿","Nature","https://youtube.com/playlist?list=PLq13nu2KwXVqe_OHXMKaeJx8HIQS-sAYG"],
["✨","Motivation","https://youtube.com/playlist?list=PLq13nu2KwXVrOKt1MmFtnkooKu33axXwe"],
["📖","Story","https://youtube.com/playlist?list=PLQi_XMF6pse5mx8-blrRVMX7IDF79SctH"],
["💻","TECH","https://youtube.com/playlist?list=PLQi_XMF6pse61xQljEbiIgXOEPm2EazDY"],
["✂️","Origami Crafts","https://youtube.com/playlist?list=PLQi_XMF6pse62kTIFO8dAQZvuYoLFFhL5"]];
const grid=document.getElementById('playlistGrid'),search=document.getElementById('playlistSearch');
function draw(q=''){grid.innerHTML='';playlists.filter(p=>p[1].toLowerCase().includes(q.toLowerCase())).forEach(p=>{const card=document.createElement('article');card.className='playlist';const icon=document.createElement('span');icon.className='emoji';icon.textContent=p[0];const title=document.createElement('b');title.textContent=p[1];const link=document.createElement('a');link.href=p[2];link.target='_blank';link.rel='noopener';link.textContent='Open playlist ↗';card.append(icon,title,link);grid.append(card)})}
draw();search.addEventListener('input',()=>draw(search.value.trim()));
const root=document.documentElement,toggle=document.getElementById('themeToggle');let theme=localStorage.getItem('hh-new-theme')||'dark';function setTheme(v){theme=v;root.dataset.theme=v;toggle.textContent=v==='dark'?'☀ Light mode':'☾ Dark mode';localStorage.setItem('hh-new-theme',v)}setTheme(theme);toggle.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
const menu=document.getElementById('menuToggle'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();