var OvenOn = false;

//show and hide div with oven toggled on and off
//$(function () {
//    $('#toggle-event').change(function () {
//        if (OvenOn === true && (document.getElementById('#toggle-event').checked === true)){
//            alert("boo boo boo");
//        } else {
//            $("#oven-options").toggle();
//        }
//    })
//})

//function to 
document.addEventListener("DOMContentLoaded", function (evt) {

    $(function () {
        $('#toggle-event').change(function () {
            console.log(OvenOn);
            console.log(document.getElementById('toggle-event').checked);
            if (OvenOn === true && (document.getElementById('toggle-event').checked === false)) {
                if (confirm("Are you sure you want to shut the oven off?") == true) {
                    OvenOn = false;
                    document.getElementsByClassName("appliance-state-info")[0].innerHTML = "";
                } else {
                    //
                    document.getElementById('toggle-event').checked = true;
                }

            } else {
                $("#oven-options").toggle();
            }
        })
    })

    $('#oven-form').submit(function (e) {
        e.preventDefault();
        showApplianceState();
    })
})

function showApplianceState() {
    OvenOn = true;
    var x = document.getElementsByClassName("appliance-state-info")[0];
    x.innerHTML = "<hr />" + "The oven is currently turned on and is set at " + document.getElementById("temp-input").value +
        "°C " + document.getElementById("oven-mode").value + " with " + document.getElementById("timer-input").value + " minutes left.";
    var y = document.getElementById("oven-options");
    y.style.display = 'none';
}


//document.addEventListener("DOMContentLoaded", function (evt) {
//    $('#toggle-event').change(function () {
//        var e = document.getElementById("#oven-options");
//        if ($(this).prop("checked") == true) {
//            alert("not checked");
//            e.style.display = 'block';
//        } else {
//            alert("not checked");
//            e.style.display = 'none';
//        }
//        //$("#oven-options").toggle();
//    })
//})

$('#toggle-event').change(function () {
    if (this.$element.attr('data-on')) {
        alert("checked");

    } else {
        alert("not checked")
    }
})

//document.addEventListener("DOMContentLoaded", function (evt) {
//    $('#kitchen').hide();
//})

//$('.room-labels').hover(function () {
//    $(this).parent.siblings('.room-labels').css('fill', '#b3e0b3');
//}, function () {
//    $(this).siblings("rect").css("fill", "#fff");
//});


//function toggle_visibility(id) {
//    var e = document.getElementById(id);
//        e.style.display = 'none';
//        $('#kitchen').show();
//        document.getElementById("secondary-nav").innerHTML += " >> Kitchen"
//}