$(document).ready(function() {
  console.log("ready!");
  
  var question = [
    "What is the smallest country in the world?",
    "Which country is the Durian Fruit native to?",
    'Which country has a municipality called "Saint-Louis-Du-Ha!-Ha!"',
    "What is the newest country in the world?",
    "What country has the smallest population in the world?"
  ];

  
  var funFact = [
    "",
    "The Vatican is the smallest country in the world, it fits within the Italian Capital of Rome and is the center of the Catholic Church!  It is also known as the Holy See.",
    "The Durian Fruit is native to Thailand, and has a small that has been described as some to be similar to rotten onions, turpentine, and raw sewege. It has been banned from certain hotels and public transportation (including airports) in Southeast Asia",
    "Saint-Louis-du-Ha! Ha! is the only town in the world with two exclamation markets in its name. Ha-ha is an archaic French word for an unexpected obstacle or abruptly ending path.",
    "South Sudan gained independence from Sudan in July 2011 as the outcome of a 2005 peace deal that ended Africa's longest running civil war.",
    "The population of the Pitcairn Islands has fluctuated between 40 and 60 people in recent years."
  ];
  var arrayCounter = 0;
  var questionCounter = 1;
  
  $(".submit").click(function() {
    arrayCounter++;
    questionCounter++;
      
    if(arrayCounter < 5){
      $(".fact").html("Fun Fact!<br>" + funFact[arrayCounter]);
      $(".topQuestion").html(question[arrayCounter]);
      $(".questionNumber").html("<li>Question #" + questionCounter + "/5</li>");
      $(".quizStatus").css("margin-left","10em");
      }
    else if (arrayCounter >= 5) {
      $(".finish").show();
      $(".form").hide();
      }
    });
  
  $(".tryAgain").click(function(e) {
    location.reload(false);
  });
    
  
});