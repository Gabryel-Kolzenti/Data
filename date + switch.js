const datinha = new Date ();
const h1 = document.querySelector('.container h1')
const dataAnoHoraMin = AnoHoraMin(datinha);


function zeroAEsquerda(num) {   //função apenas para acrscentar 0 ao lado dos numeros menores que 10
    return num>= 10 ? num : `0${num}`
}

function AnoHoraMin(data) {
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${ano} ${hora}:${min}`
}

function getSemana (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = `Domingo` 
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = `Segunda` 
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = `Terça` 
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = `Quarta` 
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = `Quinta` 
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = `Sexta` 
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = `Sábado` 
            return diaSemanaTexto;
    
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }}

    let diaSemana = datinha.getDay();
    const diaSemanaTexto = getSemana(diaSemana);

    function getMes (mes) {
        let mesTexto;
        
        switch (mes) {
            case 0:
                mesTexto = `Janeiro` 
                return mesTexto;
            case 1:
                mesTexto = `Fevereiro` 
                return mesTexto;
            case 2:
                mesTexto = `Março` 
                return mesTexto;
            case 3:
                mesTexto = `Abril` 
                return mesTexto;
            case 4:
                mesTexto = `Maio` 
                return mesTexto;
            case 5:
                mesTexto = `Junho` 
                return mesTexto;
            case 6:
                mesTexto = `Julho` 
                return mesTexto;
            default:
                mesTexto = ''
                return mesTexto;}}
    
        let mes = datinha.getMonth();
        const mesTexto = getMes(mes);

        //ficou faltando colocar o que esta la no console dentro do html (h1)

        function criaData() { 
            const semana = diaSemanaTexto;
            const mes = mesTexto;
            const tempo = dataAnoHoraMin;
            const diaMes = datinha.getDate();
            return (`${semana} ${diaMes} de ${mes} de ${tempo}`);
          }

h1.innerHTML = criaData(datinha);