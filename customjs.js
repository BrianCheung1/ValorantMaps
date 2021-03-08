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

    $("#btn-unratedfeatures").click(function () {
        if ($('.rankedfeatures').is(":visible")) {
            $(".unratedfeatures").show();
        }
        if ($('.spikefeatures').is(":visible")) {
            $(".unratedfeatures").show();
        }
        if ($('.deathfeatures').is(":visible")) {
            $(".unratedfeatures").show();
        }
        if ($('.escalationfeatures').is(":visible")) {
            $(".unratedfeatures").show();
        }
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });

    $("#btn-rankedfeatures").click(function () {
        if ($('.unratedfeatures').is(":visible")) {
            $(".rankedfeatures").show();
        }
        if ($('.spikefeatures').is(":visible")) {
            $(".rankedfeatures").show();
        }
        if ($('.deathfeatures').is(":visible")) {
            $(".rankedfeatures").show();
        }
        if ($('.escalationfeatures').is(":visible")) {
            $(".rankedfeatures").show();
        }
        $(".unratedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });

    $("#btn-spikefeatures").click(function () {
        if ($('.unratedfeatures').is(":visible")) {
            $(".spikefeatures").show();
        }
        if ($('.rankedfeatures').is(":visible")) {
            $(".spikefeatures").show();
        }
        if ($('.deathfeatures').is(":visible")) {
            $(".spikefeatures").show();
        }
        if ($('.escalationfeatures').is(":visible")) {
            $(".spikefeatures").show();
        }
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-deathfeatures").click(function () {
        if ($('.unratedfeatures').is(":visible")) {
            $(".deathfeatures").show();
        }
        if ($('.rankedfeatures').is(":visible")) {
            $(".deathfeatures").show();
        }
        if ($('.spikefeatures').is(":visible")) {
            $(".deathfeatures").show();
        }
        if ($('.escalationfeatures').is(":visible")) {
            $(".deathfeatures").show();
        }
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-escalationfeatures").click(function () {
        if ($('.unratedfeatures').is(":visible")) {
            $(".escalationfeatures").show();
        }
        if ($('.rankedfeatures').is(":visible")) {
            $(".escalationfeatures").show();
        }
        if ($('.spikefeatures').is(":visible")) {
            $(".escalationfeatures").show();
        }
        if ($('.deathfeatures').is(":visible")) {
            $(".escalationfeatures").show();
        }
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
    });

    $("#btn-unratedfeatures1").click(function () {
        $(".unratedfeatures").toggle();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-rankedfeatures1").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").toggle();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-spikefeatures1").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").toggle();
        $(".deathfeatures").hide();
        $(".escalationfeatures").hide();
    });
    $("#btn-deathfeatures1").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").toggle();
        $(".escalationfeatures").hide();
    });
    $("#btn-escalationfeatures1").click(function () {
        $(".unratedfeatures").hide();
        $(".rankedfeatures").hide();
        $(".spikefeatures").hide();
        $(".deathfeatures").hide();
        $(".escalationfeatures").toggle();
    });
});

function change() {
    var btnlist = ["btn-unratedfeatures1", "btn-rankedfeatures1", "btn-spikefeatures1", "btn-deathfeatures1", "btn-escalationfeatures1"]

    for (i = 0; i < btnlist.length; i++) {
        var btn = document.getElementById(btnlist[i])
        if (btn.innerHTML === "More Info") {
            btn.innerHTML = "Less Info"
        } else if (btn.innerHTML === "Less Info") {
            btn.innerHTML = "More Info"
        }
    }
}