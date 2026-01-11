<template>
    <section data-reveal id="contact">
        <div class="container fade-up contact">
            <h2>Contato</h2>

            <p>
                Se quiser conversar sobre oportunidades, projetos ou trocar ideias,
                fique à vontade para entrar em contato.
            </p>

            <div class="actions">

                <a href="https://github.com/seugithub" target="_blank" class="btn outline">
                    <img src="/icons/whatsapp-svgrepo-com.svg" alt="" class="iconContat">
                </a>


                <a href="https://linkedin.com/in/seulinkedin" target="_blank" class="btn outline">
                    <img src="/icons/linkedin-svgrepo-com.svg" alt="" class="iconContat">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    text-align: center;
    max-width: 720px;
}

h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

p {
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}

.actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.iconContat {
    width: 2.3rem;
}

.iconContat:hover {
    width: 2.5rem;
    border-radius: 50%;
}
</style>
