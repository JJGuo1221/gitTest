$(document).ready(function () {
    // $("div").css({
    //     width:"200px",height:"200px",backgroundColor:"#00ff00"
    // })
    $("div").addClass("style");
    $("div").click(function () {
        //$(this).addClass("style2")
        $(this).toggleClass("style2");
    })
    // $("div p").first().css("backgroundColor","#ff0000")
    // $("div p").last().css("backgroundColor","#ff0000")
    // $("div p").eq(1).css("backgroundColor","#ff0000")
    // $("div p").filter(".pclass").css("backgroundColor","#ff0000")
    $("div p").not(".pclass").css("backgroundColor","#ff0000")
});

