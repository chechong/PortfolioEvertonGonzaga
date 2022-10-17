/*
comentarios
*/

const abas = document.querySelectorAll(".aba");

abas.forEach((aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecinado")){
            return;
        }
     const abaSelecionada = document.querySelector(".aba.selecionado");
     abaSelecionada.classList.remove("selecionado");
     
     aba.classList.add("selecionado");
    
     const informacaoSelecionada = document.querySelector(".informacao.selecionado");

     informacaoSelecionada.classList.remove("selecionado");

     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

     const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoAserMostrada.classList.add("selecionado")

    });
}));