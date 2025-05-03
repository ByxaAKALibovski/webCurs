document.addEventListener('DOMContentLoaded', () => {
    // Интерактивный редактор
    const editor = document.querySelector('.editor-js');
    const result = document.querySelector('.result-js');

    if (editor && result) {
        // HTML для iframe
        const html = `
            <div class="container" style="display: flex; gap: 10px;">
                <div class="card" style="width: 100px; height: 100px; background: #ccc;">1</div>
                <div class="card" style="width: 100px; height: 100px; background: #ccc;">2</div>
                <div class="card" style="width: 100px; height: 100px; background: #ccc;">3</div>
            </div>
            <button class="my-button" style="padding: 10px; margin-top: 10px;">Кликни!</button>
            <input class="my-input" style="padding: 10px; margin-top: 10px;" placeholder="Введи текст">
            <div class="result" style="margin-top: 10px; min-height: 50px;"></div>
        `;

        function updateResult() {
            const jsCode = editor.value;
            const content = `
                <!DOCTYPE html>
                <html>
                <head><style>
                    .container { display: flex; gap: 10px; }
                    .card { transition: all 0.3s ease; }
                    .result { padding: 10px; border: 1px solid #ccc; }
                </style></head>
                <body>
                    ${html}
                    <script>
                        (async () => {
                            try {
                                ${jsCode}
                            } catch (e) {
                                console.error("Ошибка в JS:", e);
                                document.querySelector(".result").textContent = "Ошибка: " + e.message;
                            }
                        })();
                    </script>
                </body>
                </html>
            `;
            // Создаем iframe и обновляем его содержимое
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '300px';
            iframe.style.border = '2px solid #b0bec5';
            iframe.style.borderRadius = '5px';
            result.innerHTML = '';
            result.appendChild(iframe);
            iframe.contentDocument.open();
            iframe.contentDocument.write(content);
            iframe.contentDocument.close();
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