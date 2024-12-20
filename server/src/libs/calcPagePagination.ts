export const CalcPagePagination = (docs: number, limit: number, page: number) => {
    const calc = docs / limit
    const total = Math.trunc(calc) + 1
    return (page <= total) && (page > 0)
}

//RETORNA VERDADERO O FALSO PARA SABER SI EL NUMERO DE LA PAGINA SOBRE PASA EL TOTAL DE DOCUMENTOS O ES UNA PAGINA NEGATIVA