function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minute");
    var seconds = document.getElementById("second");

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);