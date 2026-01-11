<template>
    <section data-reveal id="projects">
        <div class="container fade-up">
            <h2 class="section-title">Projetos</h2>

            <div class="grid">
                <!-- PROJETOS -->
                <div v-for="project in projects" :key="project.title" class="card">
                    <div class="image-wrapper">
                        <img :src="project.image" :alt="project.title" />

                        <div class="overlay">
                            <!-- GITHUB -->
                            <a v-if="project.github" :href="project.github" target="_blank" class="icon-btn"
                                aria-label="GitHub">
                                <img src="/icons/githubWh-svgrepo-com.svg" alt="GitHub" />
                            </a>

                            <!-- DEPLOY -->
                            <a v-if="project.link" :href="project.link" target="_blank" class="icon-btn"
                                aria-label="Deploy">
                                <img src="/icons/deployWh-svgrepo-com.svg" alt="Deploy" />
                            </a>
                        </div>
                    </div>

                    <div class="card-content">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>

                        <ul class="techs">
                            <li v-for="tech in project.techs" :key="tech">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- MAIS PROJETOS -->
                <div class="coming-soon">
                    <span>🚧</span>
                    <p>Mais projetos em breve</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { projects } from '../data/projects'

defineProps({
    theme: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.section-title {
    font-size: 2.2rem;
    margin-bottom: 3rem;
}

/* GRID */
.grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* CARD */
.card {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.25s ease, border 0.25s ease;
}

.card:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
}

/* IMAGEM */
.image-wrapper {
    position: relative;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

/* OVERLAY */
.overlay {
    position: absolute;
    inset: 0;
    background: rgba(20, 20, 30, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.card:hover .overlay {
    opacity: 1;
    pointer-events: auto;
}

/* ÍCONES */
.icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s ease;
}

.icon-btn img {
    width: 22px;
    height: 22px;
    opacity: 0.9;
}

.icon-btn:hover {
    transform: scale(1.2);
}

.icon-btn:hover img {
    opacity: 1;
}

/* CONTEÚDO */
.card-content {
    padding: 1.5rem;
}

.card-content h3 {
    margin-bottom: 0.5rem;
}

.card-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.techs {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.techs li {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border-radius: 999px;
    background: rgba(19, 20, 90, 0.589);
    color: var(--primary);
    list-style: none;
}

/* MAIS PROJETOS */
.coming-soon {
    min-height: 180px;
    border: 1px dashed var(--border);
    border-radius: 14px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    color: var(--text-muted);
    font-size: 0.95rem;
    text-align: center;
    opacity: 0.85;
}

.coming-soon span {
    font-size: 1.4rem;
}
</style>
