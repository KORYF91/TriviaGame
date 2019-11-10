console.log("testing testing :  2 3 1");
// FIRST WE NEED TO CLAIM VARIABLES FOR THE GAME.
var counter = 120;
var counterRunning = false;
var timer;
var startBtn = $("#start");
// var stopBtn = $("#stop");
var correct = 0;
var incorrect = 0;
//HERE IS THE QUESTIONS TO BE ASKED AND ANSWERS STORED AS OBJECTS IN AN ARRAY TO BE CALLED ON FOR THE USER TO ANSWER. 
//THERE ARE ABOUT 20 QUESTIONS LEFT TO ENTER WITH VALUES.
var questions = [
    {
        question: "Y2K was believed to be the era of peace and harmony with techonolgy?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },
    {
        question: "Rocko from Rocko’s Modern Life and the Spongebob square pants are both voiced by the same voice actor?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },
    {
        question: "Michael Jackson sang backup vocals on “Do the Bartman.”?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "jennifer Aniston HATED her iconic 'The Rachel' haircut.?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Backstreet Boys got their name from Justin Timberlakes mom?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FLASE.'
    },
    {
        question: "The Return of Jafar was Disney's first direct-to-video sequel?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Totally Hair Barbie's hair was 1 foot long?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FLASE'
    },
    {
        question: "Beanie Babies were a success from their launch?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },
    {
        question: "The Rugrats have a star on the Hollywood Walk of Fame ?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "n 1999 the NSA banned Furbies from its headquarters in Maryland, over fears that they would hear top-secret conversations and then repeat them.?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Tamagotchi is a portmanteau of the Japanese words for egg and watch.",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Clarissa Explains It All almost got a spinoff series?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },
    {
        question: "There is a banned episode of Tiny Toons where Buster, Hamton, and Plucky get drunk, steal a police car, and die in a drunk driving accident?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Marlon Wayans gets residuals for Batman Forever, even though he does NOT appear in the movie?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Jessie was originally supposed to be addicted to speed in that classic episode of Saved by the Bell?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },
    {
        question: "JNCO is an abbreviation of 'judge none, choose one'",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Family Matters is actually a spinoff of Perfect Strangers?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "In 1991, DuckTales became the first American cartoon series to be shown in the Soviet Union since the start of the Cold War?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Harrison Ford turned down Steven Spielberg's offer for him to play Dr. Alan Grant in Jurassic Park?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'TRUE'
    },
    {
        question: "Nintendo intended to release another gaming console to surpass The Super Nitendo Consule?",
        choices: ['TRUE', 'FALSE'],
        correctAnswer: 'FALSE'
    },

]
// THIS FUNCTION BEGIN THE TIMER ALONG WITH DISPLAYS THE QUESTIONS AND ANSWERS TO THE ARRAY.
$(document).on("click", "#start", function () {
    timer = setInterval(countdown, 1000);
    counterRunning = true;
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
        //THIS METHOD IS RUNNING THROUGH THE INPUT FROM THE USER AND "MARKING CORRECT OR INCORRECT"
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
// HERE THE DATA PASSED TO THE VARIABLE CORRECT AND INCORRECT TO DISPLAY HOW THE USER DID. 
// I NEED TO ADD TO THE FUNCTION TO INCOPERATE ONCE THE TIMER IS DONE THE PAGE IS AUTOMATICALLY SCORED. AND RESULTS DISPLAYED.
function showResults() {
    $("#quiz-area").html("<h2>Correct: " + correct + "</h2>");
    $("#quiz-area").append("<h2> incorrect: " + incorrect + "</h2>")
}
//THIS HOW THE TIMER IS WORKING. THE COUNTER VAR IS DECREMENTING AND LINE 66 IS HOW THIS IS DISPLAYING ON THE PAGE.
function countdown() {
    
    if (counter > 0) {
        counter--;
    } else  {
        stop();
        alert('TIME IS UP');    
        for (var i = 0; i < questions.length; i++) {
            //THIS METHOD IS RUNNING THROUGH THE INPUT FROM THE USER AND "MARKING CORRECT OR INCORRECT"
            $.each($("input[name='question-" + i + "']:checked"), function () {
                if ($(this).val() === questions[i].correctAnswer) {
                    correct++
                }
                else {
                    incorrect++;
                }
            })
    
        };

        showResults();
        console.log("Time is up")
    } 
    
    $("#timer").html(counter);

}
//THIS FUNCTION STOPS THE TIME. THOUGH I AM THINKING THIS BUTTON SHOULD BE REMOVED. 
// $(document).on("click", "#stop", function () {
//     console.log("stop timer")
//     clearInterval(timer);
//     $("#timer").html(counter);
// })
// THIS FUNCTION ONLY RESETS THE TIMER, THIS NEEDS TO RESRT THE ENTIRE PAGE. 
$(document).on("click", "#reset", function () {
    counter = 120;
    $("#timer").html(counter);
    

    timer = setInterval(countdown, 1000);
    for (var i = 0; i < questions.length; i++) {
        $("#quiz-area").append("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#quiz-area").append("<input type='radio' name='question-" + i + "'value ='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
        }
    }
    $("#quiz-area").append("<button id='done'>Done</button>");
})


