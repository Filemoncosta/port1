const campoBusca = document.getElementById("barra-de-pesquisa");
const botaoBuscar = document.getElementById("botao-de-pesquisa");
const input = document.getElementById("barra-de-pesquisa")
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");


campoBusca.addEventListener("input", function() {
    if(campoBusca.value.trim() !== "") {
        botaoBuscar.style.display = "inline-block";
    } else {
        botaoBuscar.style.display = "none";
    }
});

function pesquisar(){
        const palavra = input.value.toLowerCase().trim();
        
        if(palavra == 'html'){
            window.location.href = 'html.html';
        }else if(palavra == 'css' || palavra == 'css3'){
            window.location.href = 'css.html';
        }else if(palavra == 'js' || palavra == 'javascript' || palavra == 'java script'){
            window.location.href = 'js.html';
        }else if(palavra == 'python'){
            window.location.href = 'python.html';
        }else if(palavra == 'django'){
            window.location.href = 'django.html';
        }else if(palavra == 'inicio' || palavra == 'início' || palavra == 'home'){
            window.location.href = 'index.html';
        }else{
            alert('Entrada não encontrada');
        }
}

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        pesquisar();
    }
});

botaoBuscar.addEventListener('click', function(){
    pesquisar();
});

botaoMenu.addEventListener('click', function(event){
    event.stopPropagation();
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
});

menu.addEventListener('click', function(event){
    event.stopPropagation();
});

document.addEventListener('click', function(event){
   menu.style.display = 'none'; 
});




