












$(document).ready(function () {


    // Create Golbal variables

    var computerNumber = 0;
    var crystalNumber = "";
    var isCalculated = false;
    isOperatorChosen = false;
    var operator = "";

    Wins = 0;
    Lose = 0;


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

    $(".number").on("click", function () {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) {
            return false;
        }
        if (isOperatorChosen) {
            crystalNumber += $(this).val();
            $("#crystalNumber").text(crystalNumber);
  
          }
          else {
            computerNumber += $(this).val();
            $("#computerNumber").text(computerNumber);
          }
        // Create a on click event fo the numbers

        // Create a clear button on click event

        // If statements
    })
});