(()=>{"use strict";
const $=id=>document.getElementById(id);
const data=Array.isArray(window.FRANCO_CATALOGO)?window.FRANCO_CATALOGO:[];
const filters=["Tutti",...new Set(data.map(p=>p.categoria))];
let active="Tutti",search="";
const escape=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
function allowedLink(url){try{const u=new URL(url);return u.protocol==="https:"?u.href:null}catch{return null}}
function render(){
const items=data.filter(p=>(active==="Tutti"||p.categoria===active)&&[p.nome,p.descrizione,p.ambiente,p.categoria].join(" ").toLocaleLowerCase("it").includes(search));
const grid=$("software-grid");grid.replaceChildren();
for(const p of items){
 const card=document.createElement("article");card.className="program-card theme-"+p.tema;
 const top=document.createElement("div");top.className="card-top";
 const symbol=document.createElement("span");symbol.className="program-icon";symbol.textContent=p.icona;
 const state=document.createElement("span");state.className="program-state";
 const dot=document.createElement("span");dot.className="tiny-dot";state.append(dot,document.createTextNode(p.stato));top.append(symbol,state);
 const meta=document.createElement("div");meta.className="program-meta";meta.textContent=p.categoria+" · "+p.ambiente;
 const title=document.createElement("h3");title.textContent=p.nome;
 const desc=document.createElement("p");desc.textContent=p.descrizione;
 const bottom=document.createElement("div");bottom.className="program-bottom";
 const vers=document.createElement("span");vers.className="version";vers.textContent=p.versione;
 const actions=document.createElement("div");actions.className="program-actions";
 const zip=allowedLink(p.download),online=allowedLink(p.app_url),ready=Boolean(zip||online)&&(p.stato==="Disponibile"||p.stato==="Prova online"||(p.tipo==="portale"&&p.stato==="Portale esistente"));
 if(ready){
  state.classList.add("available");
  if(online){const a=document.createElement("a");a.className="download";a.href=online;a.target="_blank";a.rel="noopener noreferrer";a.textContent=p.app_label||"Apri online ↗";actions.append(a);}
  if(zip){const a=document.createElement("a");a.className="download secondary";a.href=zip;a.textContent="Scarica ZIP ↓";if(p.download_filename)a.download=p.download_filename;actions.append(a);}
 }else if(allowedLink(p.info_url)){const a=document.createElement("a");a.className="download";a.href=allowedLink(p.info_url);a.target="_blank";a.rel="noopener noreferrer";a.textContent="Scheda del programma ↗";actions.append(a);
 }else{const s=document.createElement("span");s.className="download disabled";s.textContent="Download in preparazione ⌛";s.setAttribute("aria-label","Download non ancora disponibile");actions.append(s);}
 bottom.append(vers,actions);card.append(top,meta,title,desc,bottom);grid.append(card);
}
$("empty-results").hidden=items.length!==0;
for(const b of $("filters").querySelectorAll("button"))b.setAttribute("aria-pressed",String(b.dataset.filter===active));
}
for(const f of filters){const b=document.createElement("button");b.type="button";b.textContent=f;b.dataset.filter=f;b.setAttribute("aria-pressed",String(f===active));b.addEventListener("click",()=>{active=f;render()});$("filters").append(b)}
$("search-input").addEventListener("input",e=>{search=e.target.value.trim().toLocaleLowerCase("it");render()});
$("software-count").textContent=data.length;$("year").textContent=new Date().getFullYear();render();
})();