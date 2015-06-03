$(document).ready(function() {

  var currentQuestion = 0;
  var currentScore = 0;
  var position = 1;

  var questions = [{
    question: "What is the smallest country in the world?",
    choice: ["The Vatican", "Zimbabwe", "The Philippine Islands","Nepal","Costa Rica"],
    correct: "The Vatican" },
                  {
    question: "Which country is the Durian Fruit native to?", 
    choice:  ["Australia", "Russia", "Thailand", "Brazil", "Greenland"],
    correct: "Thailand"},
                  {
    question: 'Which country has a municipality called "Saint-Louis-Du-Ha!-Ha!"',                
    choice: ["Germany", "France", "New Zealand", "Switzerland", "Canada"],
    correct: "Canada" },
                  {
    question: "What is the newest country in the world?",            
    choice: ["United States", "South Sudan", "Scotland", "Montenegro", "Quebec"],
    correct: "South Sudan" },
                   {
    question: "What country has the smallest population in the world?",                 
    choice: ["The Vatican", "Antigua", "The Pitcairn Islands", "Liechtenstein", "Monaco"],
    correct: "The Pitcairn Islands" }]
  
  var funFact = [
    "",
    "The Vatican is the smallest country in the world, it fits within the Italian Capital of Rome and is the center of the Catholic Church!  It is also known as the Holy See.",
    "The Durian Fruit is native to Thailand, and has a small that has been described as some to be similar to rotten onions, turpentine, and raw sewege. It has been banned from certain hotels and public transportation (including airports) in Southeast Asia",
    "Saint-Louis-du-Ha! Ha! is the only town in the world with two exclamation markets in its name. Ha-ha is an archaic French word for an unexpected obstacle or abruptly ending path.",
    "South Sudan gained independence from Sudan in July 2011 as the outcome of a 2005 peace deal that ended Africa's longest running civil war.",
    "The population of the Pitcairn Islands has fluctuated between 40 and 60 people in recent years."
  ]
   
   $(".content").on("click", "#enter",function() {
     score();
     currentQuestion++;
     nextQuestion();
     updateProgress();
     $(".fact").html("Fun Fact!<br>" + funFact[currentQuestion]);
   });
   
  function nextQuestion(){
    if(currentQuestion < 5) {
      $(".topQuestion").remove();
      $(".choiceBoxes").remove();
      var newQuestion = '<h2 class="topQuestion">'
      + questions[currentQuestion].question + '</h2>'
      +'<div class="choiceBoxes"><input type="radio" name="guess" class="guess" value="0">'
      +questions[currentQuestion].choice[0]   
      +'<br><input type="radio" name="guess" class="guess" value="1">'
      +questions[currentQuestion].choice[1]
      +'<br><input type="radio" name="guess" class="guess" value="2">'
      +questions[currentQuestion].choice[2]
      +'<br><input type="radio" name="guess" class="guess" value="3">'
      +questions[currentQuestion].choice[3] 
      +'<br><input type="radio" name="guess" class="guess" value="4">'
      +questions[currentQuestion].choice[4] + '</div>';
      }
    else {
       $(".finish").show(); 
       $(".form").hide();
       $(".currentScore").remove();
       $(".questionNumber").remove();
     }
     $(".form").html(newQuestion);
   }
   
  function score() {
    var answer=$("input[type='radio']:checked").val();
    if(answer == questions[currentQuestion].correct) {
        console.log('hooray!');
        currentScore++;
      }
    }           

  function updateProgress() {
    position++;
    $(".currentScore").html("<li>Number Correct: " + currentScore + "/5</li>");
    $(".questionNumber").html("<li>Question #" + position + "/5</li>");
  } 
  
 $(".tryAgain").click(function(e) {
    location.reload(false);
  });
});

//$(document).ready(function() {
//  console.log("ready!");
//
//function Quiz(element) {
//  this.element = element; // creates html element
//  this.init();
//}
//
//Quiz.prototype = {
//  init: function(){
//   var questions = [{
//    question: "What is the smallest country in the world?",
//    choice: ["The Vatican", "Zimbabwe", "The Philippine Islands","Nepal","Costa Rica"],
//    correct: "The Vatican" },
//                  {
//    question: "Which country is the Durian Fruit native to?", 
//    choice:  ["Australia", "Russia", "Thailand", "Brazil", "Greenland"],
//    correct: "Thailand"},
//                  {
//    question: 'Which country has a municipality called "Saint-Louis-Du-Ha!-Ha!"',                
//    choice: ["Germany", "France", "New Zealand", "Switzerland", "Canada"],
//    correct: "Canada" },
//                  {
//    question: "What is the newest country in the world?",            
//    choice: ["United States", "South Sudan", "Scotland", "Montenegro", "Quebec"],
//    correct: "South Sudan" },
//                   {
//    question: "What country has the smallest population in the world?",                 
//    choice: ["The Vatican", "Antigua", "The Pitcairn Islands", "Liechtenstein", "Monaco"],
//    correct: "The Pitcairn Islands" }],
//
//createQuestions: function(arrayOfQuestions) {
//  var currentQuestion = $();
//  var html = '';
//  
//  for (var i = 0; i < arrayOfQuestions.length; i++) {
//    currentQuestion = arrayOfQuestions[i];
//  for (var j = 0; j < currentQuestion.answers.length; j++) {
//    html += '<input type="radio" value="' + currentQuestion.answers[j] + '">';
//    }
//  }
//}
//  }
  
//  var funFact = [
//    "",
//    "The Vatican is the smallest country in the world, it fits within the Italian Capital of Rome and is the center of the Catholic Church!  It is also known as the Holy See.",
//    "The Durian Fruit is native to Thailand, and has a small that has been described as some to be similar to rotten onions, turpentine, and raw sewege. It has been banned from certain hotels and public transportation (including airports) in Southeast Asia",
//    "Saint-Louis-du-Ha! Ha! is the only town in the world with two exclamation markets in its name. Ha-ha is an archaic French word for an unexpected obstacle or abruptly ending path.",
//    "South Sudan gained independence from Sudan in July 2011 as the outcome of a 2005 peace deal that ended Africa's longest running civil war.",
//    "The population of the Pitcairn Islands has fluctuated between 40 and 60 people in recent years."
//  ];
//  var arrayCounter = 0;
//  var questionCounter = 1;
//  var numCorrect = 0;
//  
//  $(".submit").click(function() {
//    numCorrect++;
//    arrayCounter++;
//    questionCounter++;
//      
//    if(arrayCounter < 5){
//      
//
//      
//      $(".fact").html("Fun Fact!<br>" + funFact[arrayCounter]);
//      $(".topQuestion").html(question[arrayCounter]);
//      $(".questionNumber").html("<li>Question #" + questionCounter + "/5</li>");
//      $(".quizStatus").css("margin-left","10em");
//      }
//    else if (arrayCounter >= 5) {
//      $(".finish").show();
//      $(".form").hide();
//      }
//    });
//  var nextQuestion = function() {
//    $(".form").hide();
//    $()
//  }
//  $(".correct").html("<li>Number Correct: " + numCorrect + "/5</li>");
//  
//  $(".tryAgain").click(function(e) {
//    location.reload(false);
//  });
    
//  
//});