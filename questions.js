let answers = {};
let questionCount = 5;
let currentQuestion = 1;
const headerHeight = document.querySelector('.sticky').offsetHeight;

function submitAnswer(answerId) {
    const answer = document.getElementById(answerId).value;
    answers[answerId] = answer;
    document.getElementById(answerId).setAttribute("disabled", true);
    document.getElementById(answerId).nextElementSibling.style.display = "none";

    if (currentQuestion < questionCount) {
        currentQuestion++;
        const nextQuestion = `question${currentQuestion}`;
        document.getElementById(nextQuestion).scrollIntoView({ behavior: 'smooth' });
        window.scrollBy(0, -headerHeight);
    } else {
        document.getElementById('profile').style.display = "block";
    }
}

function createProfile() {
    const name = document.getElementById('name').value;
    const className = document.getElementById('className').value;
    
    if (name && className) {
        const profile = {
            name,
            className,
            answers,
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
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (userProfile) {
        let profileText = `Name: ${userProfile.name}\nClass: ${userProfile.className}\n\nAnswers:\n`;
        let allCorrect = true;

        for (const key in userProfile.answers) {
            const questionNumber = key.substring(6);
            const correctAnswer = getCorrectAnswer(questionNumber);
            profileText += `Question ${questionNumber}: ${userProfile.answers[key]}\n`;

            if (userProfile.answers[key] !== correctAnswer) {
                allCorrect = false;
                profileText += `Correct Answer: ${correctAnswer}\n\n`;
            }
        }

        if (allCorrect) {
            alert(profileText);
        } else {
            alert(`Some answers are incorrect. Review your answers below:\n\n${profileText}`);
        }
    } else {
        alert("No profile found. Please create a profile first.");
    }
}


