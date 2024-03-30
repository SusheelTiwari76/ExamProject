const { ipcRenderer } = require('electron');

// Function to show exam instructions
function showInstructions() {
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}

// Function to start the exam
function startExam() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('examQuestions').style.display = 'block';
    startTimer(20); // Start timer for 20 minutes
}

// Function to submit the exam
function submitExam() {
    // Implement exam submission logic
}

// Function to start a timer
function startTimer(duration) {
    let timer = duration * 60;
    const timerDisplay = document.getElementById('timer');
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (--timer < 0) {
            clearInterval(timerInterval);
            submitExam(); // Automatically submit exam after timer ends
        }
    }, 1000);
}

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    showInstructions();
});

document.getElementById('startExamButton').addEventListener('click', startExam);
document.getElementById('submitExamButton').addEventListener('click', submitExam);
