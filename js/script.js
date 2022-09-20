function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = document.querySelector('.session');
   
    if (hours == 0) {
        h = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        session.innerText = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    

    let div = document.querySelector('#clockDisplay').innerText = time;
    setTimeout(showTime, 1000);
}

showTime()

//Date

function showDate() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDay();

    switch (month) {
        case 1:
            month = "Janeiro"
            break;
        case 2:
            month = "Fevereiro"
            break;
        case 3:
            month = "Março"
            break;
        case 4:
            month = "Abril"
            break;
        case 5:
            month = "Maio"
            break;
        case 6:
            month = "Junho"
            break;
        case 7:
            month = "Julho"
            break;
        case 8:
            month = "Agosto"
            break;
        case 9:
            month = "Setembro"
            break;
        case 10:
            month = "Outubro"
            break;
        case 11:
            month = "Novembro"
            break;
        case 12:
            month = "Dezembro"
            break;
    }

    let date = today.getDate() + ' de ' + month + ' de ' + today.getFullYear();

    document.querySelector('#dateDisplay').innerText = date;

    //mostrar dia da semana
    switch (day) {
        case 1:
            day = "Segunda-feira"
            break;
        case 2:
            day = "Terça-feira"
            break;
        case 3:
            day = "Quarta-feira"
            break;
        case 4:
            day = "Quinta-feira"
            break;
        case 5:
            day = "Sexta-feira"
            break;
        case 6:
            day = "Sábado-feira"
            break;
        case 7:
            day = "Domingo-feira"
            break;
    }

    document.querySelector('#weekDayDisplay').innerText = day;

}

showDate();

