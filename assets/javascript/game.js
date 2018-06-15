$(document).ready(function () { //Wait till all the elements are loaded

    var targetScore = 0; //Random value asigned as target.
    var currentScore = 0; //Actual score of the user.
    // var redCrystal = 0; //Random value asigned to the red crystal.
    // var blueCrystal = 0; //Random value asigned to the blue crystal.
    // var yellowCrystal = 0; //Random value asigned to the yellow crystal.
    // var magCrystal = 0; //Random value asigned to the magenta crystal.
    var wins = 0; //User wins.
    var losses = 0; //User losses.
    var oldscore = 0;
    var youroldscore = 0;



    function reset() { 
        currentScore = 0; 
        targetScore = Math.floor((Math.random() * 101) + 19); 
        crystals=[]; 
        for (i = 0; i < 4; i++) { 
            crystals.push(Math.floor((Math.random() * 11) + 1));
        };
        $("#targetScore").text(targetScore);    
        $("#currentScore").text(currentScore);  
        $("#wins").text("Wins: "+ wins);        
        $("#losses").text("Losses: " + losses); 
        $("#yourScore").hide();

        console.log(targetScore, crystals[0], crystals[1], crystals[2], crystals[3]); 
    };

    reset();

    function playGame() { 
        $("#currentScore").text(currentScore);
        if (currentScore === targetScore) {
            wins++;
            oldscore = targetScore;
            youroldscore = currentScore;
         
            $("#result").text("CONGRATULATIONS, YOU WON!!");
            $("#results2").text("The target score was:  " + oldscore + "  Your score was: " + youroldscore);
            reset();

        }
        else if (currentScore > targetScore) { 

            oldscore = targetScore;
            youroldscore = currentScore;
            $("#result").text("SORRY, YOU LOST!");
            $("#results2").text("The target score was:  " + oldscore + "  Your score was: " + youroldscore);
            losses++;
            reset();
        }
        else if (currentScore > 0){
            $("#result").text("");
            $("#results2").text("");
            $("#yourScore").show();
        };


        
    };

    $("#redCrystal").on('click', function () {
        currentScore += crystals[0];
        playGame();
    });

    $("#blueCrystal").on('click', function () {
        currentScore += crystals[1];
        playGame();
    });

    $("#yellowCrystal").on('click', function () {
        currentScore += crystals[2];
        playGame();
    });

    $("#magCrystal").on('click', function () {
        currentScore += crystals[3];
        playGame();
    });

});


