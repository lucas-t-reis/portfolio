var midday = "am";

function greetings (hour) {

    var tmp = "";
    if(hour < 12) tmp = "morning,";
    else if(hour < 18) tmp = "afternoon,";
    else tmp = "evening,";

    var msg = document.getElementById('greeting');
    msg.innerText = "Good " + tmp + " Dave.";
}


var showTime = function() {

    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    // Leading zeroes in any time that is lesser than 10 units
    if(minute+1 <= 10) minute = "0" + minute.toString(10);
    if(second+1 <= 10) second = "0" + second.toString(10);

    if(hour >= 12) midday = "pm";
    
    greetings(hour);
    var time = hour + ':' + minute + ':' + second + " " + midday;
    clock.innerText = time;


};


setInterval(showTime, 100);