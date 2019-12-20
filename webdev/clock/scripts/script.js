
var showTime = function() {

    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var time = hour + ':' + minute + ':' + second;
    clock.innerText = time;

};


setInterval(showTime, 100);