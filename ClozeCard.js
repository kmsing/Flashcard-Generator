var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText;


function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze
}

var firstPresidentCard = new ClozeCard("The 23rd president of the United States was ...?", "Benjamin Harrison");
var baseballCard = new ClozeCard("... is the most common type of pitch thrown in baseball?", "fastball"); 
var avocadoCard = new ClozeCard("The avocado is a tree that is thought to have originated in the country of ...?", "Mexico");
var appleCard = new ClozeCard("Apples float in water because they are ... percent air.", "25");
var lakeCard = new ClozeCard("The largest freshwater lake in the world is ...", "Lake Superior"); 

cards.push(firstPresidentCard);
cards.push(baseballCard);
cards.push(avocadoCard);

ClozeCard.prototype.full = function(){
	clozeDeleted = this.cloze
	clozeText = this.text
	clozeText = clozeText.replace("...", clozeDeleted);
	console.log(closeText);
}

function flashCards() {
	
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("Correct!");
						cardCount ++
						flashCards();
					} 
					else {
						
						console.log("Incorrect. ANSWER:  " + cards[cardCount].full);
						cardCount ++
						flashCards();
					}

				});

	} 


}

flashCards();