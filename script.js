const modais = [
  { abre: "abreLP", fecha: "fechaLP", modal: "LandingPage" },
  { abre: "abreList", fecha: "fechaList", modal: "ListUp" },
  { abre: "abreLaros", fecha: "fechaLaros", modal: "LarosSuplementos" },
];

modais.forEach(({ abre, fecha, modal }) => {
  const btnAbre = document.getElementById(abre);
  const btnFecha = document.getElementById(fecha);
  const modalEl = document.getElementById(modal);

  if (btnAbre && btnFecha && modalEl) {
    btnAbre.onclick = () => (modalEl.style.display = "flex");
    btnFecha.onclick = () => (modalEl.style.display = "none");
  }
});

window.onclick = (e) => {
  modais.forEach(({ modal }) => {
    const modalEl = document.getElementById(modal);
    if (e.target === modalEl) modalEl.style.display = "none";
  });
};

const form = document.getElementById('contatoForm');

form.addEventListener('submit', function(e) {
   
    setTimeout(() => {
        form.reset(); 
    }, 100); 
});