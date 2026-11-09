const selectorTema= document.getElementById("tema");

function aplicarTema() {
    document.body.classList.toggle(
        "tema-oscuro",
        selectorTema.value==='oscuro'
    );
    document.body.classList.toggle(
        "tema-claro",selectorTema.value==='claro'
    );
}

selectorTema.addEventListener('change', aplicarTema);
aplicarTema();