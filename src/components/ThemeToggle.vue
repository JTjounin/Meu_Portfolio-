<script setup>
const toggle = () => {
    document.documentElement.classList.toggle('dark')
}
</script>

<template>
    <button @click="toggle" class="px-3 py-2 rounded border border-zinc-700 text-sm">
        🌙
    </button>
</template>
