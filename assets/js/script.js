



function updateTime() {
    var today = moment();

    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // function for coloring the time blocks
    var now = moment().format("kk");
    for (let i = 0; i < scheduleArray.length; i++) {
        scheduleArray[i].removeClass("future past present");

        if (now > scheduleArray[i].data("hour")) {
            scheduleArray[i].addClass("past")
        } else if (now === scheduleArray[i].attr("data-hour")) {
            scheduleArray[i].addClass("present");
        } else {
            scheduleArray[i].addClass("future")
        }
    }
}



// establishing variables for the timeblocks
var sched0900 = $("#h-0900")
var sched1000 = $("#h-1000")
var sched1100 = $("#h-1100")
var sched1200 = $("#h-1200")
var sched1300 = $("#h-1300")
var sched1400 = $("#h-1400")
var sched1500 = $("#h-1500")
var sched1600 = $("#h-1600")
var sched1700 = $("#h-1700")
var containEl = $(".container")
var saveBtn = $(".save-icon")


//the array of all timeblocks
let scheduleArray = [
    sched0900,
    sched1000,
    sched1100,
    sched1200,
    sched1300,
    sched1400,
    sched1500,
    sched1600,
    sched1700
];

lastRegistered();
updateTime();
setInterval(updateTime, 1000);


//brings up the last thing saved in that time block
function lastRegistered() {
    for (let el of scheduleArray) {
        var timeBlockValue = localStorage.getItem("time block " + el.data("hour"));
        el.val(timeBlockValue);

        console.log(timeBlockValue);
    }

}


//submits whatever is in the timeblock to the local storage
function formSubmit(event) {
    event.preventDefault();

    var buttonClick = $(event.currentTarget);

    var targetText = buttonClick.siblings("textarea");

    var timeBlockTarget = targetText.data("hour");

    localStorage.setItem("time block " + timeBlockTarget, targetText.val());
}



saveBtn.on("click", formSubmit)