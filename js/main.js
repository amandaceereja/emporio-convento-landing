// Entrada suave da navbar
window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  setTimeout(() => nav.classList.add("show"), 1);
});




// ===== Reservas (WhatsApp) =====
(function(){
  const form = document.getElementById('bookingForm');
  const PHONE = window.PHONE;

  function pad2(n){ return String(n).padStart(2,'0'); }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const nome = (fd.get('nome')||'').trim();
    const tel  = (fd.get('telefone')||'').trim();
    const data = fd.get('data');
    const hora = fd.get('hora');
    const pessoas = fd.get('pessoas');
    const obs   = (fd.get('obs')||'').trim();

    if(!nome || !tel || !data || !hora || !pessoas){
      alert('Por favor, preencha Nome, Telefone, Data, Hora e Pessoas.');
      return;
    }

    // Data no formato BR
    const d = new Date(data + 'T00:00:00');
    const dataBR = `${pad2(d.getDate())}/${pad2(d.getMonth()+1)}/${d.getFullYear()}`;

    const msg = `
*Reserva – Empório Convento*
• Nome: ${nome}
• Telefone: ${tel}
• Data: ${dataBR}
• Hora: ${hora}
• Pessoas: ${pessoas}
${obs ? `• Observações: ${obs}` : ''}

Obrigado!`.trim();

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  });
})();

// Número global (si no lo definiste antes)
window.PHONE = window.PHONE || '55XXXXXXXXXXX'; // sin +, espacios ni guiones

// FAB WhatsApp: setear enlace y revelar
(function(){
  const btn = document.getElementById('wa-float');
  if(!btn) return;

  const msg = 'Olá! Quero falar com o Empório Convento.';
  const href = `https://wa.me/${window.PHONE}?text=${encodeURIComponent(msg)}`;

  btn.setAttribute('href', href);
  requestAnimationFrame(()=> btn.classList.add('is-in'));

  if(!/^\d{11,15}$/.test(window.PHONE)){
    console.warn('[WA FAB] PHONE inválido. Ex: 5532998765432');
  }
})();




// Videos del feed IG
(function () {
  const items = document.querySelectorAll('.insta-item.is-video');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const fig = entry.target;
      const vid = fig.querySelector('video');
      if (!vid) return;

      if (entry.isIntersecting) {
        vid.play().catch(()=>{});
        fig.classList.add('playing'); fig.classList.remove('paused');
      } else {
        vid.pause();
        fig.classList.add('paused'); fig.classList.remove('playing');
      }
    });
  }, { threshold: 0.5 });

  items.forEach(fig => {
    const vid = fig.querySelector('video');
    const btn = fig.querySelector('.insta-play');

    fig.classList.add('paused');

    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      if (vid.paused) {
        vid.play().then(()=>{
          fig.classList.add('playing'); fig.classList.remove('paused');
        }).catch(()=>{});
      } else {
        vid.pause();
        fig.classList.add('paused'); fig.classList.remove('playing');
      }
    });

    // (Opcional) reproducir al hover en desktop
    fig.addEventListener('mouseenter', ()=> { if (matchMedia('(hover:hover)').matches) vid.play().catch(()=>{}); });
    fig.addEventListener('mouseleave', ()=> { if (matchMedia('(hover:hover)').matches) vid.pause(); });

    io.observe(fig);
  });
})();

// Tabs minimalistas: activar pane + subrayado fluido
(function(){
  const bar = document.querySelector('.m-tabs');
  if(!bar) return;
  const ink = bar.querySelector('.m-ink');
  const tabs = [...bar.querySelectorAll('.m-tab')];

  function moveInk(btn){
    const r = btn.getBoundingClientRect();
    const rb = bar.getBoundingClientRect();
    ink.style.left = (r.left - rb.left) + 'px';
    ink.style.width = r.width + 'px';
  }
  function activate(btn){
    tabs.forEach(t=>{
      const on = t===btn;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true':'false');
    });
    const id = btn.getAttribute('aria-controls');
    document.querySelectorAll('.m-pane').forEach(p=>p.classList.toggle('is-active', p.id===id));
    moveInk(btn);
  }
  bar.addEventListener('click', e=>{
    const btn = e.target.closest('.m-tab'); if(!btn) return; activate(btn);
  });
  tabs.forEach((t,i)=>{
    t.addEventListener('keydown', e=>{
      if(e.key!=='ArrowRight' && e.key!=='ArrowLeft') return;
      e.preventDefault();
      const dir = e.key==='ArrowRight'?1:-1;
      const next = tabs[(i+dir+tabs.length)%tabs.length];
      next.focus(); activate(next);
    });
  });

  // init
  moveInk(bar.querySelector('.m-tab.is-active') || tabs[0]);
})();



// ===== Contacto: revelar tarjeta "desde el footer" al entrar en vista =====
(function () {
  const card = document.querySelector('.contact-info');
  if (!card) return;

  // Si el usuario prefiere menos movimiento: mostrar sin animación
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    card.classList.add('is-inview');
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    const e = entries[0];
    if (e.isIntersecting) {
      card.classList.add('is-inview'); 
      obs.disconnect();                
    }
  }, { threshold: 0.20 }); // cuando ~20% sea visible

  io.observe(card);
})();




