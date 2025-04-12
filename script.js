document.addEventListener('DOMContentLoaded', () => {
    // Интерактивный редактор
    const editor = document.querySelector('.editor');
    const result = document.querySelector('.result');

    if (editor && result) {
        // Определяем HTML для iframe в зависимости от страницы
        let html = '';
        if (document.body.classList.contains('pseudo-animations')) {
            html = '<button style="padding: 10px;">Тест</button>';
        } else if (document.body.classList.contains('grid-flexbox')) {
            html = `
                <div class="container">
                    <div class="card" style="width: 100px; height: 100px; background: #ccc;">1</div>
                    <div class="card" style="width: 100px; height: 100px; background: #ccc;">2</div>
                    <div class="card" style="width: 100px; height: 100px; background: #ccc;">3</div>
                </div>`;
        }

        function updateResult() {
            const css = editor.value;
            const content = `
                <!DOCTYPE html>
                <html>
                <head><style>${css}</style></head>
                <body>${html}</body>
                </html>
            `;
            result.srcdoc = content; // Обновляем iframe через srcdoc
        }

        editor.addEventListener('input', updateResult);
        updateResult(); // Инициализация при загрузке
    }

    // Показ/скрытие решений
    window.showSolution = function(num) {
        const solution = document.getElementById(`solution${num}`);
        if (solution) {
            solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
        }
    };
});