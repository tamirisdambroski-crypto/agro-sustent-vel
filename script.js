function checkAnswer(btn, isCorrect, message, questionNumber) {
    // Localiza o bloco de opções onde o usuário clicou
    const container = btn.parentElement;
    const buttons = container.querySelectorAll('.quiz-btn');
    
    // Identifica qual caixa de feedback deve receber a resposta
    const feedbackDiv = document.getElementById(`feedback-${questionNumber}`);

    // Desativa os botões daquela pergunta para travar a resposta escolhida
    buttons.forEach(b => {
        b.disabled = true;
        b.style.cursor = "default";
    });

    // Aplica verde para correto ou vermelho para incorreto
    if (isCorrect) {
        btn.classList.add('correct');
        feedbackDiv.style.color = '#2E7D32';
        feedbackDiv.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + message;
    } else {
        btn.classList.add('wrong');
        feedbackDiv.style.color = '#C62828';
        feedbackDiv.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> ' + message;
    }
}
