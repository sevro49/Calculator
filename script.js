$(document).ready(function (e) {

    $("#one").click(function () {
        document.forms.display.value += 1;
    });

    // Numpad and Digit 2
    $(document).on("keypress", function (e) {
        if (e.which == 97 || e.which == 49) {
            document.forms.display.value += 1;
        }
    });

    $("#two").click(function () {
        document.forms.display.value += 2;
    });

    // Numpad and Digit 2
    $(document).on("keypress", function (e) {
        if (e.which == 98 || e.which == 50) {
            document.forms.display.value += 2;
        }
    });

    $("#three").click(function () {
        document.forms.display.value += 3;
    });

    // Numpad and Digit 3
    $(document).on("keypress", function (e) {
        if (e.which == 99 || e.which == 51) {
            document.forms.display.value += 3;
        }
    });

    $("#four").click(function () {
        document.forms.display.value += 4;
    });

    // Numpad and Digit 4
    $(document).on("keypress", function (e) {
        if (e.which == 100 || e.which == 52) {
            document.forms.display.value += 4;
        }
    });

    $("#five").click(function () {
        document.forms.display.value += 5;
    });

    // Numpad and Digit 5
    $(document).on("keypress", function (e) {
        if (e.which == 101 || e.which == 53) {
            document.forms.display.value += 5;
        }
    });

    $("#six").click(function () {
        document.forms.display.value += 6;
    });

    // Numpad and Digit 6
    $(document).on("keypress", function (e) {
        if (e.which == 102 || e.which == 54) {
            document.forms.display.value += 6;
        }
    });

    $("#seven").click(function () {
        document.forms.display.value += 7;
    });

    // Numpad and Digit 7
    $(document).on("keypress", function (e) {
        if (e.which == 103 || e.which == 55) {
            document.forms.display.value += 7;
        }
    });

    $("#eight").click(function () {
        document.forms.display.value += 8;
    });

    // Numpad and Digit 8
    $(document).on("keypress", function (e) {
        if (e.which == 104 || e.which == 56) {
            document.forms.display.value += 8;
        }
    });

    $("#nine").click(function () {
        document.forms.display.value += 9;
    });

    // Numpad and Digit 9
    $(document).on("keypress", function (e) {
        if (e.which == 105 || e.which == 57) {
            document.forms.display.value += 9;
        }
    });

    $("#zero").click(function () {
        document.forms.display.value += 0;
    });

    // Numpad and Digit 0
    $(document).on("keypress", function (e) {
        if (e.which == 96 || e.which == 48) {
            document.forms.display.value += 0;
        }
    });

    $("#add").click(function () {
        document.forms.display.value += "+";
    });

    // Numpad add
    $(document).on("keypress", function (e) {
        if (e.which == 43) {
            document.forms.display.value += "+";
        }
    });

    $("#subs").click(function () {
        document.forms.display.value += "-";
    });

    // Numpad subs
    $(document).on("keypress", function (e) {
        if (e.which == 45) {
            document.forms.display.value += "-";
        }
    });

    $("#multi").click(function () {
        document.forms.display.value += "*";
    });

    // Numpad multi
    $(document).on("keypress", function (e) {
        if (e.which == 42) {
            document.forms.display.value += "*";
        }
    });

    $("#divide").click(function () {
        document.forms.display.value += "/";
    });

    // Numpad divide
    $(document).on("keypress", function (e) {
        if (e.which == 47) {
            document.forms.display.value += "/";
        }
    });

    $("#dot").click(function () {
        document.forms.display.value += ".";
    });

    // Numpad dot
    $(document).on("keypress", function (e) {
        if (e.which == 44) {
            document.forms.display.value += ".";
        }
    });

    $("#equal").click(function () {
        if (display.value == "") {
            alert("Please enter any numbers to calculate!");
        } else {
            document.forms.display.value = eval(document.forms.display.value);
        }
    });

    // Numpad enter
    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            if (display.value == "") {
                alert("Please enter any numbers to calculate!");
            } else {
                document.forms.display.value = eval(
                    document.forms.display.value
                );
            }
        }
    });

    $("#delete").click(function () {
        document.forms.display.value = document.forms.display.value.slice(0, -1);
    });

    $("#clear").click(function () {
        document.forms.display.value = "";
    });

    $(document).on("keypress", function (e) {
        console.log($("#display").val());
    });
});
