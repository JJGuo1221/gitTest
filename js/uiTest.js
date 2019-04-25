$(document).ready(function () {
    $("#a1").button();
    $("#div1").draggable();
    $("#div2").droppable();
    $("#div2").on("drop", function (e, ui) {
        $("#div2").text("aaa");
    })
    $("#div3").resizable();
    $("#u1").selectable();
    $("#a2").button();
    $("#a2").on("click", function () {
        if ($("#li1").hasClass("ui-selected")) {
            alert("ooo");
        } else {
            alert("ppp");
        }
    })
    $("#u2").sortable();
    $("#div4").accordion();

    var autotags = ["aaa", "bbb", "tencent", "alibaba", "xiaomi", "huawei", "guojiajun"];
    $("#ip1").autocomplete({
        source: autotags
    });
    $("#ip2").datepicker();
    $("#a3").button().on("click", function () {
        $("#div5").dialog();
    })
    $("#div6").progressbar({max: 100});
    setInterval(changepb, 10);
    var max = 100;
    var current = 0;
    function changepb() {
        current++;
        if (current >= 100) {
            current = 0;
        }
        $("#div6").progressbar("option", "value", current);
    }

    $("#u3").menu({position:{at:"left bottom"}});
    $("#div7").slider({
        slide: function (event, ui) {
            $("#sp1").text($("#div7").slider("option", "value"));
        }
    });
    $("#ip3").spinner();
    $("#div8").tabs();
})