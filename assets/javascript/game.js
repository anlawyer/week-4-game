 $(document).ready(function() {
 	// initialize game/reset random numbers
 	var numToGuess;
 	var score;
 	var crystal1;
 	var crystal2;
 	var crystal3;
 	var crystal4;
 	var numWin = 0;
 	var numLoss = 0;

	var reset = function() {
		score = 0;
 		numToGuess = Math.floor(Math.random() * 101) + 19;
 		crystal1 = Math.floor(Math.random() * 11) + 1;
	 	crystal2 = Math.floor(Math.random() * 11) + 1;
	 	crystal3 = Math.floor(Math.random() * 11) + 1;
	 	crystal4 = Math.floor(Math.random() * 11) + 1;

 		$(".goalNum").html(numToGuess);
 	};
 	
 	reset();

 	$(".crystal-1").on("click", function() {
 		score += crystal1;
 		$(".score").html(score);

 		if(numToGuess === score){
 			score = 0;
	 		numWin += 1;
	 		addWin();
 		};

 		if(score > numToGuess) {
 			score = 0;
	 		numLoss += 1;
	 		addLoss();
 		};
 	});

 	 $(".crystal-2").on("click", function() {
 		score += crystal2;
 		$(".score").html(score);

 		if(numToGuess === score){
 			score = 0;
	 		numWin += 1;
	 		addWin();
 		};

 		if(score > numToGuess) {
 			score = 0;
	 		numLoss += 1;
	 		addLoss();
 		};
 	});

 	$(".crystal-3").on("click", function() {
		score += crystal3;
		$(".score").html(score);

		if(numToGuess === score){
			score = 0;
	 		numWin += 1;
	 		addWin();
 		};

 		if(score > numToGuess) {
 			score = 0;
	 		numLoss += 1;
	 		addLoss();
 		};
 	});

 	$(".crystal-4").on("click", function() {
		score += crystal4;
		$(".score").html(score);

		if(numToGuess === score){
	 		numWin += 1;
	 		addWin();
 		};

 		if(score > numToGuess) {
	 		numLoss += 1;
	 		addLoss();
 		};
 	});

 	function addWin() {
 		$(".numWin").html(numWin);
 		$(".score").html(0);
 		alert('You win!');
 		reset();
 	};

 	function addLoss() {
 		$(".numLoss").html(numLoss);
 		$(".score").html(0);
 		alert('You lose!');
 		reset();
 	};

});