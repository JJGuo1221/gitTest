
$.noConflict();

jQuery(document).ready(function () {
    /*$("body").text("wait...");
    alert("一一一");
    $("body").load("../box.htm", function (a, status, c) {
        console.log("aaa");
        if (status == "error") {
            $("body").text("加载失败");
        }
    })*/
    jQuery("div").myjq();
    jQuery("#btn").on("click", function () {
        jQuery("div").text("uuuu");
    });
});
