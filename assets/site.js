
async function copyTextFrom(id,button){const el=document.getElementById(id);if(!el)return;const text=el.textContent;const old=button.textContent;try{if(navigator.clipboard && window.isSecureContext){await navigator.clipboard.writeText(text)}else{const field=document.createElement('textarea');field.value=text;field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.focus();field.select();if(!document.execCommand('copy'))throw new Error('copy unavailable');field.remove()}button.textContent='Copied ✓'}catch(e){button.textContent='Select text to copy';el.scrollIntoView({behavior:'smooth'})}setTimeout(()=>button.textContent=old,2500)}document.addEventListener('click',e=>{const button=e.target.closest('[data-copy]');if(button)copyTextFrom(button.dataset.copy,button)});

function openLinkedDetails() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (!(target instanceof HTMLDetailsElement) || target.open) return;
  target.open = true;
  target.scrollIntoView({ block: 'start' });
}

openLinkedDetails();
window.addEventListener('hashchange', openLinkedDetails);
