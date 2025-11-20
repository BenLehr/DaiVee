<script setup lang="ts">
defineProps<{
    message?: string
}>();
</script>

<template>
    <p class="validator-hint">
        <slot>{{ message }}</slot>
    </p>
</template>
