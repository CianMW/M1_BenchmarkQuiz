//let q = 0
let quizNumber = 0
const displayQuestion = (q) => {
    let FirstQuestionNode = document.createElement("div")
    let questionText = document.createElement("h3")
        questionText.innerHTML = questions[q].question
        FirstQuestionNode.append(questionText)
        FirstQuestionNode.classList.add("current-question")
    document.getElementsByClassName("question-container")[0].append(FirstQuestionNode)

    let answerDiv = document.createElement("div")
        answerDiv.classList.add("possible-answers-container")
        document.getElementsByClassName("question-container")[0].appendChild(answerDiv)
    
    let answers = questions[q].possible_answers
    for (let i = 0; i < answers.length; i++) {
        let answerRadio = answers[i]
        //-- creating the radio button
        let newAnswerNode = document.createElement("INPUT")
            newAnswerNode.setAttribute("type","radio")
            newAnswerNode.setAttribute("name","possible-answer")
            newAnswerNode.setAttribute("value", answerRadio)
            newAnswerNode.id = answerRadio
        document.getElementsByClassName("possible-answers-container")[0].appendChild(newAnswerNode)
        // -- creating the label
        let newLabelNode = document.createElement("LABEL")
        let innerTextNode = document.createTextNode(answerRadio.toString())
            newLabelNode.appendChild(innerTextNode)
            newLabelNode.setAttribute("for", answerRadio)
            document.getElementsByClassName("possible-answers-container")[0].append(newLabelNode)
        
    } 
}

let totalCorrect = 0

const defineUserScore = () => {
  let scoreContainer = document.createElement("div")
      scoreContainer.classList.add("score-container")
      document.getElementsByTagName("main")[0].appendChild(scoreContainer)


  let currentAndMaxScore = document.createElement("div")
      currentAndMaxScore.classList.add("current-vs-total")
      currentAndMaxScore.innerHTML = `${totalCorrect} / ${totalQuestions}`


      document.getElementsByClassName("score-container")[0].appendChild(currentAndMaxScore)
}

const submitButton = () => {
  let newButtonNode = document.createElement("BUTTON")
      newButtonNode.innerHTML = "Next"
      newButtonNode.classList.add("next-question-button")
      newButtonNode.setAttribute("value", "next")


      document.getElementsByClassName("possible-answers-container")[0].appendChild(newButtonNode)
}





let questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      possible_answers: [
        "Central Processing Unit",
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      possible_answers: ["Static","Final", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      possible_answers: ["True","False",],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      possible_answers: ["False","True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      possible_answers: [".png", ".jpeg", ".gif",".svg"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      possible_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      possible_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
        "Nougat",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      possible_answers: ["120", "160","140", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      possible_answers: ["False","True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      possible_answers: ["Java","Python", "C", "Jakarta"],
    },
  ];

let totalQuestions = questions.length
  window.onload = () => {
    displayQuestion(0)
    defineUserScore()
  }