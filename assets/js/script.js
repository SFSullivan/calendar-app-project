



function updateTime() {
    var today = moment();

    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));

    // coloring the time blocks
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




var sched0900 = document.querySelector("#0900")
var sched1000 = document.querySelector("#1000")
var sched1100 = document.querySelector("#1100")
var sched1200 = document.querySelector("#1200")
var sched1300 = document.querySelector("#1300")
var sched1400 = document.querySelector("#1400")
var sched1500 = document.querySelector("#1500")
var sched1600 = document.querySelector("#1600")
var sched1500 = document.querySelector("#1700")
var containEl = document.querySelector(".container")
var saveBtn = document.querySelector(".save-icon")

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

function lastRegistered() {
    for (let el of scheduleArray) {
        el.val(localStorage.getItem("time block" + el.data("hour")));

    }

}

function formSubmit(event) {
    event.preventDefault();

    var buttonClick = $(event.currentTarget);

    var targetText = buttonClick.siblings("textarea");

    var timeBlockTarget = targetText.data("hour");

    localStorage.setItem("time block " + timeBlockTarget, targetText.val());
}

saveBtn.on("click", formSubmit)