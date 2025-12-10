// ==================== APP LOGIC v5.3 MOBILE ====================
const app = {
    state: { currentBatch: [], batchIndex: 0, challengeIndex: 0, examQuestions: [], currentQ: 0, score: 0, timer: 0, interval: null },

    init() {
        if (typeof THEORY_DB === 'undefined') return alert("ERROR: Carga database.js primero");

        setTimeout(() => {
            this.renderTheory();
            this.renderDictionary();
            this.setupDictionarySearch();
            this.startPracticeRound();
            this.startChallengeRound();
            this.switchTab('theory');
        }, 10);
    },

    // --- FULLSCREEN LOGIC ---
    // --- FULLSCREEN LOGIC (CORREGIDO) ---
    toggleFullScreen() {
        const doc = window.document;
        // Intentamos coger el elemento body o html, body suele ser más seguro en móviles
        const docEl = doc.documentElement;
        const btnIcon = document.getElementById('icon-fullscreen');

        // Detectar si ya estamos en pantalla completa
        const isFullScreen = doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;

        if (!isFullScreen) {
            // Entrar en pantalla completa
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen();
            } else if (docEl.mozRequestFullScreen) { /* Firefox */
                docEl.mozRequestFullScreen();
            } else if (docEl.webkitRequestFullScreen) { /* Chrome, Safari & Opera */
                docEl.webkitRequestFullScreen();
            } else if (docEl.msRequestFullscreen) { /* IE/Edge */
                docEl.msRequestFullscreen();
            }

            // Cambiar icono
            if (btnIcon) {
                btnIcon.classList.remove('fa-expand');
                btnIcon.classList.add('fa-compress');
            }
        } else {
            // Salir de pantalla completa
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }

            // Cambiar icono
            if (btnIcon) {
                btnIcon.classList.remove('fa-compress');
                btnIcon.classList.add('fa-expand');
            }
        }
    },

    switchTab(tab) {
        requestAnimationFrame(() => {
            document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('bg-white/10', 'border-white/20'));

            const target = document.getElementById('section-' + (tab === 'exam' ? 'exam-menu' : tab));
            if (target) { target.classList.remove('hidden'); target.style.animation = 'none'; target.offsetHeight; target.style.animation = null; }

            document.getElementById('btn-' + tab)?.classList.add('bg-white/10', 'border-white/20');
        });
    },

    // 1. TEORIA
    renderTheory() {
        const html = THEORY_DB.map(t => `
            <div class="glass-panel p-4 md:p-6 rounded-xl border-l-4 border-blue-500 transform transition-transform hover:scale-[1.01]">
                <div class="flex items-center gap-3 mb-2"><i class="fa-brands ${t.icon} text-xl md:text-2xl text-blue-400"></i><h3 class="font-bold text-lg md:text-xl text-white">${t.title}</h3></div>
                <div class="text-gray-300 text-sm leading-relaxed">${t.content}</div>
            </div>`).join('');
        document.getElementById('theory-container').innerHTML = html;
    },

    // 2. GLOSARIO
    renderDictionary(filter = "") {
        const term = filter.toLowerCase();
        const filtered = DICT_DB.filter(d => d.term.toLowerCase().includes(term) || d.def.toLowerCase().includes(term)).slice(0, 50);
        document.getElementById('dictionary-container').innerHTML = filtered.length === 0 ?
            `<div class="col-span-2 text-center text-gray-500">No encontrado.</div>` :
            filtered.map(d => `<div class="glass-panel p-3 md:p-4 rounded-lg border-l-4 border-yellow-500"><h3 class="font-bold text-yellow-400 text-base md:text-lg">${d.term}</h3><p class="text-gray-300 text-xs md:text-sm mt-1">${d.def}</p></div>`).join('');
    },
    setupDictionarySearch() { document.getElementById('dict-search').addEventListener('input', (e) => this.renderDictionary(e.target.value)); },

    // 3. DOJO (CHALLENGES)
    startChallengeRound() {
        this.state.challengeIndex = 0;
        document.getElementById('challenge-end-screen').classList.add('hidden');
        document.getElementById('challenge-interface').classList.remove('hidden');
        this.renderChallenge();
    },
    renderChallenge() {
        const data = CHALLENGE_DB[this.state.challengeIndex];
        const container = document.getElementById('challenge-code-container');
        document.getElementById('challenge-title').innerText = data.title;
        document.getElementById('challenge-desc').innerText = data.desc;
        document.getElementById('challenge-counter').innerText = `${this.state.challengeIndex + 1}/${CHALLENGE_DB.length}`;
        document.getElementById('challenge-hint-text').innerText = data.hint;
        document.getElementById('challenge-hint-box').classList.add('hidden');
        document.getElementById('challenge-feedback').style.opacity = '0';
        document.getElementById('btn-next-challenge').classList.add('hidden');

        let htmlCode = data.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        data.ans.forEach((_, i) => { htmlCode = htmlCode.replace(new RegExp(`\\{\\{${i}\\}\\}`, 'g'), `<input type="text" class="inline-input code-input" data-index="${i}" autocomplete="off" placeholder="?">`); });
        container.innerHTML = htmlCode;
    },
    toggleChallengeHint() { document.getElementById('challenge-hint-box').classList.toggle('hidden'); },
    solveChallenge() {
        const data = CHALLENGE_DB[this.state.challengeIndex];
        const inputs = document.querySelectorAll('#challenge-code-container .inline-input');
        inputs.forEach(input => {
            const index = input.dataset.index;
            input.value = data.ans[index];
            input.classList.remove('incorrect'); input.classList.add('correct');
        });
        const fb = document.getElementById('challenge-feedback');
        fb.style.opacity = '1';
        fb.innerHTML = "<span class='text-yellow-400'>Solución aplicada.</span>";
        document.getElementById('btn-next-challenge').classList.remove('hidden');
    },
    checkChallenge() {
        const data = CHALLENGE_DB[this.state.challengeIndex];
        let allCorrect = true;
        document.querySelectorAll('#challenge-code-container .inline-input').forEach(input => {
            const userAns = input.value.replace(/\s/g, '').toLowerCase();
            const correctAns = data.ans[input.dataset.index].replace(/\s/g, '').toLowerCase();
            input.classList.remove('correct', 'incorrect');
            if (userAns === correctAns) input.classList.add('correct');
            else { input.classList.add('incorrect'); allCorrect = false; }
        });
        const fb = document.getElementById('challenge-feedback');
        fb.style.opacity = '1';
        if (allCorrect) { fb.innerHTML = "<span class='text-cyan-400'>¡CORRECTO! 🚀</span>"; document.getElementById('btn-next-challenge').classList.remove('hidden'); }
        else fb.innerHTML = "<span class='text-red-400'>Error. Revisa.</span>";
    },
    nextChallenge() {
        this.state.challengeIndex++;
        if (this.state.challengeIndex < CHALLENGE_DB.length) this.renderChallenge();
        else { document.getElementById('challenge-interface').classList.add('hidden'); document.getElementById('challenge-end-screen').classList.remove('hidden'); }
    },

    // 4. PRÁCTICA
    startPracticeRound() {
        this.state.currentBatch = [...PRACTICE_DB].sort(() => Math.random() - 0.5).slice(0, 5);
        this.state.batchIndex = 0;
        document.getElementById('practice-end-screen').classList.add('hidden');
        document.getElementById('practice-interface').classList.remove('hidden');
        this.renderPractice();
    },
    renderPractice() {
        const data = this.state.currentBatch[this.state.batchIndex];
        const container = document.getElementById('practice-code-container');
        document.getElementById('practice-topic-badge').innerText = data.topic;
        document.getElementById('practice-counter').innerText = `${this.state.batchIndex + 1}/5`;
        document.getElementById('hint-text').innerText = data.hint;
        document.getElementById('hint-box').classList.add('hidden');
        document.getElementById('practice-feedback').style.opacity = '0';
        document.getElementById('btn-next-practice').classList.add('hidden');

        let htmlCode = data.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        data.ans.forEach((_, i) => { htmlCode = htmlCode.replace(new RegExp(`\\{\\{${i}\\}\\}`, 'g'), `<input type="text" class="inline-input" data-index="${i}" autocomplete="off">`); });
        container.innerHTML = htmlCode;
    },
    toggleHint() { document.getElementById('hint-box').classList.toggle('hidden'); },
    checkPractice() {
        const data = this.state.currentBatch[this.state.batchIndex];
        let allCorrect = true;
        document.querySelectorAll('#practice-code-container .inline-input').forEach(input => {
            const userAns = input.value.trim().toLowerCase();
            const correctAns = data.ans[input.dataset.index].toLowerCase();
            input.classList.remove('correct', 'incorrect');
            if (userAns === correctAns) input.classList.add('correct');
            else { input.classList.add('incorrect'); allCorrect = false; }
        });
        const fb = document.getElementById('practice-feedback');
        fb.style.opacity = '1';
        if (allCorrect) { fb.innerHTML = "<span class='text-green-400'>¡CORRECTO!</span>"; document.getElementById('btn-next-practice').classList.remove('hidden'); }
        else fb.innerHTML = "<span class='text-red-400'>Incorrecto</span>";
    },
    nextPractice() {
        this.state.batchIndex++;
        if (this.state.batchIndex < 5) this.renderPractice();
        else { document.getElementById('practice-interface').classList.add('hidden'); document.getElementById('practice-end-screen').classList.remove('hidden'); }
    },

    // 5. EXAMEN (LÓGICA MEJORADA DE CORRECCIÓN)
    startExam(type) {
        let pool = (type === 'global') ? [...MEGA_DB.htmlcss, ...MEGA_DB.js] : MEGA_DB[type];
        this.state.examQuestions = pool.sort(() => Math.random() - 0.5).slice(0, 20);
        this.state.currentQ = 0; this.state.score = 0; this.state.timer = 0;
        document.getElementById('section-exam-menu').classList.add('hidden');
        document.getElementById('section-exam-interface').classList.remove('hidden');
        if (this.state.interval) clearInterval(this.state.interval);
        this.state.interval = setInterval(() => { this.state.timer++; const m = Math.floor(this.state.timer / 60).toString().padStart(2, '0'), s = (this.state.timer % 60).toString().padStart(2, '0'); document.getElementById('exam-timer').innerText = `${m}:${s}`; }, 1000);
        this.renderQuestion();
    },
    renderQuestion() {
        const q = this.state.examQuestions[this.state.currentQ];
        document.getElementById('q-current').innerText = this.state.currentQ + 1;
        document.getElementById('q-total').innerText = this.state.examQuestions.length;
        document.getElementById('q-text').innerText = q.q;
        const opts = document.getElementById('q-options'); opts.innerHTML = '';
        document.getElementById('feedback-msg').innerHTML = "";

        const fragment = document.createDocumentFragment();
        q.opts.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full text-left p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 font-mono transition-colors text-sm md:text-base";
            btn.innerText = opt;
            btn.onclick = () => this.answerExam(btn, idx, q.ans, q.expl);
            fragment.appendChild(btn);
        });
        opts.appendChild(fragment);
        document.getElementById('exam-nav').classList.add('opacity-0', 'pointer-events-none');
    },

    // --- FUNCIÓN CLAVE MODIFICADA PARA FEEDBACK VISUAL ---
    answerExam(btn, idx, correctIdx, expl) {
        const btns = document.getElementById('q-options').children;
        // Bloquear todos los botones
        for (let b of btns) { b.disabled = true; b.style.pointerEvents = 'none'; b.classList.add('opacity-50'); }

        const fb = document.getElementById('feedback-msg');
        let isCorrect = idx === correctIdx;

        // Estilos para la tarjeta de explicación
        let cardColor = isCorrect ? "bg-green-900/40 border-green-500" : "bg-red-900/40 border-red-500";
        let titleColor = isCorrect ? "text-green-400" : "text-red-400";
        let icon = isCorrect ? "fa-check-circle" : "fa-times-circle";
        let titleText = isCorrect ? "¡CORRECTO!" : "INCORRECTO";

        // Generar HTML de la explicación
        const feedbackHTML = `
            <div class="border-l-4 ${cardColor} p-4 rounded-r-lg shadow-lg animate-fade-in text-left">
                <div class="flex items-center gap-2 mb-2">
                    <i class="fa-solid ${icon} ${titleColor} text-xl"></i>
                    <h4 class="font-bold ${titleColor} text-lg">${titleText}</h4>
                </div>
                <p class="text-white text-sm md:text-base leading-relaxed">
                    ${expl}
                </p>
                ${!isCorrect ? `<div class="mt-2 text-xs text-gray-400">Respuesta correcta: <span class="text-white font-mono">${btns[correctIdx].innerText}</span></div>` : ''}
            </div>
        `;

        // Modificar estilos del botón pulsado y el correcto
        btn.classList.remove('opacity-50');
        if (isCorrect) {
            this.state.score++;
            btn.className = "w-full text-left p-4 rounded-lg font-mono exam-btn-correct ring-2 ring-green-400";
        } else {
            btn.className = "w-full text-left p-4 rounded-lg font-mono exam-btn-incorrect ring-2 ring-red-400";
            btns[correctIdx].className = "w-full text-left p-4 rounded-lg font-mono exam-btn-correct opacity-100"; // Resaltar la correcta
        }

        fb.innerHTML = feedbackHTML;
        document.getElementById('exam-nav').classList.remove('opacity-0', 'pointer-events-none');
    },

    nextExamQuestion() {
        if (this.state.currentQ < this.state.examQuestions.length - 1) { this.state.currentQ++; this.renderQuestion(); }
        else { clearInterval(this.state.interval); document.getElementById('section-exam-interface').classList.add('hidden'); document.getElementById('section-exam-results').classList.remove('hidden'); document.getElementById('result-score').innerText = Math.round((this.state.score / this.state.examQuestions.length) * 100) + "%"; }
    },
    exitExam() { if (confirm("¿Salir del examen?")) this.switchTab('exam'); }
};
document.addEventListener('DOMContentLoaded', () => app.init());