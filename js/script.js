// Array de perguntas e respostas
const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madri"],
        answer: "Paris",
        image: "images/França.jpg" // Exemplo de URL da imagem
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        answer: "Júpiter",
        image: "images/Sistema_Solar.jpeg" // Exemplo de URL da imagem
    },
    {
        question: "Qual mês se comemora o natal??",
        options: ["Janeiro", "Dezembro", "Junho", "Outubro"],
        answer: "Dezembro",
        image: "images/Natal.jpg" // Exemplo de URL da imagem
    },
    {
        question: "Qual carro tem motor V8?",
        options: ["Corvette", "Jetta", "M3", "Aventador"],
        answer: "Corvette",
        image: "images/V8.jpg" // Exemplo de URL da imagem
    }
];

let currentQuestionIndex = 0; // Variável para rastrear a pergunta atual
let score = 0; // Variável para rastrear a pontuação

// Função para iniciar o quiz
function startQuiz() {
    loadQuestion(); // Carregar a primeira pergunta
}

// Função para carregar a pergunta atual
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex]; // Pega a pergunta atual

    // Atualiza o texto da pergunta
    document.getElementById('question').textContent = currentQuestion.question;

    // Embaralha as opções de resposta
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    // Atualiza a imagem, se houver
    const questionImage = document.getElementById('question-image');
    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = 'block'; // Exibe a imagem
    } else {
        questionImage.style.display = 'none'; // Oculta a imagem se não houver
    }

    // Atualiza os botões com as opções embaralhadas
    shuffledOptions.forEach((option, index) => {
        document.getElementById(`btn${index}`).textContent = option;
    });
}

// Função chamada ao clicar em uma opção de resposta
function checkAnswer(selectedIndex) {
    const selectedOption = document.getElementById(`btn${selectedIndex}`).textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    // Verifica se a resposta está correta
    if (selectedOption === correctAnswer) {
        score++; // Incrementa a pontuação se estiver correto
    }

    // Avança para a próxima pergunta
    currentQuestionIndex++;

    // Verifica se há mais perguntas
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); // Carrega a próxima pergunta
    } else {
        // Exibe o resultado final
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('result').textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
    }
}

// Função para embaralhar o array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Carrega o quiz ao carregar a página
window.onload = startQuiz;

