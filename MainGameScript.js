var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var homeless = 0;
var workingclass = 0;
var gettos = 0;
var traders = 0;
var robot = 0;

function buyWorker(workertype) {
  var workerValue = 10;
  var workerUnits = 1;

  if (workertype == 'workingclass') {
   var workerValue = 20;
   var workerUnits = 3;
    var workerCost = Math.floor(workerValue * Math.pow(1.1,workingclass));     //works out the cost of this cursor
    if(cookies >= workerCost){                                   //checks that the player can afford the cursor
        workingclass = workingclass + workerUnits;                                   //increases number of cursors
    	cookies = cookies - workerCost;                          //removes the cookies spent
        document.getElementById('homeless').innerHTML = workingclass;  //updates the number of cursors for the user
        document.getElementById('dollar').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,workingclass));       //works out the cost of the next cursor
    document.getElementById('WorkerCost').innerHTML = nextCost;  //updates the cursor cost for the user
    document.getElementById("stats").innerHTML = "andre: <span id='workingclass'></span>"
  }

  else {
    var workerCost = Math.floor(workerValue * Math.pow(1.1,homeless));     //works out the cost of this cursor
    if(cookies >= workerCost){                                   //checks that the player can afford the cursor
        homeless = homeless + workerUnits;                                   //increases number of cursors
    	cookies = cookies - workerCost;                          //removes the cookies spent
        document.getElementById('homeless').innerHTML = homeless;  //updates the number of cursors for the user
        document.getElementById('dollar').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,homeless));       //works out the cost of the next cursor
    document.getElementById('WorkerCost').innerHTML = nextCost;  //updates the cursor cost for the user
    document.getElementById("stats").innerHTML = "Homeless: <span id='homeless'></span>"
  }

};

window.setInterval(function(){

	cookieClick(homeless);

}, 800);

window.setInterval(function(){

	cookieClick(workingclass);

}, 800);
