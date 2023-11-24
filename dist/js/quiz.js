//variables
var quiz = [];
var url = window.location.href


//EASY
quiz[0] = new Question("", "What is the primary purpose of graphic design ?", "Communication", "Entertainment", "Physical fitness", "Cooking");
quiz[1] = new Question("", "Which color scheme uses three colors that are evenly spaced around the color wheel ?", "Triadic", "Monochromatic", "Analogous", "Complementary");
quiz[2] = new Question("", "What is the term for the space between lines of text in a design ?", "Leading", "Margins", "Padding", "Tracking");
quiz[3] = new Question("", "Which software is widely used for vector graphic design ?", "Adobe Illustrator", "Adobe Photoshop", "Sketch", "CorelDRAW");
quiz[4] = new Question("", "Who is the king of the Netherlands?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
quiz[5] = new Question("", "What does the term 'CMYK' stand for in the context of printing ?", "Cyan, Magenta, Yellow, Key", "Cool, Mellow, Yellow, Kind", "Color, Mix, Yield, Keep", "Creative, Modern, Youthful, Kinetic");
quiz[6] = new Question("", "What does the acronym 'UI' stand for in design ?", "User Interface", "Universal Illustration", "Ultimate Imagery", "Unseen Inspiration");
quiz[7] = new Question("", "In design, what is the purpose of a mood board ?", "Set the tone for a project", "Measure project progress", "Create a color palette", "Decorate the workspace");
quiz[8] = new Question("", "What is the golden ratio often used for in graphic design ?", "Achieving balance and harmony", "Creating catchy slogans", "Choosing font styles", "Selecting stock photos");
quiz[9] = new Question("", "What file format is best for images with a transparent background ?", "PNG", "JPG", "GIF", "TIFF");
quiz[10] = new Question("", "What does the term 'Hierarchy' refer to in graphic design ?", "Arranging elements to guide the viewer's eye", "Organizing files alphabetically", "Using bold fonts exclusively", "Creating 3D designs");
quiz[11] = new Question("", "The complement of blue is...", "Orange", "Yellow", "Red", "Orange Yellow");

//MEDIUM
quiz[12] = new Question("", "What design movement emphasized simplicity, functionality, and minimalism ?", "Bauhaus", "Rococo", "Cubism", "Art Deco");
quiz[13] = new Question("", "Which typeface category does 'Times New Roman' belong to ? ", "Serif", "Sans-serif", "Script", "Display");
quiz[14] = new Question("", "What does the term 'Lorem Ipsum' represent in design ?", "Filler text", "A color palette", " A design philosophy", "A famous designer");
quiz[15] = new Question("", "Who is known for creating the iconic 'I Love NY' logo ?", "Milton Glaser", "Paul Rand", "Saul Bass", "Stefan Sagmeister");
quiz[16] = new Question("", "What is the purpose of a style guide in graphic design ?", "Providing a set of rules for consistent design", "Documenting design trends", "Showcasing personal design preferences", "Recommending software updates");
quiz[17] = new Question("", "What is the purpose of a style guide in graphic design ?", "0", "2", "4");
quiz[18] = new Question("", "What is the term for the practice of combining different typefaces in a design ?", "Font Pairing", "Typographic Mix", "Typeface Fusion", "Fontology");
quiz[20] = new Question("", "What is the primary function of the 'Pen Tool' in graphic design software ?", "Creating shapes and paths", "Drawing freehand sketches", "Adjusting brightness and contrast", "Adding text to images");
quiz[21] = new Question("", "What is the role of a colour wheel in graphic design ?", "To select complementary colors", "To choose the most popular colours", "To organize colours based on their wavelength", "To mix paint colors");
quiz[22] = new Question("", "When a design calls for a spiraling text, this application will facilitate the job.", "Illustrator", "Bridge", "Flash", "Photoshop");
quiz[23] = new Question("", "What is the single most powerful tool of tradigital design ?", "Calques", "CMJN", "Photoshop", "Illustrator");

//HARD
quiz[24] = new Question("", "Who is considered the pioneer of Swiss Style graphic design ?", "Massimo Vignelli", "David Carson", "Neville Brody", "April Greiman");
quiz[25] = new Question("", "What is the psychological impact of the color blue in design ?", "Trust and calmness", "Energy and warmth", "Aggression", "Excitement");
quiz[26] = new Question("", "What is the term for the intentional stretching or condensing of letterforms in typography ?", "Scaling", "Distortion", "Tracking", "Kerning");
quiz[27] = new Question("", "In the context of design ethics, what does 'Accessibility' refer to ?", "Designing for people with disabilities", "Creating exclusive designs", "Protecting design ideas", "Using copyrighted materials");
quiz[28] = new Question("", "Who wrote the influential design book 'The Elements of Typographic Style' ?", "Robert Bringhurst", "Ellen Lupton", "Jan Tschichold", "Paul Rand");
quiz[29] = new Question("", "What is the term for the visual weight distributed in a design to create balance ?", "Proportion", "Symmetry", "Harmony", "Emphasis");
quiz[30] = new Question("", "What is the purpose of the 'Fold' in editorial design ?", "Enhancing readability in print", "Improving durability", "Creating a 3D effect", "Adding an extra page");
quiz[31] = new Question("", "Who is known for the iconic 'Hope' poster featuring Barack Obama?", "Shepard Fairey", "Banksy", "Obey Giant", "JR Artist");
quiz[32] = new Question("", "What is the significance of the 'Grid System' in design layouts ?", "Ensuring consistency and alignment", "Creating random patterns", "Generating optical illusions", "Enhancing color saturation");
quiz[33] = new Question("", "What design principle focuses on creating a path for the viewer's eyes through a design ?", "Movement", "Alignment", "Repetition", "Contrast");
quiz[34] = new Question("", "Who designed Apple's first logo ?", "Ron Wayne", "Glen Tahoma", "Paul Rand", "Art Chantry");
quiz[35] = new Question("", "Who designed the 'recycling logo' ?", "Gary Anderson", "Jason Elam", "George Blanda", "John Carney");

var randomQuestion;
var answers = [];
var levels = [];

document.addEventListener("DOMContentLoaded", function (event) {
    btnProvideQuestion();
});

function Question(image, question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
    this.image = image;
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
};

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function btnProvideQuestion() {

    var randomNumber = Math.floor(Math.random() * quiz.length);
    randomQuestion = quiz[randomNumber]; //getQuestion
    answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
    shuffle(answers);

    document.getElementById("question").innerHTML = randomQuestion.question;
    document.getElementById("image").src = randomQuestion.image;
    document.getElementById("answerA").value = answers[0];
    document.getElementById("answerA").innerHTML = answers[0];
    document.getElementById("answerB").value = answers[1];
    document.getElementById("answerB").innerHTML = answers[1];
    document.getElementById("answerC").value = answers[2];
    document.getElementById("answerC").innerHTML = answers[2];
    document.getElementById("answerD").value = answers[3];
    document.getElementById("answerD").innerHTML = answers[3];

}


function answerA_clicked() {
    var answerA = document.getElementById("answerA").value;
    checkAnswer(answerA);
}

function answerB_clicked() {
    var answerB = document.getElementById("answerB").value;
    checkAnswer(answerB);
}

function answerC_clicked() {
    var answerC = document.getElementById("answerC").value;

    checkAnswer(answerC);
}

function answerD_clicked() {
    var answerD = document.getElementById("answerD").value;

    checkAnswer(answerD);
}



function checkAnswer(answer) {
    if (answer == randomQuestion.rightAnswer) {
        alert("The answer is correct ! You can make your action");
        btnProvideQuestion();
        console.log(url)
        setTimeout(() => {
            window.location.href = url

        }, 1000);
    } else {
        alert("The answer is wrong...Unfortunately...");
        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    }

}