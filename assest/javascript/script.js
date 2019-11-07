console.log("testing testing :  2 3 1");
// FIRST WE NEED TO CLAIM VARIABLES FOR THE GAME.
var counter = 180;
var timer;
var startBtn = $("#start");
var stopBtn = $("#stop");
var correct = 0;
var incorrect = 0;
//HERE IS THE QUESTIONS TO BE ASKED AND ANSWERS STORED AS OBJECTS IN AN ARRAY TO BE CALLED ON FOR THE USER TO ANSWER. 
//THERE ARE ABOUT 20 QUESTIONS LEFT TO ENTER WITH VALUES.
var questions = [
    {
        question: "color of sky?",
        choices: ['blue', 'red', 'green'],
        correctAnswer: 'blue'
    },
    {
        question: "color of sky?",
        choices: ['blue', 'red', 'green'],
        correctAnswer: 'blue'
    }

]
// THIS FUNCTION BEGIN THE TIMER ALONG WITH SHOWING THE QUESTIONS AND ANSWERS TO THE ARRAY.
$(document).on("click", "#start", function () {
    timer = setInterval(countdown, 1000);
    for (var i = 0; i < questions.length; i++) {
        $("#quiz-area").append("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#quiz-area").append("<input type='radio' name='question-" + i + "'value ='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
        }
    }
    $("#quiz-area").append("<button id='done'>Done</button>");
})
// THIS FUNCTION WILL ACTIVATED ONCE THE USER AS ANSWERED ALL QUESTIONS AND TAKE ALL INPUT 
$(document).on("click", "#done", function () {
    //use for loop to check answers.
    for (var i = 0; i < questions.length; i++) {
        //THIS FUNCTION IS RUNNING THROUGH THE INPUT FROM THE USER AND "MARKING CORRECT OR INCORRECT"
        $.each($("input[name='question-" + i + "']:checked"), function () {
            if ($(this).val() === questions[i].correctAnswer) {
                correct++
            }
            else {
                incorrect++;
            }
        })

    };
//HERE IS THERE ORIGINAL EACH FUNCTION TO CHECK THE ANSWER, WITH THE HELP OF MY TUTOR WE WORKED OUT A BETTER "DRYER" FORMULA.
    // $.each($("input[name='question-0']:checked"), function () {
    //     if ($(this.val() === questions[0].correctAnswer)) {
    //         correct++
    //     }
    //     else {
    //         incorrect++;
    //     }
    // })
    showResults();
})
// HERE WE USE THE DATA PASSED THE VAR CORRECT AND INCORRECT TO DISPLAY HOW THE USER DID. 
// I NEED TO ADD TO THE FUNCTION TO INCOPERATE ONCE THE TIMER IS DONE THE PAGE IS AUTOMATICALLY SCORED. AND RESULTS DISPLAYED.
function showResults() {
    $("#quiz-area").html("<h2>Corrects: " + correct + "</h2>");
    $("#quiz-area").append("<h2> incorrects: " + incorrect + "</h2>")
}
//THIS HOW THE TIMER IS WORKING. THE COUNTER VAR IS DECREMENTING AND LINE 66 IS HOW THIS IS DISPLAYING ON THE PAGE.
function countdown() {
    counter--;
    $("#timer").html(counter);
    if (counter == 0) {
        console.log("Time is up")
    }
}
//THIS FUNCTION STOPS THE TIME. THOUGH I AM THINKING THIS BUTTON SHOULD BE REMOVED. 
$(document).on("click", "#stop", function () {
    console.log("stop timer")
    clearInterval(timer);
    $("#timer").html(counter);
})
// THIS FUNCTION ONLY RESETS THE TIMER, THIS NEEDS TO RESRT THE ENTIRE PAGE. 
$(document).on("click", "#restart", function () {
    counter = 50;
    $("#timer").html(counter);
})

