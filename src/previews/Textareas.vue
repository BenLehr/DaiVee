<script setup>
import PreviewSection from "../PreviewSection.vue";
import Textarea from "../components/textarea/Textarea.vue";
</script>

<template>
    <PreviewSection title="Textareas">
        <template #default>
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="primary"
                      class="mx-1"
            />
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="neutral"
                      class="mx-1"
            />
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="info"
                      class="mx-1"
            />
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="accent"
                      class="mx-1"
            />
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="secondary"
                      class="mx-1"
            />
            <Textarea placeholder="Enter your text here..."
                      size="md"
                      color="success"
                      class="mx-1"
            />
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>
