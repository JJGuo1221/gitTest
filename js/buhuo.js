$(document).ready(function () {
    $("#btnid").click(function () {
        $("#pid").text(Math.random());
    });
    var a1 = $("#a1");
    $("#btn2").click(function () {
        a1.attr("href", "http://www.baidu.com");
        a1.text("baidu")
    });
    $("#btn3").click(function () {
        a1.attr("href", "http://www.tencent.com");
        a1.text("Tencent");
    });
    $("#btn4").click(function () {
        $("#pid").text(function (i, ot) {
            return "old:" + ot + "  new:" + i;
        })
    })

    $("#btn1").click(function () {
        $("#pid").after("this is wwwwwwwwwwwwwwc")
    })

    $("#btn6").click(function () {
        $("#del_p").remove();
    })
});


function appledText() {
    var t1 = "<p>t1</p>";
    var t2 = $("<p></p>").text("t2");
    var t3 = document.createElement("p");
    t3.innerText = "t3";
    $("body").append(t1, t2, t3);
}
