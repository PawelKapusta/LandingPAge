const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;

    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let count = hh + mm / 12;
    hr.style.transform = "rotateZ(count deg)";
    mn.style.transform = "rotateZ(mm deg)";
    sc.style.transform = "rotateZ($(ss) deg)";
});