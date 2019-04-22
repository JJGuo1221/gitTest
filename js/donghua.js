$(document).ready(function () {
    $("#b1").click(function () {
        $("#p1").hide(2000);
    });

    $("#b2").click(function () {
        $("#p1").show(2000)
    });
    $("#toggle").click(function () {
        $("#p1").toggle(1000);
    });
    $(".d1").mouseleave(function () {
        $(this).hide(100, function () {
            alert("you are arrested")
        });
    })
    $("#fadeIn").on("click", function () {
        $("#d1").fadeIn(1000);
        $("#d2").fadeIn(1000);
        $("#d3").fadeIn(1000);
    })
    $("#fadeOut").on("click", function () {
        $("#d1").fadeOut(1000);
        $("#d2").fadeOut(1000);
        $("#d3").fadeOut(1000);
    })
    $("#fadeToggle").on("click", function () {
        $("#d1").fadeToggle(1000);
        $("#d2").fadeToggle(1000);
        $("#d3").fadeToggle(1000);
    })
    $("#fadeTo").on("click", function () {
        $("#d1").fadeTo(1000,0);
        $("#d2").fadeTo(1000,0.5);
        $("#d3").fadeTo(1000,1);
    })
    $("#d1").click(function () {
        $("#d3").slideUp().slideDown();
    })
    $("#d2").click(function () {
        $("#d3").slideToggle();
    })
});