var lista_nome =[];
function Enviar_nome(){
    var nome = document.getElementById("nome").value;
    lista_nome.push(nome);
    document.getElementById("display").innerHTML = lista_nome;
}
function Mostrar_nomes(){
    var item1 = lista_nome.join("<br>");
    document.getElementById("mostrar").innerHTML = item1;
}
function Organizar_a_lista(){
    lista_nome.sort();
    var item2 = lista_nome.join("<br>");
    document.getElementById("lista_organizada").innerHTML = item2;
}
function Pesquisar_o_nome(){
    var nome_pesquisado = document.getElementById("Nome_pesquisado").value;
    var encontrado = 0;
    for(var i = 0; i<lista_nome.length; i++){
        if(nome_pesquisado==lista_nome[i]){
            encontrado = encontrado+1;
        }
    }
    document.getElementById("Nome-pesquisado").innerHTML ="Nome encontrado "+encontrado+" vez(es)";
}