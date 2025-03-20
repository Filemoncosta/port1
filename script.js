const campoBusca = document.getElementById("barra-de-pesquisa");
const botaoBuscar = document.getElementById("botao-de-pesquisa");

campoBusca.addEventListener("input", function() {
    if(campoBusca.value.trim() !== "") {
        botaoBuscar.style.display = "inline-block";
    } else {
        botaoBuscar.style.display = "none";
    }
});