<script setup lang="ts">

import {useAttrs} from 'vue'
import Textarea from "@/components/textarea/Textarea.vue";

defineProps<{
    readonly?: boolean
    modelValue: string,
    name?: string;
    rows?: number;
    placeholder?: string;
    isDisabled?: boolean;
}>();

const emit = defineEmits<{
    'update:modelValue': [value: string]
}>();

const attrs = useAttrs();
const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

</script>

<template>
    <Textarea
        v-bind="attrs"
        :value="modelValue"
        @input="onInput"
        :rows="rows"
        :name="name"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        class="outline-secondary"
    ></Textarea>
</template>

<style scoped>

</style>