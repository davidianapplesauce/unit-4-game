//variables (no wins or losses yet)

var targetNumber= "";
var yourScore= 0;
var crystals= ["assets/images/Aquamarine_.png", "assets/images/green_gem.png", "assets/images/Citrine_gem.png", "assets/images/purple_gem.png"];

//functions

    function randomtargetNumber() {
        targetNumber= Math.floor(Math.random() * 50) + 21;
        
}

$("#randomNumber").text(randomtargetNumber);

    function crystalClick() {

    } 
    
    for (var i = 0; i <crystals.length; i++) {
//not sure about this part
        var imageCrystal = $("<img>");

        imageCrystal.addClass("images");

        imageCrystal.attr("crystals")

        imageCrystal.attr("data-crystalvalue", crystals[i]);

        $("#crystals").append(imageCrystal);

    }
    $(".images").on("click", function() {

        var crystalvalue= ($(this).attr("data-crystalvalue"));
        crystalvalue =parseInt(crystalvalue);

        yourScore += crystalvalue;
    })