<template>
    <section id="home" class="hero fade-up">
        <div class="container">
            <span class="hero-badge">Desenvolvedor Front-End</span>
            <h1 class="gradient-text">Jonatha Servila</h1>

            <p class="subtitle">
                {{ displayText }}<span class="cursor">|</span>
            </p>


            <div class="actions">
                <a href="#projects" class="btn primary">Ver projetos</a>
                <a href="#contact" class="btn outline">Contato</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const phrases = [
    'Transformando ideias em experiências!',
    'Criando experiências modernas!',
    'Focado em Front-End e UX',
]

const displayText = ref('')
let phraseIndex = 0
let charIndex = 0
let isDeleting = false

function typeLoop() {
    const current = phrases[phraseIndex]

    if (!isDeleting) {
        displayText.value = current.slice(0, charIndex++)
        if (charIndex > current.length) {
            setTimeout(() => (isDeleting = true), 1200)
        }
    } else {
        displayText.value = current.slice(0, charIndex--)
        if (charIndex === 0) {
            isDeleting = false
            phraseIndex = (phraseIndex + 1) % phrases.length
        }
    }

    setTimeout(typeLoop, isDeleting ? 35 : 55)
}

onMounted(typeLoop)
</script>


<style scoped>
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background:
        radial-gradient(600px at 50% 50%,
            rgba(124, 58, 237, 0.15),
            transparent 70%);
}


.hero-badge {
    display: inline-block;
    width: fit-content;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    font-size: 1.0rem;
    font-weight: 600;
    background: rgba(99, 102, 241, 0.15);
    color: var(--primary);
}

.hero-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    opacity: 0.85;
}

.hero-actions {
    margin-top: 3rem;
}


h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    margin-bottom: 1rem;
}

.subtitle {
    color: var(--text-muted);
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
}

.actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    padding: 0.9rem 1.8rem;
    border-radius: 10px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.primary {
    background: var(--primary);
    color: white;
}

.primary:hover {
    opacity: 0.9;
}

.outline {
    border: 1px solid var(--border);
}

.outline:hover {
    background: var(--bg-soft);
}

.cursor {
    display: inline-block;
    margin-left: 2px;
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    50%,
    100% {
        opacity: 1
    }

    25%,
    75% {
        opacity: 0
    }
}


@media (max-width: 768px) {
    .hero-badge {
        font-size: 0.75rem;
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        margin-bottom: 0.8rem;
    }
}


.hero-actions {
    gap: 0.8rem;
}

.actions a,
.actions button {
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
}
</style>
