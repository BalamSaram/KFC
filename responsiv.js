const selectorTema= document.getElementById("tema");
const claveTema ='tema';
const temaGuardado = localStorage.getItem(claveTema);

if (temaGuardado === 'oscuro' || temaGuardado === 'claro') {
    selectorTema.value = temaGuardado;
}

function aplicarTema() {
    document.body.classList.toggle(
        "tema-oscuro",
        selectorTema.value==='oscuro'
    );
    document.body.classList.toggle(
        "tema-claro",selectorTema.value==='claro'
    );
}

selectorTema.addEventListener('change', () => {
    const tema = selectorTema.value;

    if (tema === 'oscuro' || tema === 'claro') {
        localStorage.setItem(claveTema, tema);
        aplicarTema();
    }
});

aplicarTema();