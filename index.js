//array of questions (objects)
const questions = [
    // question1
    {
        question: "When you study for a test, would you rather",
        answers: {
            a: "a) read notes, read headings in a book, and look at diagrams and illustrations",
            b: "b) have someone ask you questions, or repeat facts silently to yourself",
            c: "c) write things out on index cards and make models or diagrams"
        }
    },
    // question2
    {
        question: "Which of these do you do when you listen to music?",
        answers: {
            a: "a) daydream (see things that go with the music)",
            b: "b) hum along",
            c: "c) move with the music, tap your foot, etc."
        }
    },
    // question3
    {
        question: "When you work at solving a problem do you",
        answers: {
            a: "a) make a list, organize the steps, and check them off as they are done",
            b: "b) make a few phone calls and talk to friends or experts",
            c: "c) make a model of the problem or walk through all the steps in your mind"
        }
    },
    // question4
    {
        question: "When you read for fun, do you prefer",
        answers: {
            a: "a) a travel book with a lot of pictures in it",
            b: "b) a mystery book with a lot of conversation in it",
            c: "c) a book where you answer questions and solve problems"
        }
    },
    // question5
    {
        question: "To learn how a computer works, would you rather",
        answers: {
            a: "a) watch a movie about it",
            b: "b) listen to someone explain it ",
            c: "c) take the computer apart and try to figure it out for yourself"
        }
    },
    // question6
    {
        question: "When you talk with others, do you",
        answers: {
            a: "a) find it difficult to listen for very long",
            b: "b) enjoy listening or get impatient to talk",
            c: "c) gesture and communicate with your hands"
        }
    },
    // question7
    {
        question: "What kind of restaurant would you rather not go to?",
        answers: {
            a: "a) one with the lights too bright",
            b: "b) one with the music too loud",
            c: "c) one with uncomfortable chairs"
        }
    },
    // question8
    {
        question: "Would you rather go to",
        answers: {
            a: "a) an art class",
            b: "b) a music class",
            c: "c) an exercise class"
        }
    },
    // question9
    {
        question: "When you tell a story, would you rather",
        answers: {
            a: "a) write it",
            b: "b) tell it out loud",
            c: "c) act it out"
        }
    },
    // question10
    {
        question: "When you teach other people, do you",
        answers: {
            a: "a) show them",
            b: "b) explain to them and maybe ask questions",
            c: "c) demonstrate and then ask them to try"
        }
    },
    // question11
    {
        question: "When you relax, you would rather",
        answers: {
            a: "a) watch TV, go to a movie, play a video game",
            b: "b) listen to the radio, play music, read, or talk with a friend",
            c: "c) play sports, work on cars, do arts & crafts, or build something"
        }
    },
    // question12
    {
        question: "When you contact people, you prefer",
        answers: {
            a: "a) face to face meetings",
            b: "b) calling on the telephone",
            c: "c) to talk while walking or while participating in an activity"
        }
    },
    // question13
    {
        question: "What are you most likely to do when you are angry?",
        answers: {
            a: "a) scowl",
            b: "b) shout or \"blow up\"",
            c: "c) stomp off and slam doors"
        }
    },
    // question14
    {
        question: "Which are you most likely to do when you are happy?",
        answers: {
            a: "a) grin",
            b: "b) shout with joy",
            c: "c) jump for joy"
        }
    },
    // question15
    {
        question: "If you were at a party, what would you be most likely to remember the next day?",
        answers: {
            a: "a) the faces of the people there, but not the names",
            b: "b) the names but not the faces",
            c: "c) the things you did and said while you were there"
        }
    },
    // question16
    {
        question: "When you see the word \"d - o - g\", what do you do first?",
        answers: {
            a: "a) think of a picture of a particular dog",
            b: "b) say the word \"dog\" to yourself silently",
            c: "c) sense the feeling of being with a dog (petting it, running with it, etc.)"
        }
    },
    // question17
    {
        question: "What is most distracting for you when you are trying to concentrate?",
        answers: {
            a: "a) visual distractions",
            b: "b) noises",
            c: "c) other sensations like, hunger, tight shoes, or worry"
        }
    },
    // question18
    {
        question: "When you aren't sure how to spell a word, which of these are you most likely to do?",
        answers: {
            a: "a) write it out to see if it looks right",
            b: "b) sound it out ",
            c: "c) write it out to see if it feels right"
        }
    },
    // question19
    {
        question: "Which are you most likely to do when standing in a long line at the movies?",
        answers: {
            a: "a) look at posters advertising other movies",
            b: "b) talk to the person next to you",
            c: "c) tap your foot or move around in some other way"
        }
    },
    // question20
    {
        question: "You have just entered a science museum, what will you do first?",
        answers: {
            a: "a) look around and find a map showing the locations of the various exhibits",
            b: "b) talk to a museum guide and ask about exhibits",
            c: "c) go into the first exhibit that looks interesting, and read directions later"
        }
    }
]

//array of results
const results = [
    // visual learner
    {
        letter: "a",
        learningStyle: "visual",
        styleInfo: "You learn by seeing and looking.",
        extraInfo: "visualLearner"
    },
    // auditory learner
    {
        letter: "b",
        learningStyle: "auditory",
        styleInfo: "You learn by hearing and listening.",
        extraInfo: "auditoryLearner"
    },
    // kinesthetic learner
    {
        letter: "c",
        learningStyle: "kinesthetic",
        styleInfo: "You learn by touching and doing.",
        extraInfo: "kinestheticLearner"
    }
]

let questionCounter = 0;
let countResults = [0, 0, 0];

function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

function hideAlert() {
    document.getElementById("alertUser").style.display = "none";
}

function showElement(id) {
    document.getElementById(id).style.display = "inline-block";
}

function showQuestion(currentQuestion) {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("answer1").innerHTML = questions[currentQuestion].answers.a;
    document.getElementById("answer2").innerHTML = questions[currentQuestion].answers.b;
    document.getElementById("answer3").innerHTML = questions[currentQuestion].answers.c;
}

function startQuiz() {
    // hide introduction
    hideElement("intro");
    // show questions and choices
    showElement("main");
    showQuestion(questionCounter);
}

function nextQuestion() {
    if (checkAnswered()) {
        //change question and corresponding answers
        questionCounter++;
        addProgress();
        updateResults();
        if (questionCounter < 20) {
            showQuestion(questionCounter);
        } else {
            hideElement("main");
            displayResults();
        }
    }
}

function checkAnswered() {
    //check there is a radio button ticked, else do not change question
    let type = document.getElementsByName('answers');
    for (i = 0; i < type.length; i++) {
        if (type[i].checked) {
            hideAlert();
            return true;
        }
    }
    // prompt user to answer question
    showElement("alertUser");
    return false;
}

function addProgress() {
    var bar = document.querySelector(".progress-bar");
    bar.style.width = (5 * questionCounter) + "%";
}

function updateResults() {
    // if the a radio button is checked then increment countResults[0] by 1
    // if the b radio button is checked then increment countResults[1] by 1
    // if the c radio button is checked then increment countResults[2] by 1
    let type = document.getElementsByName('answers');
    for (i = 0; i < type.length; i++) {
        if (type[i].checked) {
            countResults[i]++;
            // uncheck the button
            type[i].checked = false;
        }
    }
    // document.getElementById("checker").innerHTML = countResults;
}

function displayResults() {
    let max = 0;
    let i = 0;
    countResults.forEach((count, index) => {
        if (count > max) {
            max = count;
            i = index;
        }
    })
    document.getElementById("resultStatement").innerHTML = "You scored mostly " + results[i].letter +
        "'s. Your learning style is " + results[i].learningStyle + ". " + results[i].styleInfo;
    showElement(results[i].extraInfo);
    showElement("resultsarea");
}