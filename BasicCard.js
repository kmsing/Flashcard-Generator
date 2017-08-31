var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;


function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var firstPresidentCard = new BasicCard("Who was the 23rd president of the United States?", "Benjamin Harrison");
var baseballCard = new BasicCard("What is the most common type of pitch thrown in baseball?", "fastball"); 
var avocadoCard = new BasicCard("The avocado is a tree that is thought to have originated in what country?", "Mexico");
var appleCard = new ClozeCard("Apples float in water because they are what percent air?", "25");
var lakeCard = new ClozeCard("What's the largest freshwater lake in the world?", "Lake Superior"); 

cards.push(firstPresidentCard);
cards.push(baseballCard);
cards.push(avocadoCard);

function flashCards() {
	
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("Correct!");
						cardCount ++
						flashCards();
					} 
					else {
						
						console.log("Incorrect. ANSWER:  " + cards[cardCount].back);
						cardCount ++
						flashCards();
					}

				});

	} 


}//studyCards function

flashCards();