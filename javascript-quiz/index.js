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
        question: "You have just entered a science museum, what will you do first?",
        answers: {
            a: "a) look around and find a map showing the locations of the various exhibits",
            b: "b) talk to a museum guide and ask about exhibits",
            c: "c) go into the first exhibit that looks interesting, and read directions later"
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
        question: "Which are you most likely to do when you are happy?",
        answers: {
            a: "a) grin",
            b: "b) shout with joy",
            c: "c) jump for joy"
        }
    },
    // question10
    {
        question: "If you were at a party, what would you be most likely to remember the next day?",
        answers: {
            a: "a) the faces of the people there, but not the names",
            b: "b) the names but not the faces",
            c: "c) the things you did and said while you were there"
        }
    },
    // question11
    {
        question: "When you see the word \"d - o - g\", what do you do first?",
        answers: {
            a: "a) think of a picture of a particular dog",
            b: "b) say the word \"dog\" to yourself silently",
            c: "c) sense the feeling of being with a dog (petting it, running with it, etc.)"
        }
    },
    // question12
    {
        question: "When you tell a story, would you rather",
        answers: {
            a: "a) write it",
            b: "b) tell it out loud",
            c: "c) act it out"
        }
    },
    // question13
    {
        question: "What is most distracting for you when you are trying to concentrate?",
        answers: {
            a: "a) visual distractions",
            b: "b) noises",
            c: "c) other sensations like, hunger, tight shoes, or worry"
        }
    },
    // question14
    {
        question: "What are you most likely to do when you are angry?",
        answers: {
            a: "a) scowl",
            b: "b) shout or \"blow up\"",
            c: "c) stomp off and slam doors"
        }
    },
    // question15
    {
        question: "When you aren't sure how to spell a word, which of these are you most likely to do?",
        answers: {
            a: "a) write it out to see if it looks right",
            b: "b) sound it out ",
            c: "c) write it out to see if it feels right"
        }
    },
    // question16
    {
        question: "Which are you most likely to do when standing in a long line at the movies?",
        answers: {
            a: "a) look at posters advertising other movies",
            b: "b) talk to the person next to you",
            c: "c) tap your foot or move around in some other way"
        }
    }
]

//array of results
const results = [
    // visual learner
    {
        letter: "a",
        learningStyle: "visual",
        styleInfo: "You learn by seeing and looking."
    },
    // auditory learner
    {
        letter: "b",
        learningStyle: "auditory",
        styleInfo: "You learn by hearing and listening."
    },
    // kinesthetic learner
    {
        letter: "c",
        learningStyle: "kinesthetic",
        styleInfo: "You learn by touching and doing."
    }
]


// show question
// function showQuestions(currentQuestion) {
//     document.getElementById("question").innerHTML = questions[currentQuestion].question;
//   }