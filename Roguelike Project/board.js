var Player = 0;
var Enemy = 0;
var Enemies = 0;
const white = "white";
const black = "black";
const player = "player";
const enemy = "enemy";
//Generates an array
var create = function(){
    var arr = [];
    for (var i=0;i<=7;i++) {
      var data = [];
        for (var j=0;j<=7;j++) {
           if(Math.round(Math.random()) == 1){
            data.push("white");
           }
           else{
            data.push("black");
           }
        }
      arr.push(data);
    }
    return arr;
};
//colors a box in white
//color a square in black
var drawColor = function(x, y, color){
  document.getElementById((x+1).toString()+(y+1).toString()).style.backgroundColor = color;
  if(color == 'pink'){
    Player = (y+1).toString()+(x+1).toString();
  }
  if(color == 'red'){
    Enemy = (y+1).toString()+(x+1).toString();
  }
};
//Draws the entire board
var draw = function(array){
    for (a = 0; a < 7; a ++ ) {
		for (b = 0; b < 7; b ++) {
		if(array[b][a] == "white"){
		  drawColor(a, b, 'white');
    }
    else if(array[b][a] == "player"){
      drawColor(a, b, 'pink');
    }
    else if(array[b][a] == 'enemy'){
      drawColor(a, b, "red");
    }
		else{
		  drawColor(a, b, "black");
	}}}
};
var startPlayer = function(){
  var i = (Math.floor(Math.random() * 7));
  var j = (Math.floor(Math.random() * 7));
  if(mainArr[i][j] == "white"){
    mainArr[i][j] = "player";
    x = false;
    return(true);
}}
var startEnemy = function(){
  var i = (Math.floor(Math.random() * 7));
  var j = (Math.floor(Math.random() * 7));
  if(mainArr[i][j] == "white"){
    mainArr[i][j] = "enemy";
    x = false;
    Enemies = Enemies + 1;
    return(true);
}}
var updatePlayer = function(){
  for (a = 0; a < 7; a ++ ) {
		for (b = 0; b < 7; b ++) {
		if(mainArr[b][a] == "player"){
		  mainArr[b][a] = 'white';
    }
	}}
  mainArr[(Player.toString().substring(0,1)) - 1][(Player.toString().substring(1,2)) - 1] = "player";
  draw(mainArr);
  if(Enemies == 0){
    console.log("Player wins!");
  }
}
var updateEnemy = function(){
  for (a = 0; a < 7; a ++ ) {
		for (b = 0; b < 7; b ++) {
		if(mainArr[b][a] == "enemy"){
		  mainArr[b][a] = 'white';
    }
	}}
  mainArr[(Enemy.toString().substring(0,1)) - 1][(Enemy.toString().substring(1,2)) - 1] = "enemy";
  draw(mainArr);
}
mainArr = create()
while(!startPlayer()){}
while(!startEnemy()){}
Enemies = 1;
draw(mainArr);
