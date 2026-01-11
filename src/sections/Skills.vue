<template>
    <section id="skills" class="skills reveal">
        <h2 class="section-title">Habilidades</h2>

        <div class="marquee">
            <div class="track">
                <div v-for="(skill, index) in duplicatedSkills" :key="index" class="skill">
                    <span class="label">{{ skill.name }}</span>
                    <img :src="skill.icon" :alt="skill.name" />
                </div>
            </div>
        </div>

        <div class="soft-skills">
            <div class="soft-card reveal-card">
                <h3>🎯 Foco em experiência do usuário</h3>
                <p>
                    Sempre atento à usabilidade, acessibilidade e fluidez da interface para criar experiências
                    agradáveis e intuitivas.
                </p>
            </div>

            <div class="soft-card reveal-card">
                <h3>🚀 Entusiasmo</h3>
                <p>
                    Apaixonado por desenvolvimento front-end e motivado por transformar ideias em interfaces funcionais
                    e bem pensadas.
                </p>
            </div>

            <div class="soft-card reveal-card">
                <h3>💪 Dedicação</h3>
                <p>
                    Comprometido em entregar sempre o melhor resultado, com atenção aos detalhes e responsabilidade em
                    cada etapa do projeto.
                </p>
            </div>

            <div class="soft-card reveal-card">
                <h3>📚 Aprendizado contínuo</h3>
                <p>
                    Em constante evolução, sempre buscando aprender novas tecnologias, boas práticas e aprimorar minhas
                    habilidades.
                </p>
            </div>

            <div class="soft-card reveal-card">
                <h3>🧠 Resolução de problemas</h3>
                <p>
                    Gosto de analisar desafios com calma, testar soluções e encontrar o melhor caminho para resolver
                    bugs
                    e melhorar a experiência do usuário.
                </p>
            </div>

            <div class="soft-card reveal-card">
                <h3>🤝 Trabalho em equipe</h3>
                <p>
                    Facilidade em colaborar, ouvir feedbacks e contribuir de forma positiva para o crescimento do time e
                    do projeto.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";

const skills = [
    { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "/icons/css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
    { name: "Vue.js", icon: "/icons/vue-svgrepo-com.svg" },
    { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    { name: "Figma", icon: "/icons/figma-svgrepo-com.svg" },
    { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap-svgrepo-com.svg" },
    { name: "Sass", icon: "/icons/sass-svgrepo-com.svg" },
    { name: "React", icon: "/icons/react-svgrepo-com.svg" },
    { name: "NodeJs", icon: "/icons/nodejs-1-logo-svgrepo-com.svg" },
    { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg" },
    { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg" }
];

const duplicatedSkills = [...skills, ...skills, ...skills];

onMounted(() => {
    // anima a seção inteira
    const section = document.querySelector("#skills");

    const sectionObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
                sectionObserver.unobserve(section);
            }
        },
        { threshold: 0.2 }
    );

    sectionObserver.observe(section);

    // anima cada card individualmente
    const cards = document.querySelectorAll(".reveal-card");

    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    cardObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );

    cards.forEach(card => cardObserver.observe(card));
});
</script>

<style scoped>
.skills {
    padding: 6rem 0;
}

.section-title {
    font-family: var(--font-title);
    letter-spacing: -0.02em;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
}

/* marquee */
.marquee {
    overflow: hidden;
    padding: 3rem 0;
}

.track {
    display: flex;
    width: max-content;
    animation: scroll 18s linear infinite;
}

.marquee:hover .track {
    animation-play-state: paused;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-33.333%);
    }
}

.skill {
    width: 96px;
    height: 96px;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.skill img {
    width: 48px;
    height: 48px;
}

.skill:hover {
    transform: scale(1.15);
}

.label {
    position: absolute;
    top: -0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    font-family: var(--font-title);
}

.skill:hover .label {
    opacity: 1;
}

/* soft skills */

h3 {
    margin-bottom: 0.9rem;
}

.soft-skills {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
}

.soft-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.soft-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* animações */
.reveal {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.reveal-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
