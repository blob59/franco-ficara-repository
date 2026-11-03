/* Franco QR Studio — foto locale (solo anteprima e miniatura).
   Per aprire una fotografia da un altro dispositivo serve il relativo URL pubblico. */
(() => {
"use strict";
let url=null;
const get=id=>document.getElementById(id);
const css=`
#ff-local-photo{margin:0 0 18px;padding:17px;border:1px solid #acc4d7;border-radius:15px;background:#edf5fb;color:#203c57;font:13px/1.55 system-ui,sans-serif}
#ff-local-photo p{margin:7px 0 13px;color:#3f5870}
#ff-local-photo strong{font-weight:750}
#ff-local-photo input{display:block;max-width:100%;margin:7px 0 11px;font:12px system-ui}
#ff-local-photo .ff-photo-preview{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:11px 0;padding:11px;border-radius:11px;background:white}
#ff-local-photo .ff-photo-preview[hidden]{display:none!important}
#ff-local-photo img{max-width:160px;max-height:165px;object-fit:contain;border-radius:8px}
#ff-local-photo button{border:1px solid #27617b;background:#24527e;color:#fff;border-radius:9px;padding:10px 12px;cursor:pointer;font-weight:700}
#ff-local-photo button:disabled{opacity:.45;cursor:not-allowed}
#ff-local-photo .ff-photo-notice{border-left:4px solid #c8844f;background:#fff6e8;padding:10px;color:#534027}
#ff-local-photo details{margin-top:12px}#ff-local-photo summary{font-weight:750;cursor:pointer}#ff-local-photo a{color:#175caa;text-decoration:underline}
#ff-local-photo ol{margin:10px 0;padding-left:22px}
`;
function show(){
 const field=get("photoUrl");if(!field||get("ff-local-photo"))return;
 const card=document.createElement("section");card.id="ff-local-photo";
 card.innerHTML='<strong>📷 Scegli una foto dal computer</strong>'+
 '<p>Puoi vedere subito una fotografia locale e aggiungerla <strong>al centro del disegno del QR</strong>, senza inviare file al nostro server.</p>'+
 '<label for="ff-local-file"><strong>Foto dal computer (JPG, PNG, WebP)</strong></label>'+
 '<input type="file" id="ff-local-file" accept="image/jpeg,image/png,image/webp" aria-describedby="ff-local-info">'+
 '<div id="ff-local-preview" class="ff-photo-preview" hidden><img id="ff-local-image" alt="Anteprima della fotografia scelta"><span id="ff-local-name"></span><button id="ff-local-logo" type="button">✦ Metti la foto al centro del QR</button></div>'+
 '<p id="ff-local-info" class="ff-photo-notice"><strong>Attenzione:</strong> per far aprire la fotografia intera quando qualcuno scansiona il QR, devi prima pubblicarla e incollare il suo link qui sotto. Il file locale, da solo, non può essere raggiunto dal telefono di un’altra persona.</p>'+
 '<details><summary>Come ottenere un link alla mia fotografia?</summary><ol>'+
 '<li>Apri <a href="https://drive.google.com/drive/u/0/my-drive" target="_blank" rel="noopener noreferrer">Google Drive</a> oppure il tuo spazio web.</li>'+
 '<li>Carica la fotografia che hai sul computer.</li>'+
 '<li>Apri <strong>Condividi</strong> e imposta <strong>Chiunque abbia il link</strong> solo se vuoi che la fotografia sia accessibile tramite il QR.</li>'+
 '<li>Copia il collegamento e incollalo nel campo «Link pubblico alla fotografia».</li>'+
 '<li>Genera il QR e provalo con un altro telefono.</li>'+
 '</ol><p><strong>Privacy:</strong> chi conosce il link potrà accedere alla foto. Evita immagini riservate.</p></details>';
 field.closest(".field").before(card);
 const fileInput=get("ff-local-file"),preview=get("ff-local-preview"),label=get("ff-local-name"),notice=get("ff-local-info"),button=get("ff-local-logo");
 fileInput.addEventListener("change",()=>{
  const f=fileInput.files&&fileInput.files[0];
  if(url){URL.revokeObjectURL(url);url=null;}
  preview.hidden=true;if(!f)return;
  if(!["image/jpeg","image/png","image/webp"].includes(f.type)){fileInput.value="";notice.textContent="Formato non supportato: scegli JPG, PNG o WebP.";return;}
  url=URL.createObjectURL(f);get("ff-local-image").src=url;
  label.textContent=f.name+" ("+(f.size/1048576).toFixed(1)+" MB)";
  button.disabled=f.size>3*1048576;
  preview.hidden=false;
  notice.textContent=f.size>3*1048576
   ?"Foto visualizzata. Per inserirla nel QR come miniatura serve una foto inferiore a 3 MB. Per aprirla da telefono serve comunque un link pubblico."
   :"Foto visualizzata. Puoi inserirla al centro del QR; per far aprire l'immagine intera dalla scansione serve comunque un link pubblico.";
 });
 button.addEventListener("click",()=>{
  const f=fileInput.files&&fileInput.files[0],logo=get("logoInput");
  if(!f||!logo||f.size>3*1048576)return;
  try{const dt=new DataTransfer();dt.items.add(f);logo.files=dt.files;logo.dispatchEvent(new Event("change",{bubbles:true}));
   notice.textContent="Foto aggiunta come miniatura decorativa. Ora incolla il link pubblico della foto nel campo qui sotto e genera il QR. La scansione aprirà il link, NON la miniatura.";
  }catch{notice.textContent="Seleziona la stessa foto in «Personalizza lo stile» → «Logo decorativo al centro». Il browser non consente il trasferimento automatico.";}
 });
}
document.addEventListener("DOMContentLoaded",()=>{
 const st=document.createElement("style");st.textContent=css;document.head.append(st);
 const menu=get("typeMenu");
 menu?.addEventListener("click",e=>{if(e.target.closest('[data-type="photo"]'))queueMicrotask(show)});
 get("resetBtn")?.addEventListener("click",()=>queueMicrotask(show));
 show();
});
})();