// Display today's day and date

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

 function tracker() {
        //code with get the current time 
        var currentTime = moment().hour();
        console.log(currentTime);
        console.log(typeof currentTime)

        // this code will loop over each of the timebars 
        $(".timebar").each(function () {
            var block = parseInt($(this).attr("id").split("hour")[1]);  // --> ["hour", "8"]
            console.log(block);
            // To check the time and add the classes for background indicators
            if (block < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (block === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            } 

        })
    }

$(document).ready(function () {
    // saveBtn click listener 
    // document.querySelector('.saveBtn').addEventListener("click", cb)
    $(".saveBtn").on("click", function () { 
        console.log(this);
        console.log($(this));
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
       // console.log($(this).siblings());
       // console.log($(this).parent());


        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
   

    // this code gets item from the local storage 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    tracker();
})

