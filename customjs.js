$(document).ready(function () {
    $("#btn-all").click(function () {
        $(".sidearms").show();
        $(".smgs").show();
        $(".shotguns").show();
        $(".rifles").show();
        $(".snipers").show();
        $(".heavys").show();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-sidearms").click(function () {
        $(".sidearms").show();
        $(".smgs").hide();
        $(".shotguns").hide();
        $(".rifles").hide();
        $(".snipers").hide();
        $(".heavys").hide();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-smgs").click(function () {
        $(".sidearms").hide();
        $(".smgs").show();
        $(".shotguns").hide();
        $(".rifles").hide();
        $(".snipers").hide();
        $(".heavys").hide();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-shotguns").click(function () {
        $(".sidearms").hide();
        $(".smgs").hide();
        $(".shotguns").show();
        $(".rifles").hide();
        $(".snipers").hide();
        $(".heavys").hide();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-rifles").click(function () {
        $(".sidearms").hide();
        $(".smgs").hide();
        $(".shotguns").hide();
        $(".rifles").show();
        $(".snipers").hide();
        $(".heavys").hide();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-snipers").click(function () {
        $(".sidearms").hide();
        $(".smgs").hide();
        $(".shotguns").hide();
        $(".rifles").hide();
        $(".snipers").show();
        $(".heavys").hide();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-heavys").click(function () {
        $(".sidearms").hide();
        $(".smgs").hide();
        $(".shotguns").hide();
        $(".rifles").hide();
        $(".snipers").hide();
        $(".heavys").show();
        $(".melee").hide();
    });
});

$(document).ready(function () {
    $("#btn-melee").click(function () {
        $(".sidearms").hide();
        $(".smgs").hide();
        $(".shotguns").hide();
        $(".rifles").hide();
        $(".snipers").hide();
        $(".heavys").hide();
        $(".melee").show();
    });
});
