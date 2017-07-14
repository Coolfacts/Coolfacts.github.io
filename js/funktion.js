
    
function popup() {
	alert("umu u found me u lil detective, now find 2pac too"); 
}


$(document).ready(function(){
	//Ta fram
	$("#uwu1").hover(function(){
		$("#uwu2").show(500);
		$(this).hide();
	});

    $("#uwu2").hover(function(){
		$("#uwu3").show(500);
		$(this).hide();
	});

	$("#uwu3").hover(function(){
		$("#uwu4").show(500);
		$(this).hide();
	});

	$("#uwu4").hover(function(){
		$("#uwu5").show(500);
		$(this).hide();
	});

	$("#uwu5").hover(function(){
		$("#uwu6").show(500);
		$(this).hide();
	});
	
});
var randomNum = 0;

function showFact(){

 	lastFactSelect = "#fact" + randomNum;
 	$(lastFactSelect).hide();
 	randomNum = Math.floor((Math.random() * 43) + 1);

 	randomFactSelect = "#fact" + randomNum;
 	$(randomFactSelect).show();

 	document.getElementById("sound").innerHTML='<audio id="doot" src="doot.mp3"></audio>';

$(document).ready(function() {
    $("#doot").get(0).play();
});

}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlckGi_VvcFFOOn5q5Ts1_kpRlHWqnlS8",
    authDomain: "warning-cool-facts-ahead-boiii.firebaseapp.com",
    databaseURL: "https://warning-cool-facts-ahead-boiii.firebaseio.com",
    projectId: "warning-cool-facts-ahead-boiii",
    storageBucket: "warning-cool-facts-ahead-boiii.appspot.com",
    messagingSenderId: "235151067985"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("facts", function($firebaseArray) {
    var ref = firebase.database().ref().child("facts");
    return $firebaseArray(ref);
  });


// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("FactCtrl", function($scope, facts) {
    $scope.facts = facts;

    // Definera en kommentar med tom text och skribent
    $scope.fact = {
        text: ""

    };
    $scope.addFact = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
	    $scope.facts.$add($scope.fact);

	    // Tömmer texten i kommentarfältet
	    $scope.fact = {
	        text: ""

	    };

	};
	$scope.getFact = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
	    $scope.ShowFact = $scope.facts[0];
	    console.log($scope.ShowFact);
	    alert($scope.ShowFact);

	    // Tömmer texten i kommentarfältet
	    $scope.fact = {
	        text: ""

	    };
   };



 });






