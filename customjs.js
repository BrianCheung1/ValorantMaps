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

$(document).ready(function () {
    $(".unratedfeatures").hide();
    $(".rankedfeatures").hide();
    $(".spikefeatures").hide();
    $(".deathfeatures").hide();
    $(".escalationfeatures").hide();
    
    $("#btn-modes").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });

    $("#btn-unratedfeatures").click(function () {
        $(".unratedfeatures").show();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-rankedfeatures").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").show();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-spikefeatures").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").show();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-deathfeatures").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").show();
        $(".escalationfeatures").hide();
    });
    $("#btn-escalationfeatures").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").show();
    });
});

