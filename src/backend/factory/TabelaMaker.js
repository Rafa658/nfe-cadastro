function TabelaMaker(nomenclaturas) {
    let ncm_array = []

    Object.values(nomenclaturas).forEach(e => {
        let valor = e.Descricao + ' ' + e.Codigo
        let item = {
            label: valor,
            value: valor,
            ncm_id: e.Codigo,
        }
        ncm_array.push(item)
    })
    
    ncm_tabela = {}
    
    ncm_tabela.dados = ncm_array

    return ncm_tabela
}

module.exports = TabelaMaker