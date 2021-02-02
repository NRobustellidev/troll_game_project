/* 1/28/2021 Troll Game Project */

// Definition of the trollGame function which runs the game
function trollBattle() {
	// Initial prompt question for the user which gets stored in a variable
	let action = window.prompt("Your walking through a forest minding your own business when a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();
	
	// Switch statement to handle the initial players choice
	switch(action){
		case "FIGHT": {
			let skill = window.prompt("Are you a skilled fighter?(YES or NO)").toUpperCase();
			
			let strong = window.prompt("Are you stronger than the troll?(YES or NO)").toUpperCase();
			
			// If statement to analyze the users responses
			if(skill === "YES" || strong === "YES") {
				// The user responded yes to at least one of the prompts
				
				// Write the positive result to the document
				document.getElementById("result").innerHTML = "You can be either stronger or more skilled than the troll to survive.<br/>You live another day!";
				
				// Clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("win").play();
			} else {
				// The user responded no to both of the prompts
				// Write the negative result to the document
				document.getElementById("death").innerHTML = "You were not strong or skilled enough to fight the troll.<br/>Why did you fight the troll? You have died!";
				
				// Clear any winning messages from the document
				document.getElementById("result").innerHTML = "";
				
				// Play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}
		
		case "RUN": {
			let fast = window.prompt("Are you fast?(YES or NO)").toUpperCase;
			
			// If statement to analyze the users response
			if(fast === "YES"){
				// Write the positive result to the document
				document.getElementById("result").innerHTML = "You are faster than the troll and run away.<br/>You live another day!";
				
				// Clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("win").play();
			} else {
				// Write the negative result to the document
				document.getElementById("death").innerHTML = "You coward!<br/>If your going to run at least be fast.<br/> You have died!";
				
				// Clear any winning messages from the document
				document.getElementById("result").innerHTML = "";
				
				// Play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}
		
			
		case "BRIBE": {
			let money = window.prompt("You have to pay the troll-toll.\nDo you have any money?(YES or NO)").toUpperCase;
			// If statement to check if the player has money. If they say yes, continue asking how much
			if(money === "YES") {
				let amount = window.prompt("How much money do you have?\nPlease enter a numeric value.").toUpperCase();
				
				// Convert the response we get from a prompt to an integer
				amount = parseInt(amount);
				// Check to see if the amount is enough to survive
				if(amount >= 50) {
					// Write the positive result to the document
					document.getElementById("result").innerHTML = "Great job!<br/>The troll is satisfied with your bribe!<br/>You live another day!";
				
					// Clear any losing messages from the document
					document.getElementById("death").innerHTML = "";
				
					// Play the winning audio file
					document.getElementById("win").play();
				} else {
					// You don't have enough money
					
					// Write the negative result to the document
					document.getElementById("death").innerHTML = "The troll needs more money than that to be satisfied.<br/> You have died!";
				
					// Clear any winning messages from the document
					document.getElementById("result").innerHTML = "";
				
					// Play the losing audio file
					document.getElementById("lose").play();
				}
			} else {
				// You said no to having money, you lose
				
				// Write the negative result to the document
				document.getElementById("death").innerHTML = "What were you going to bribe with, your looks?.<br/> You have died!";
				
				// Clear any winning messages from the document
				document.getElementById("result").innerHTML = "";
				
				// Play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}
		
		default: {
			// The user has not entered a valid option for the prompt
			window.alert("You entered: " + action + ". Not a valid choice! Please try again!");
			trollBattle();
			break;
		}
	} // End of Switch Statement
}