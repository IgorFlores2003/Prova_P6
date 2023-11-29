const valida = (latinha) => {
    if(!latinha.descricao || latinha.descricao.length == 0){
        console.log("Erro")
    }

    if(!latinha.volume || latinha.volume.length == 0){
        console.log("Erro")
    }
}

module.exports = valida