<script setup>

import PreviewSection from "../PreviewSection.vue";
import Select         from "../components/select/Select.vue";
import { ref }        from "vue";

const themes = [
    'default', 'retro', 'cyberpunk', 'valentine', 'aqua',
    'business', 'forest', 'dark', 'cupcake', 'acid', 'sunset',
    'lofi', 'dim', 'garden'
];

const test = ref();
</script>

<template>
    <PreviewSection title="Selects">
        <template #default>
            <div>
                Selected value: {{test}}
            </div>
            <Select class="mx-1" color="primary" componentStyle="ghost"  :value="test" @input="test = $event.target.value">
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
