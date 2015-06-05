$(document).ready(function() {

  var currentQuestion = 0;
  var currentScore = 0;
  var position = 1;

  var questions = [{
    question: "What is the smallest country in the world?",
    choice: ["The Vatican", "Zimbabwe", "The Philippine Islands","Nepal","Costa Rica"],
    correct: 0,
    funFact: "The Vatican fits within the Italian Capital of Rome and is the center of the Catholic Church! It is also known as the Holy See."},
                  {
    question: "Which country is the Durian Fruit native to?", 
    choice:  ["Australia", "Russia", "Thailand", "Brazil", "Greenland"],
    correct: 2,
    funFact: "The Durian Fruit is native to Thailand and has a smell that has been described by some to be similar to rotten onions, turpentine, and raw sewege. It has been banned from certain hotels and public transportation (including airports) in Southeast Asia"},
                  {
    question: 'Which country has a municipality called "Saint-Louis-Du-Ha!-Ha!"',                
    choice: ["Germany", "France", "New Zealand", "Switzerland", "Canada"],
    correct: 4 ,
    funFact:"Saint-Louis-du-Ha! Ha! is in Quebec, Canada, and is the only town in the world with two exclamation marks in its name. Ha-ha is an archaic French word for an unexpected obstacle or abruptly ending path. "             },
                  {
    question: "What is the newest country in the world?",            
    choice: ["United States", "South Sudan", "Scotland", "Montenegro", "Quebec"],
    correct: 1,
    funFact: "South Sudan gained independence from Sudan in July 2011 as the outcome of a 2005 peace deal that ended Africa's longest running civil war."},
                   {
    question: "What country has the smallest population in the world?",                 
    choice: ["The Vatican", "Antigua", "The Pitcairn Islands", "Liechtenstein", "Monaco"],
    correct: 2,
    funFact: "The population of the Pitcairn Islands has fluctuated between 40 and 60 people in recent years."              }]
  var counter = 0;
  var currentQuestion = questions[counter];
  nextQuestion(currentQuestion);
   
   $(".content").on("click", "#enter",function(e) {
     e.preventDefault();
     score();
     var funFact = currentQuestion.funFact;
     counter++;
     currentQuestion = questions[counter];
     nextQuestion(currentQuestion);
     updateProgress();
      $(".fact").html("Fun Fact!<br>" + funFact);
   });
   
  function nextQuestion(myQuestion){
    if(counter < 5) {
      $(".topQuestion").remove();
      $(".choiceBoxes").remove();
      var newQuestion = '<h2 class="topQuestion">'
      + myQuestion.question + '</h2>'
      +'<div class="choiceBoxes"><input type="radio" name="guess" class="guess" value="0">'
      +myQuestion.choice[0]   
      +'<br><input type="radio" name="guess" class="guess" value="1">'
      +myQuestion.choice[1]
      +'<br><input type="radio" name="guess" class="guess" value="2">'
      +myQuestion.choice[2]
      +'<br><input type="radio" name="guess" class="guess" value="3">'
      +myQuestion.choice[3] 
      +'<br><input type="radio" name="guess" class="guess" value="4">'
      +myQuestion.choice[4] + '</div>';
     
      }
    else {
      $(".finish").show(); 
      $(".form").hide();
      $(".currentScore").hide();
      $(".questionNumber").hide();
      $(".finalScore").html("Congratulations on completing the Quiz! Your final score is " + currentScore + "/5");
     }
     $(".form").html(newQuestion);
   }
   
  function score() {
    var answer=$("input[type='radio']:checked").val();
    if(answer == currentQuestion.correct) {
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