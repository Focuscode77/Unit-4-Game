

$(document).ready(function () {

    // Create Golbal variables





    var numberOptions = [10, 5, 3, 7];
    var imageCrystal
    var crystalNumber;
    Wins = 0;
    Lose = 0;
    var wincounter = 0;
    var losscounter;
    var counter=0;


    //  Computer number random every time the game loads

    var targetNumber = Math.floor(Math.random() * 12) + 1;;
    $("#number-to-guess").text(targetNumber);


    //  On Click Events
    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i < numberOptions.length; i++) {
    var random = Math.floor(Math.random() * 12) + 1;

     imageCrystal = numberOptions[i];

    

   
    }


    $(".number").on("click", function () {
        // ... we generate a random number

        // ... and then dump the random number into our random-number div.

          $("#crystalNumber").text(imageCrystal);

       counter += imageCrystal;
       console.log(counter)
       
        //  var crystalValue = ($(this).attr("data-crystalvalue"));
        //  crystalValue = parseInt(crystalValue);
        
        })



    // $("#random-button2").on("click", function () {
    // ... we generate a random number
    // var random = Math.floor(Math.random() * 12) + 1;
    // ... and then dump the random number into our random-number div.
    // $("#random-number").text(random);
    // });




    // $("#random-button3").on("click", function () {
    // ... we generate a random number
    // var random = Math.floor(Math.random() * 12) + 1;
    // ... and then dump the random number into our random-number div.
    // $("#random-number").text(random);
    // })


    // $("#random-button4").on("click", function () {
    // ... we generate a random number
    // var random = Math.floor(Math.random() * 12) + 1;
    // ... and then dump the random number into our random-number div.
    // $("#random-number").text(random);
    // });


    //    if ("#random-number"=== computerNumber){
    //    console.log("#random-number")
    //    wins ++;

    //    }
















});