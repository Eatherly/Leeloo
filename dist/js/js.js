"use strict";

var i = 0;
var sum = 0;
var concat = "";
var cauntclass = 1;
var unChecked = "rgb(255, 255, 255)";
var checked = "rgb(255, 0, 0)";
var j = 5;

function roundPlus(x, n) {

    var m = Math.pow(10, n);

    return Math.round(x * m) / m;
}
function isValidUrl(url) {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;

    return objRE.test(url);
}

function cancel() {
    i = 0;
    sum = 0;
    cauntclass = 1;
    $(".field").children().attr("disabled", false);
    $(".formula").css("background-color", unChecked);
    $(".field").children().css("background-color", unChecked);
    $("#result").val("");
}

function mathoperations() {}

$("td").click(function () {

    $("#result").val($(this).children().val());
});

$("#cancel").click(cancel);

$(".price").click(function () {
    if ($(this).children().val() != "") {
        $(this).find(':first-child').val($(this).find(':first-child').val().replace(/\s/g, ''));
        $(this).find(':first-child').val(String(roundPlus($(this).find(':first-child').val(), 2)).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 "));
    }
});

$(".formula").click(function () {

    $(".formula").css("background-color", unChecked);
    $(this).css("background-color", checked);
    sum = 0;
    i = 0;
    concat = "";
    $(".field").children().css("background-color", unChecked);
    $(".field").children().attr("disabled", true);
});

$(".field").click(function () {
    if ($("#sum").css("background-color") == checked) {
        if ((cauntclass == 1 || cauntclass == $(this).attr("class")) && ($(this).attr("class") == "table-cell field number" || $(this).attr("class") == "table-cell field price")) {
            if ($(this).children().val() != "" && $(this).children().css("background-color") == unChecked) {

                $(this).children().css("background-color", checked);
                sum += parseFloat($(this).children().val().replace(/\s/g, ''));
                i++;
            } else if ($(this).children().css("background-color") == checked) {
                sum -= parseFloat($(this).children().val().replace(/\s/g, ''));

                $(this).children().css("background-color", unChecked);
                i--;
            }

            $("#result").val(sum);

            cauntclass = $(this).attr("class");
        } else {
            alert("Sorry, man, but the mathematical operations should be with prices column only or with numbers column only");
        }
    }

    if ($("#average").css("background-color") == checked) {
        if ((cauntclass == 1 || cauntclass == $(this).attr("class")) && ($(this).attr("class") == "table-cell field number" || $(this).attr("class") == "table-cell field price")) {
            if ($(this).children().val() != "" && $(this).children().css("background-color") == unChecked) {

                $(this).children().css("background-color", checked);
                sum += parseFloat($(this).children().val().replace(/\s/g, ''));
                i++;
            } else if ($(this).children().css("background-color") == checked) {
                sum -= parseFloat($(this).children().val().replace(/\s/g, ''));

                $(this).children().css("background-color", unChecked);
                i--;
            }

            $("#result").val(sum / i);

            cauntclass = $(this).attr("class");
        } else {
            alert("Sorry, man, but the mathematical operations should be with prices column only or with numbers column only");
        }
    }

    if ($("#concat").css("background-color") == checked) {
        if ($(this).children().val() != "" && $(this).children().css("background-color") == unChecked) {

            $(this).children().css("background-color", checked);
            concat += $(this).children().val() + " ";
            i++;
        }

        $("#result").val(concat);
    }

    if ($("#link").css("background-color") == checked) {
        if ($(this).children().val() != "" && $(this).children().css("background-color") == unChecked) {
            $(".link").children().css("background-color", unChecked);
            $(this).children().css("background-color", checked);
            if (isValidUrl($(this).children().val())) {
                $("#result").val("link Valid");
            } else $("#result").val("link NoValid");
        }
    }
});

$("#addString").click(function () {
    $(".table").append("<tr class=\"table-heading\"><td class=\"table-cell\">" + j + "</td><td class=\"table-cell field\"><input type=\"text\" name=\"\" id=\"\"></td><td class=\"table-cell field number\"><input type=\"number\" name=\"\" id=\"\"></td><td class=\"table-cell field price\"><input type=\"text\" name=\"\" id=\"\"><select><option value=\"USD\">USD</option><option value=\"UAH\">UAH</option></select></td><td class=\"table-cell field link\"><input type=\"text\" name=\"\" id=\"\"></td></tr>");
    j++;
});