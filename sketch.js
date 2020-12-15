//creating variables for all backgrounds
var IntroBg;
var GameBg;

//creating variable for the STRAIGHT, STATIC diver image
var StraightStaticDiver, StraightStaticDiver_img;

//creating variable for FLIPPED, STATIC diver image
var FlippedStaticDiver, FlippedStaticDiver_img;

//creating variable for STRAIGHT, DYNAMIC diver animation
var StraightDynamicDiver, StraightDynamicDiver_img;

//creating variable for FLIPPED, DYNAMIC diver animation
var FlippedDynamicDiver, FlippedDynamicDiver_img;

//creating variables for PLAY AND INSTRUCTIONS BUTTON 
var PlayButton, Playbutton_img;
var InstructionsButton, InstructionsButton_img;

//creating variables for "INSTRUCTIONS" TEXT
var InstructionsText, InstructionsText_img;

//creating variable for MARINE NINJA TITLE
var MarineNinja, MarineNinja_img;

//creating variables for DISPLAYING FISH DURING GAME
var Octopus, Octopus_img;
var Nemo, Nemo_img;
var AngelFish, AngelFish_img;

//creating variables for WIN AND LOSE TEXT to display after game
var WinText, WinText_img;
var LoseText, LoseText_img;

//creating variable for "PLAY" ON THE PLAY BUTTON
var PlayButtonText, PlayButtonText_img;

//creating variables for THE FISH LIFELINE
var FishLife1, FishLife1_img;
var FishLife2, FishLife2_img;
var FishLife3, FishLife3_img;
var FishLife4, FishLife4_img;
var FishLife5, FishLife5_img;

//creating gameStates
var gameState = "Intro";

//creating variable for song
var IntroSong;

//creating variable for HOW TO PLAY LEVEL ONE Text
var HowToPlayLevelOne_img;

//creating variable for HOW TO PLAY LEVEL 1 title
var HowToPlayLevelOneTitle_img;

//creating ...
var diver;

function preload(){
  //loading all the sounds
  IntroSong = loadSound('songs/IntroSong.mp3');

  //loading variable for Play Button and Instructions Button
Playbutton_img = loadImage('assets/PLAYBUTTON.png');
InstructionsButton_img = loadImage('assets/InstructionsButton.png');

//loading variable for play text
PlayButtonText_img = loadImage('assets/PLAYTEXT.png');

//loading variable for instructions text
InstructionsText_img = loadImage('assets/InstructionsText.png');

//loading variable for Marine Ninja Title
MarineNinja_img = loadImage('assets/MARINENINJALOGO.png');

//loading variable for HOW TO PLAY LEVEL 1
HowToPlayLevelOne_img = loadImage('assets/INSTRUCTIONSFORLVL1.png');

//loading variable for HOW TO PLAY LEVEL 1 title
HowToPlayLevelOneTitle_img = loadImage('assets/HOWTOPLAYLVL1FINAL.png');

//loading variable for the STRAIGHT, STATIC diver image 
StraightStaticDiver_img = loadImage('assets/DiverImg4.png');

//loading variable for FLIPPED, STATIC diver image
FlippedStaticDiver_img = loadImage('assets/flippedDiver4.png');

//loading variable for STRAIGHT, DYNAMIC diver animation
StraightDynamicDiver_img = loadAnimation('assets/diverImg1.png','assets/diverImg2.png','assets/DiverImg3.png','assets/diverImg4.png','assets/DiverImg5.png','assets/DiverImg6.png', 'assets/DiverImg7.png','assets/DiverImg8.png')

//loading variable for FLIPPED, DYNAMIC diver animation
FlippedDynamicDiver_img = loadAnimation('assets/flippedDiver1.png','assets/flippedDiver1.png','assets/flippedDiver2.png','assets/flippedDiver3.png','assets/flippedDiver4.png','assets/flippedDiver5.png','assets/flippedDiver6.png','assets/flippedDiver7.png','assets/flippedDiver8.png');

  }

function setup() {
  //loading all background images
  IntroBg = loadImage('assets/INTROBG.png');
  GameBg = loadImage('assets/LEVEL1BG.jpg');

  //adding the diver animation
  diver = createSprite(50, 350);
  diver.addAnimation("StraightStatic", StraightStaticDiver_img);
  diver.addAnimation("StraightDynamic", StraightDynamicDiver_img);
  diver.addAnimation("FlippedStatic", FlippedStaticDiver_img);
  diver.addAnimation("FlippedDynamic", FlippedDynamicDiver_img);
  
createCanvas(1878,1000);
}

function draw() {
    background(IntroBg);
    // Setting Game States
    
    if(gameState === "Intro"){

      image(MarineNinja_img, 300, 150);
      if(frameCount % 100 === 0){
        gameState = "Options";
      }
      
    //StartIntroSong(); call this function for music

    }

    if(gameState === "Options"){
      MarineNinja_img.visible = false;

      //adding the image for the play and instructions buttons
    image(Playbutton_img,-250, 50);
    image(InstructionsButton_img, 900, 295);

    //adding the image for the play text
    image(PlayButtonText_img, -310, 180);

    //adding the image for the instructions text
    image(InstructionsText_img, 885, 325);

    if(keyWentDown(UP_ARROW)){
      gameState = "GameStart"
    }
    if(keyWentDown(DOWN_ARROW)){
      gameState = "HowToPlay"
    }       
}

if(gameState === "GameStart"){
  //setting the game background
  background(GameBg);
  //setting the static diver image
  diver.changeAnimation("StraightStatic", StraightStaticDiver_img);
  //forward movement
  

 }

if(gameState === "HowToPlay"){
  //loading the needed text messages to show the instructions
  image(HowToPlayLevelOne_img, 600,150);
  image(HowToPlayLevelOneTitle_img, -250,220); 

  //displaying the play button and its text
  image(Playbutton_img,-250, 450);
  image(PlayButtonText_img, -310, 580);

  //changing the game state to start when up arrow is pressed
  if(mousePressedOver(Playbutton_img)){
    gameState = "GameStart"
    }
  }
}

function StartIntroSong() {
  if (IntroSong.isPlaying()) {
    IntroSong.stop();
  } 
  else {
    IntroSong.play();
    
  }
}

function mousePressed(){
  if(a){}
}