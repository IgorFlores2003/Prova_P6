const latas = []
let last_id = 0
const valida = require('../validador/valida')

const repositorio = {
    get: () => {
        return latas
    },
    getId: (id) => {
        valida()
        return latas.filter(lata => lata.id == id)
    },
    create: (lata) => {
        valida()
        lata.id = ++last_id
        latas.push(lata)
        console.log(lata)

        return lata
    },
    update: (dados) => {
        valida()
        latas.forEach(lata => {
            if(lata.id == dados.id){
                lata = {
                    ...dados
                }
            }
        })

        return latas.filter(lata => lata.id == dados.id)
    },
    destroy: (id) => {
        valida()
        const indice = latas.findIndex(lata => lata.id == id)

        if(indice != -1){
            latas.splice(indice, 1)
        }

        return true
    }
}

module.exports = repositorio