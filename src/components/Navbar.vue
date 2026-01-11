<template>
    <header class="navbar">
        <div class="container nav-content">

            <div class="logo">
                <a href="#home" data-section="home" @click="closeMenu">
                    <span id="logo-text">JS</span>
                </a>
            </div>


            <nav class="nav-center">
                <a href="#skills" data-section="skills">Habilidades</a>
                <a href="#projects" data-section="projects">Projetos</a>
                <a href="#about" data-section="about">Sobre</a>
                <a href="#contact" data-section="contact">Contato</a>
            </nav>

            <button class="hamburger" @click="toggleMenu" aria-label="Abrir menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="nav-actions">
                <a href="https://github.com/jtjounin" target="_blank" rel="noopener" class="icon-link">
                    <img v-if="theme === 'dark'" src="/icons/githubWh-svgrepo-com.svg" alt="GitHub" />
                    <img v-else src="/icons/githubBl-svgrepo-com.svg" alt="GitHub" />
                </a>

                <a href="/cv/Jonatha-Servila-CV.pdf" download class="cv-button">
                    Baixar CV 📄
                </a>

                <button class="theme-toggle" @click="$emit('toggle-theme')">
                    <span v-if="theme === 'dark'">🌙</span>
                    <span v-else>☀️</span>
                </button>
            </div>
        </div>

        <div class="mobile-menu" :class="{ open: isMenuOpen }">
            <a href="#skills" data-section="skills" @click="closeMenu">Habilidades</a>
            <a href="#projects" data-section="projects" @click="closeMenu">Projetos</a>
            <a href="#about" data-section="about" @click="closeMenu">Sobre</a>
            <a href="#contact" data-section="contact" @click="closeMenu">Contato</a>

            <div class="mobile-actions">
                <a href="https://github.com/jtjounin" target="_blank" rel="noopener" class="icon-link">
                    <img v-if="theme === 'dark'" src="/icons/githubWh-svgrepo-com.svg" alt="GitHub" />
                    <img v-else src="/icons/githubBl-svgrepo-com.svg" alt="GitHub" />
                </a>

                <a href="/cv/Jonatha-Servila-CV.pdf" download class="cv-button">
                    Baixar CV 📄
                </a>

                <button class="theme-toggle" @click="$emit('toggle-theme')">
                    <span v-if="theme === 'dark'">🌙</span>
                    <span v-else>☀️</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
    theme: String,
})

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}

onMounted(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a, .mobile-menu a, .logo a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;

                    navLinks.forEach(link => {
                        link.classList.toggle(
                            "active",
                            link.dataset.section === id
                        );
                    });
                }
            });
        },
        {
            threshold: 0.6
        }
    );

    sections.forEach(section => observer.observe(section));

    onUnmounted(() => {
        sections.forEach(section => observer.unobserve(section));
    });
});
</script>

<style scoped>
/* ===== NAVBAR ===== */
.logo a {
    position: relative;
    color: var(--text);
    padding: 0.3rem 0;
}

/* reaproveita a mesma linha */
.logo a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
}

.logo a.active::after {
    transform: scaleX(1);
}


.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(12px);
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    border-bottom: 1px solid var(--border);
    z-index: 10;
    opacity: 0;
    transform: translateY(-20px);
    animation: navbarEnter 0.8s ease forwards;
}

@keyframes navbarEnter {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.nav-content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: 64px;
}

/* ===== NAV LINKS ===== */
.nav-center {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

nav a {
    position: relative;
    color: var(--text-muted);
    font-size: 0.95rem;
    padding: 0.3rem 0;
    transition: color 0.2s ease;
}

nav a:hover {
    color: var(--text);
}

/* Linha ativa */
nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
}

nav a.active {
    color: var(--text);
}

nav a.active::after {
    transform: scaleX(1);
}

/* ===== AÇÕES ===== */
.nav-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.6rem;
}

.logo {
    font-weight: 700;
    font-size: 1.2rem;
}

.cv-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.85rem;
    color: var(--text);
    transition: background 0.2s ease, transform 0.2s ease;
}

.cv-button:hover {
    background: var(--card);
    transform: translateY(-1px);
}

.theme-toggle {
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
}

.icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid var(--border);
    transition: background 0.2s ease, transform 0.2s ease;
}

.icon-link img {
    width: 16px;
    height: 16px;
    opacity: 0.8;
}

.icon-link:hover {
    background: var(--card);
    transform: translateY(-1px);
}

.icon-link:hover img {
    opacity: 1;
}

/* ===== MOBILE ===== */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger span {
    width: 20px;
    height: 2px;
    background: var(--text);
}

.mobile-menu {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.mobile-menu.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.mobile-menu a {
    position: relative;
    font-size: 1.05rem;
    color: var(--text);
}

/* underline mobile */
.mobile-menu a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: var(--primary);
    transform: scaleX(0);
    transition: transform 0.25s ease;
}

.mobile-menu a.active::after {
    transform: scaleX(1);
}

.mobile-actions {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    display: flex;
    gap: 0.8rem;
}

@media (max-width: 768px) {
    .nav-content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .nav-center,
    .nav-actions {
        display: none !important;
    }

    /* LOGO CENTRALIZADO */
    .logo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    /* HAMBURGER À DIREITA */
    .hamburger {
        display: flex;
        position: absolute;
        right: 0;
        margin-right: 5%;
    }
}
</style>
