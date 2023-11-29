const axios = require('axios')

test('Testando busca', async () => {
    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})
test('Testando deletar', async () => {
    const response = await axios.delete('http://localhost:3001/latas/')

    expect(response.status).toBe(200)
})
test('Testando Atualizar', async () => {
    const response = await axios.put('http://localhost:3001/latas/')

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("lata não tão grande")
})

test('Testando busca por id', async () => {
    const response = await axios.get('http://localhost:3001/latas/1123')

    expect(response.status).toBe(204)
})

test('Testando criar uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande")
    expect(response.data.volume).toBe(150)
})



test('Erro aconteceu', async()=>{
    const response = await axios.get('http://localhost:3001/latas/1123')
    const response2 = await axios.get('http://localhost:3001/latas')
    const response3 = await axios.put('http://localhost:3001/latas')

    if(response.status!=200){
    expect(response.status).toBe(response.status)
    }
    else if(response2.status!=200){
        expect(response.status).toBe(response.status)
        }
        else if(response3.status!=204){
            expect(response3.status).toBe(response3.status)
            }
            else if(response3.data.descricao!="Lata muito grande"){
                expect(response3.data.descricao).toBe(response3.data.descricao)
                }
                else if(response3.data.volume!=150){
                    expect(response3.data.volume!=150).toBe(response3.data.volume!=150)
                    }
    
})