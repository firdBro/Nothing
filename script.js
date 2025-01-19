document.getElementById('skip-button').addEventListener('click', function() {
    // Переход на новую страницу для редактирования текста
    alert('Ха-ха! Попался? Не бойся, это не ратник! Хехе');
    window.open('edit.html', '_blank');
});

// Добавляем ключевые кадры для анимации "shake" (добавляется динамически)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}`, styleSheet.cssRules.length);

// Добавляем текст ссылки на создателя
const footer = document.createElement('footer');
footer.innerHTML = '<p>Создатель: <a href="https://t.me/firdBro" target="_blank">@firdBro</a></p>';
footer.style.textAlign = 'center';
footer.style.marginTop = '20px';
footer.style.fontSize = '1.2rem';
document.body.appendChild(footer);
