var dollars = 0;

function cookieClick(number){
    dollars = dollars + number;
    document.getElementById("dollars").innerHTML = dollars;
};

var homeless = 0;
var workingclass = 0;
var gettos = 0;
var adv = 0;
var robot = 0;

function buyWorker(workertype) {
  var workerValue = 10;
  var workerUnits = 1;

  if (workertype == 'workingclass') {
   var workerValue = 50;
    var workerCost = Math.floor(workerValue * Math.pow(1.1,workingclass));     //works out the cost of this cursor
    if(dollars >= workerCost){                                   //checks that the player can afford the cursor
        workingclass = workingclass + workerUnits;                                   //increases number of cursors
    	dollars = dollars - workerCost;                          //removes the cookies spent
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,workingclass));       //works out the cost of the next cursor
    document.getElementById('WorkingClassCost').innerHTML = nextCost;  //updates the cursor cost for the user
  }

  else if (workertype == 'advanced') {
   var workerValue = 500;
    var workerCost = Math.floor(workerValue * Math.pow(1.1,adv));     //works out the cost of this cursor
    if(dollars >= workerCost){                                   //checks that the player can afford the cursor
        adv = adv + workerUnits;                                   //increases number of cursors
      dollars = dollars - workerCost;                          //removes the cookies spent
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,adv));       //works out the cost of the next cursor
    document.getElementById('AdvancedCost').innerHTML = nextCost;  //updates the cursor cost for the user
  }

  else if (workertype == 'getto') {
   var workerValue = 1500;
    var workerCost = Math.floor(workerValue * Math.pow(1.1,gettos));     //works out the cost of this cursor
    if(dollars >= workerCost){                                   //checks that the player can afford the cursor
        gettos = gettos + workerUnits;                                   //increases number of cursors
      dollars = dollars - workerCost;                          //removes the cookies spent
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,gettos));       //works out the cost of the next cursor
    document.getElementById('gettoCost').innerHTML = nextCost;  //updates the cursor cost for the user
  }

  else {
    var workerCost = Math.floor(workerValue * Math.pow(1.1,homeless));     //works out the cost of this cursor
    if(dollars >= workerCost){                                   //checks that the player can afford the cursor
        homeless = homeless + workerUnits;                                   //increases number of cursors
    	dollars = dollars - workerCost;                          //removes the cookies spent
        document.getElementById('dollars').innerHTML = dollars;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(workerValue * Math.pow(1.1,homeless));       //works out the cost of the next cursor
    document.getElementById('HomelessCost').innerHTML = nextCost;  //updates the cursor cost for the user
  }

  showWorkers(); // prints out all stats

};

function showWorkers() {
  document.getElementById("stats").innerHTML = "";
  if (homeless != 0) {
        document.getElementById("stats").innerHTML += "Homeless: " + homeless + "<br />";
  }
  if (workingclass != 0) {
        document.getElementById("stats").innerHTML += "Normal: " + workingclass + "<br />";
  }
  if (adv != 0) {
        document.getElementById("stats").innerHTML += "Advanced: " + adv + "<br />";
  }
  if (gettos != 0) {
        document.getElementById("stats").innerHTML += "Getto: " + gettos + "<br />";
  }
}


window.setInterval(function(){

	cookieClick(homeless);

}, 800);

window.setInterval(function(){

	cookieClick(workingclass*3);

}, 1000);

window.setInterval(function(){

	cookieClick(advanced*6);

}, 1200);

window.setInterval(function(){

	cookieClick(gettos*10);

}, 1400);
