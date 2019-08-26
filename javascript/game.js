












$(document).ready(function () {


    // Create Golbal variables

    var computerNumber = 0;
    var crystalNumber = "";
    var isCalculated = false;
    isOperatorChosen = false;
    var operator = "";

    Wins = 0;
    Lose = 0;

    //   Clear Function
    function initializeCalculator() {
        computertNumber = "";
        crystalNumber = "";
        isCalculated = false;
        isOperatorChosen = false;
        var operator = "";
        Wins = 0;
        Lose = 0;


        $("#computerNumber, #crystalNumber,  #result").empty();
    }
    var targetNumber = Math.floor(Math.random() * 120) + 19; ;

  $("#number-to-guess").text(targetNumber);
             //  On Click Events
    $("#random-button").on("click", function () {


        // ... we generate a random number
        var random = Math.floor(Math.random() * 12) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);


    })
    $("#random-button2").on("click", function () {


        // ... we generate a random number
        var random = Math.floor(Math.random() * 12) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);


    })
    $("#random-button3").on("click", function () {
        

        // ... we generate a random number
        var random = Math.floor(Math.random() * 12) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);

    })
    $("#random-button4").on("click", function () {
        

        // ... we generate a random number
        var random = Math.floor(Math.random() * 12) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);

    })
});