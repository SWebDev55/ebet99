function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();

    //Init the carousel
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        loop:true,
        items:1,
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 3000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }


// show and hide form for mobile
// $("#openForm").click(function (){
//     $("#form").show();
// });
// $("#closeForm").click(function (){
//     $("#form").hide();
// });

$("#show-more").click(function(){
    $(".more").slideToggle();
});

// Random Code Register
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100000);


// show and hide menu mobile size
function openNav(){
    document.getElementById("menu").style.width = "50%";
}
function closeNav(){
    document.getElementById("menu").style.width = "0%";
}



function openForm(){
    document.getElementById("form").style.width = "100%";
}
function closeForm(){
    document.getElementById("form").style.width = "0%";
}

