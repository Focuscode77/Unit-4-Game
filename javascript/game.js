

$(document).ready(function () {

    // Create Golbal variables





    var numberOptions = [10, 5, 3, 7];
    var imageCrystal
    var crystalNumber;
    wins = 0;
    Lose = 0;
    var counter = 0;


    //  Computer number random every time the game loads

    var targetNumber = Math.floor(Math.random() * 120) + 19;;
    $("#number-to-guess").text(targetNumber);



// A loop that randomizes an array.

    for (var i = 0; i < numberOptions.length; i++) {
        var random = Math.floor(Math.random() * 12) + 1;

        imageCrystal = numberOptions.length;




    }

// A on click event that adds values together.

    $(".number").on("click", function () {

        // prints the array randomly on the crystal in taget score
        $("#crystalNumber").text(imageCrystal);

        //   Adds the value of the crytals to the traget number
        counter += imageCrystal;


        //    Prints to the screen
        $("#crystalNumber").text(counter);


        // A condition that alerts when you win by being equal to target number.
        if (counter === targetNumber) {

            alert("you win");
            console.log(counter)
        }
        // A condition that alerts when you lose by going over target number.
        else if (counter >= targetNumber) {
            alert("You lose!!");
        }

    })



});