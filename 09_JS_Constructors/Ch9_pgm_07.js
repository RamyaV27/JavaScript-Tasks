// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];

    this.addOption = function (option) {
        this.options.push(option);
    };

    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); 


question1.showQuestion();


var question2 = new QuizQuestion(
    "What is the largest ocean on Earth?",
    "Pacific"
);

question2.addOption("Atlantic");
question2.addOption("Indian");
question2.addOption("Arctic");
question2.addOption("Pacific");

var question3 = new QuizQuestion(
    "Who developed the theory of relativity?",
    "Albert Einstein"
);

question3.addOption("Isaac Newton");
question3.addOption("Galileo Galilei");
question3.addOption("Albert Einstein");
question3.addOption("Stephen Hawking");



/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */