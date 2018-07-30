// generate random number for target number
// create 4 ruby elements to generate random number under 10
// each ruby number adds to user number
// if user number is greater than computer number, user loses
// else user wins. Then new game restarts
prompt("Are you worthy enough to challenge The Almighty Thanos?")
$(document).ready(() => {
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    var computerPick = Math.floor(Math.random() * 59) + 19;
    var lockGame = false;
    var targetNumber = computerPick;

//stones number value
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    function reset(){
        // Random=Math.floor(Math.random()*101+19);
        // console.log(Random)
        // $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
   
    // $('#numberWins').text(wins);
    // $('#numberLosses').text(losses);

    document.getElementById("computer-pick").innerHTML = computerPick;

    function yay(){
        alert("You have proven yourself worthy!");
          wins++; 
          $('#numberWins').text(wins);
          reset();
        }
        //addes the losses to the userTotal
        function loser(){
        alert ("Imbecile! You reached for the stars, but your mortal only came up with ash.");
          losses++;
          $('#numberLosses').text(losses);
          reset()
        }

        $('#one').on ('click', function(){
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
                  //sets win/lose conditions
                if (userTotal == computerPick){
                  yay();
                }
                else if ( userTotal > computerPick){
                  loser();
                }   
          })  
          $('#two').on ('click', function(){
            userTotal = userTotal + num2;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
                if (userTotal == computerPick){
                  yay();
                }
                else if ( userTotal > computerPick){
                  loser();
                } 
          })  
          $('#three').on ('click', function(){
            userTotal = userTotal + num3;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
        //sets win/lose conditions
                  if (userTotal == computerPick){
                  yay();
                }
                else if ( userTotal > computerPick){
                  loser();
                } 
          })  
          $('#four').on ('click', function(){
            userTotal = userTotal + num4;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
              
                  if (userTotal == computerPick){
                  yay();
                }
                else if ( userTotal > computerPick){
                  loser();
                }
          });   
        }); 

    // for (var i = 0; i < numberOptions.length; i++)
    //  {
    //     var imageCrystal = $("icon1", 'icon2', 'icon3', 'icon4');

    //     imageCrystal.addClass("crystal-image");

    //     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //     $("#stone").append(imageCrystal);
    // }
    // $(".crystal-image").on("click", function () {
    //     var crystalValue = ($(this).attr("data-crystalvalue"));
    //     crystalValue = parseInt(crystalValue);
    //     console.log("dsfs")

    //     // if (lockGame !== true) {


    //         if (parseInt(yourPick) === computerPick) {
    //             $("#result").text("Yep! You got it! Refresh the page to play again.");
    //             lockGame = true;
    //         }

    //         else {
    //             $("#result").text("Nope. Refresh the page to play again.");
    //             lockGame = true;

    //         }
    //     // }

    // });
