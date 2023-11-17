var answers = {};
var questionCount = 6;
var currentQuestion = 1;
var headerHeight = document.querySelector('.header').offsetHeight;
function submitAnswer(answerId) {
  var answer = document.getElementById(answerId).value;
  answers[answerId] = answer;
  document.getElementById(answerId).setAttribute("disabled", true);
  document.getElementById(answerId).nextElementSibling.style.display = "none";
  if (currentQuestion < questionCount) {
    currentQuestion++;
    var nextQuestion = "question".concat(currentQuestion);
    document.getElementById(nextQuestion).scrollIntoView({
      behavior: 'smooth'
    });
    window.scrollBy(0, -headerHeight);
  } else {
    document.getElementById('profile').style.display = "block";
  }
}
function createProfile() {
  var name = document.getElementById('name').value;
  var className = document.getElementById('className').value;
  if (name && className) {
    var profile = {
      name: name,
      className: className,
      answers: answers
    };
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert("Profile created successfully!");
    document.getElementById('viewProfileButton').style.display = "block";
    document.getElementById('profile').style.display = "none";
  } else {
    alert("Please enter your name and class name.");
  }
}
function viewProfile() {
  var userProfile = JSON.parse(localStorage.getItem('userProfile'));
  if (userProfile) {
    var profileText = "Name: ".concat(userProfile.name, "\nClass: ").concat(userProfile.className, "\n\nAnswers:\n");
    var allCorrect = true;
    for (var key in userProfile.answers) {
      var questionNumber = key.substring(6);
      var correctAnswer = getCorrectAnswer(questionNumber);
      profileText += "Question ".concat(questionNumber, ": ").concat(userProfile.answers[key], "\n");
      if (userProfile.answers[key] !== correctAnswer) {
        allCorrect = false;
        profileText += "Correct Answer: ".concat(correctAnswer, "\n\n");
      }
    }
    if (allCorrect) {
      alert(profileText);
    } else {
      alert("Some answers are incorrect. Review your answers below:\n\n".concat(profileText));
    }
  } else {
    alert("No profile found. Please create a profile first.");
  }
}
function getCorrectAnswer(questionNumber) {
  // Replace this with your correct answers for each question
  var correctAnswers = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
  };
  return correctAnswers[questionNumber];
}
