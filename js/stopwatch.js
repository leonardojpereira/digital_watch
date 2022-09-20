let counterDisplay = document.getElementById('counter')

let h = 0;
let m = 0;
let s = 0;
let ml = 0;

let interval;

function start() {
    interval = setInterval(() => { timer() }, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval)
    h = 0;
    m = 0;
    s = 0;
    ml = 0;

    counterDisplay.innerText = '00:00:00:00';
}

function timer() {
    ml++;

    if (ml == 99) {
        ml = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        m++;
    }

    if (m == 60) {
        m = 0;
        h++;
    }

    format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ml < 10 ? '0' + ml : ml);

    counterDisplay.innerText = format;

    return format;
}



