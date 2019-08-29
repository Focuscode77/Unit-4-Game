

$(document).ready(function () {

    // Create Golbal variables





    var numberOptions = [10, 5, 3, 7];
    var imageCrystal
    var crystalNumber;
    wins = 0;
    Lose = 0;
    var wincounter = 0;
    var losscounter;
    var counter=0;


    //  Computer number random every time the game loads

    var targetNumber = Math.floor(Math.random() * 120) + 19;;
    $("#number-to-guess").text(targetNumber);


    //  On Click Events
    

    for (var i = 0; i < numberOptions.length; i++) {
    var random = Math.floor(Math.random() * 12) + 1;

     imageCrystal = numberOptions.length;

    

   
    }


    $(".number").on("click", function () {

        // prints the array randomly on the crystal in taget score
          $("#crystalNumber").text(imageCrystal);

        //   Adds the value of the crytals to the traget number
       counter += imageCrystal;
       
    
       //    Prints to the screen
       $("#crystalNumber").text(counter);
       
       
       if(counter === targetNumber){
       
           alert("you win");
        console.log(counter)
        }
        else if (counter >= targetNumber) {
            alert("You lose!!");
          }

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