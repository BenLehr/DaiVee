<script setup>

import PreviewSection from "../PreviewSection.vue";
import Select         from "../components/select/Select.vue";

const themes = [
    'default', 'retro', 'cyberpunk', 'valentine', 'aqua',
    'business', 'forest', 'dark', 'cupcake', 'acid', 'sunset',
    'lofi', 'dim', 'garden'
];

</script>

<template>
    <PreviewSection title="Selects">
        <template #default>
            <Select class="mx-1" color="primary">
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Select class="mx-1" color="secondary">
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Select class="mx-1" color="success">
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Select class="mx-1" color="error">
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Select class="mx-1" color="warning">
                <option value="" disabled selected>Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>
