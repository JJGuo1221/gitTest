$(document).ready(function () {
    $(".l1>a").click(function () {
        var ulNode = $(this).next("ul");
        /*if (ulNode.css("display") == "none") {
            ulNode.css("display", "block");
        } else {
            ulNode.css("display", "none");
        }*/
        // ulNode.toggle("normal");
        ulNode.slideToggle();
        console.log($(this).css("background-image"))
        changeIcon($(this));
    })
    $(".hl1>a").hover(function () {
        var ulNode = $(this).next("ul");
        ulNode.slideDown();
        changeIcon($(this));
    }, function () {
        var ulNode = $(this).next("ul");
        ulNode.slideUp();
        changeIcon($(this));
    })

    function changeIcon(node) {
        if (node) {
            if (node.css("background-image") == ("url(\"http://localhost:63342/jQuery/img/down.png\")")) {
                node.css("background-image", "url(\"http://localhost:63342/jQuery/img/up.png\")");
            } else {
                node.css("background-image", "url(\"http://localhost:63342/jQuery/img/down.png\")");
            }
        }
    }
})