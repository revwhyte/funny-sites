// generates a string value with all data
function parseOutput() {
    
}

// saves data into web storage
$("#botao_salvar").on('click', function(){
    let chave = $("#nome_campo").attr('id'),
        valor = $("#campo_valor").val()

    localStorage.setItem(chave, valor)
})
