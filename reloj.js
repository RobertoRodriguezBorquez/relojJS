
const mostrarReloj= ()=>{
    let fecha = new Date();
    let hr= formatoHora(fecha.getHours());
    let min=formatoHora(fecha.getMinutes());
    let sec=formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML=`${hr}: ${min}: ${sec}`;

    const dias=['lunes','martes','miercoles','jueves','viernes'];
    const meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    let diaSemana=dias[fecha.getDay()];
    let dia=fecha.getDate();
    let mes=meses[fecha.getMonth()];
    let fechaTotal=  `${diaSemana},${dia}${mes}`;
    document.getElementById('fecha').innerHTML=fechaTotal;
}

const formatoHora=(hora)=>{
    if(hora <10)
        hora= '0'+hora;
        return hora;
    
}



setInterval(mostrarReloj,3000);//para llamar al reloj y que cargue cada segundo
