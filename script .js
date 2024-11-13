// Student Savings Manager
const savingForm = document.getElementById('saving-form');
const savingsList = document.getElementById('savings-list');

savingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (name && !isNaN(amount)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${name} saved $${amount.toFixed(2)}`;
        savingsList.appendChild(listItem);
    } else {
        alert('Please enter valid data.');
    }

    savingForm.reset();
});

// Multiple-choice Quiz
const questions = [
    {
        question: "1. What is a 'blue-chip' stock?",
        options: [" a) A stock of a newly listed company", "b) A high-risk, high-return stock", "c) A stock of a well-established and financially sound company", "d) A penny stock with potential growth"],
        answer: 2 // Index of the correct answer
    },
    {
        question: "2. Which of these is an example of a derivative?",
        options: ["a) Stock", "b) Real estate", "c) Option contract", "d) Fixed deposit"],
        answer: 2 
    },
    {
        question: "3. What does 'market capitalization' represent in stocks?",
        options: [" a) Total revenue of the company" , "b) Total earnings per share", "c) Total stock price over time "," d) Total value of all outstanding shares "],
        answer: 3
    },
    {
        question: "4. Which of the following investments is generally least affected by inflation?",
        options: [" a) Cash in hand","b) Bonds","c) Real estate "],
        answer: 2
    },
    {
        question: "5. Which of these is an investment strategy that aims to reduce exposure to a single asset?",
        options: ["a) Compounding","b) Diversification","c) Leveraging","d) Hedging"],
        answer: 1
    },
    {
        question: "6. A 'bull market' refers to:",
        options: ["A declining market","b) A stable market","c) A rising market","d) A market with low liquidity"],
        answer: 2
    },
    {
        question: "7. What is 'dollar-cost averaging'?",
        options: ["a) Investing a fixed dollar amount at regular intervals","b) Buying only during market dips","c) Averaging investment returns over a period","d) Selling at a fixed price point"],
        answer: 0
    },
    {
        question: "8. Which of these is an investment strategy that aims to reduce exposure to a single asset?",
        options: ["a) Compounding","b) Diversification","c) Leveraging"],
        answer: 1
    },
    {
        question: "9. In a mutual fund, what does the term 'NAV' stand for?",
        options: ["a) Net Available Value","b) Notified Annual Value","c) Net Asset Value","d) New Account Value"],
        answer: 2
    },
    {
        question: "10. In a mutual fund, what does the term 'NAV' stand for?",
        options: ["a) Government bond","b) Corporate bond","c) Junk bond","d) Municipal bond"],
        answer: 2
    },
    
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('quiz-feedback');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    feedback.textContent = ''; // Clear previous feedback
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.answer) {
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = 'Incorrect.';
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 1000); // Move to next question after 1 second
    } else {
        feedback.textContent += ' Quiz Completed!';
    }
}

showQuestion();

// Fraud Detection Tool (Basic Implementation)
function detectFraud() {
    // Get input values
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const location = document.getElementById('location').value.toLowerCase();
    const time = document.getElementById('transactionTime').value;

    // Define fraud detection criteria
    const highAmountThreshold = 10000; // Example threshold
    const suspiciousLocations = ['risky-city', 'unknown-area'];
    const suspiciousHours = ['00:00', '03:00']; // Example times (midnight to early morning)

    // Check for potential fraud conditions
    let isFraud = false;
    let reasons = [];

    if (amount > highAmountThreshold) {
        isFraud = true;
        reasons.push(`Transaction amount exceeds threshold: $${amount}`);
    }

    if (suspiciousLocations.includes(location)) {
        isFraud = true;
        reasons.push(`Suspicious transaction location: ${location}`);
    }

    if (suspiciousHours.includes(time)) {
        isFraud = true;
        reasons.push(`Transaction at suspicious time: ${time}`);
    }

    // Display the result
    if (isFraud) {
        document.getElementById('fraudResult').textContent = `Fraud detected. Reasons: ${reasons.join(', ')}`;
    } else {
        document.getElementById('fraudResult').textContent = 'Transaction appears normal.';
    }
}

