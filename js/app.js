$(document).ready(function() {

  var currentScore = 0;
  var position = 1;

  var quiz = [{
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
    funFact: "The population of the Pitcairn Islands has fluctuated between 40 and 60 people in recent years."              },
                   {
    question: 'Which Country was known as having "the most boring flag in the world"',
    choice:  ["Ireland", "New Zealand", "Russia", "Greenland", "Libya"],
    correct: 4,
    funFact: "Until 2011, Libya's flag was solid green with no insignia or design"               },
                   {
    question: "Where was the crossaint created?",
    choice: ["China", "Egypt", "France", "Austria", "Greece"],
    correct: 3,
    funFact:  "The kipferl, ancestor of the crossaint, has been documented in Austria as far back as the 13th century"             },
                   {
    question: "Which of these countries does not have a capital city?",
    choice: ["Nauru", "Canton", "Western Sahara", "Belarus", "Iceland"],
    correct: 0,
    funFact:  "Nauru is an island in the Pacific ocean which gained its independence in 1968 with no capital city"             },
                   {
    question: "Where were french fries invented?",
    choice: ["France", "Belgium", "United States", "Switzerland", "Poland"],
    correct: 1,
    funFact: "The origin of the french fry can be traced back to the late 1600's in Belgium, where there are records of potatoes being fried"              },
                   {
    question: "What is the largest country in the world by landmass?",
    choice: ["China", "Australia", "Russia", "Canada", "Chile"],
    correct: 2,
    funFact: "Russia is the largest country in the world, covering 6.6 million square miles"              },
                   {
    question: "Which Country has the most populated city in the world",
    choice: ["China", "Venezuela", "India", "Egypt", "Japan"],
    correct: 4,
    funFact: "Tokyo is the world's largest city, with 38 million inhabitants" },
                   {
    question: "In which country is it considered back luck to wish someone Happy Birthday early?",
    choice: ["Colombia", "Papau New Guinea", "Sri Lanka", "Germany", "Romania"],
    correct: 3,
    funFact: "The German saying goes, 'Du sollst den Tag nicht vor dem Abend loben,' or, 'You shouldn't praise the day before the night.' The idea is not to be sure of something till it happens, because it might not."            },
                   {
    question: "Which country has been tagged as 'the world's most bombed country'?",
    choice: ["Japan", "Laos", "Belarus", "Tunisia", "Mexico"],
    correct: 1,
    funFact:  "Over 2 million bombs were dropped in Laos during the Vietnam war, inspiring the name 'The world's most bombed country'"         },
                   {
    question: "Which country is known as 'The Babel Tower of the world'?",
    choice: ["Nigeria", "United States", "Burma", "Norway", "Chad"],
    correct: 4,
    funFact: "Chad is home to up to 200 ethnic groups"              },
                   {
    question: "Which Country has the largest freshwater lake in the world?",
    choice: ["Siberia", "Israel", "Uganda", "Iceland", "Taiwan"],
    correct: 0,
    funFact: "Lake Baikal in Siberia is the largest lake in the world, it holds 20% of the world's fresh surface water."             },
                   {
    question: "Which country is home to the world's heaviest consumers of beer?",
    choice: ["Japan", "Czech Republic", "Romania", "Germany", "Australia"],
    correct: 1,
    funFact:  "Consumption of beer in the Czech Republic is 148 litres per capita."             },
                   {
    question: "Which country has produced two Nobel Prize winners from the same street?",
    choice: ["Thailand", "Hungary", "Slovenia", "South Africa", "Chile"],
    correct: 3,
    funFact:  "Nelson Mandela and Archbishop Desmond Tutu both had houses on the street of Vilakazi, located in Soweto, South Africa."             },
                   {
    question: "Which country has the highest capital city in the world by altitude?",
    choice: ["Nepal", "Tibet", "Bolivia", "Tanzania", "Laos"],
    correct: 2,
    funFact: "La Paz in Bolivia has an altitude of 11,942 feet."              },
                   {
    question: "Which country uses a currency called Balboas?",
    choice: ["Panama", "Fiji", "Manchuria", "Slovakia", "Gabon"],
    correct: 0,
    funFact: "The US Dollar is also an official currency in Panama"              },
                   {
    question: "Which country holds the world record for largest dining table?",
    choice: ["Spain", "Britain", "Lisbon", "Romania", "Portugal"],
    correct: 4,
    funFact: "There were around 16,000 people served lunch at a table in Portugal during Vasco da Gama Bridge's inauguration in Lisbon"              }
                  ]
  
  var randomQuestionNumber = Math.floor((Math.random() * 19) + 1 );
                          
  var currentQuestion = quiz[randomQuestionNumber];
  nextQuestion(currentQuestion);
   
   $(".content").on("click", "#enter",function(e) {
     e.preventDefault();
     var randomQuestionNumber = Math.floor((Math.random() * 19) + 1 );
     score();
     updateProgress();
     var funFact = currentQuestion.funFact;
      $(".fact").html("Fun Fact!<br>" + funFact);
     currentQuestion = quiz[randomQuestionNumber];
     nextQuestion(currentQuestion);
   });
   
  function nextQuestion(myQuestion){
    if(position < 6) {
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