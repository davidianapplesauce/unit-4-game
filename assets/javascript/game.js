//variables (no wins or losses yet)

var targetNumber= '';
var yourScore= 0;
var crystals= ["assets/images/Aquamarine_.png", "assets/images/green_gem.png", "assets/images/Citrine_gem.png", "assets/images/purple_gem.png"];

//functions

    
targetNumber= Math.floor(Math.random() * 69) + 30; // random number generator
$("#randomNumber").html (targetNumber);
        
for(var i =0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;

    $(".images").on('click', function(random) {
        console.log($(this));
    })
     
}



//This(below) wasn't working:
// $("#randomNumber").text(randomtargetNumber);

//     function crystalClick() {

//     function resetCrystals () {
    
//     for (var i = 0; i <crystals.length; i++) {
// //not sure about this part
//         var imageCrystal = $("<img>");
//         imageCrystal.addClass("images");
//         imageCrystal.attr("src", crystals[i])
//         crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
//         $(".images").append(imageCrystal);

//     }}

//     function resetHTML () {
//         $(".randomNumber").html(targetNumber);}
        
//     $(".images").on("click", function() {

//         var crystalvalue= ($(this).attr("data-crystalvalue"));
//         crystalvalue =parseInt(crystalvalue);

//         yourScore += crystalvalue;
//     })
