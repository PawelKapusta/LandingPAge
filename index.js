function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minute");
    var seconds = document.getElementById("second");

    var today = new Date();
    var h = today.getHours;
    var m = today.getMinutes;
    var s = today.getSeconds;

    void(hours.innerHTML = h);
    void(minutes.innerHTML = m);
    void(seconds.innerHTML = s);
}

var interval = setInterval(clock, 1000);