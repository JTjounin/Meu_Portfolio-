<template>
    <section data-reveal id="certificates">
        <div class="container fade-up">
            <h2 class="section-title">Certificações</h2>

            <div class="grid">
                <a v-for="cert in certificates" :key="cert.title" :href="cert.pdf" target="_blank" class="card">
                    <img :src="cert.preview" :alt="cert.title" />

                    <div class="card-content">
                        <h3>{{ cert.title }}</h3>
                        <p>{{ cert.platform }}</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const certificates = [
    {
        title: 'React.js',
        platform: 'Alura',
        pdf: '/certificates/react-cert.pdf',
        preview: '/certificates/react-cert-preview.png'
    },
    {
        title: 'JavaScript Avançado',
        platform: 'Udemy',
        pdf: '/certificates/js-cert.pdf',
        preview: '/certificates/js-cert-preview.png'
    },
    {
        title: 'Vue.js',
        platform: 'DIO',
        pdf: '/certificates/vue-cert.pdf',
        preview: '/certificates/vue-cert-preview.png'
    }
]
</script>

<style scoped>
.section-title {
    font-size: 2.2rem;
    margin-bottom: 3rem;
}

.grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.card {
    background: var(--bg-soft);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: transform 0.2s ease, border 0.2s ease;
}

.card:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.2rem;
}

.card-content h3 {
    margin-bottom: 0.3rem;
}

.card-content p {
    font-size: 0.85rem;
    color: var(--text-muted);
}
</style>
