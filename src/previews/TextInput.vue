<script setup lang="ts">

import {Input} from "@/components/input";

import { useAttrs } from 'vue'

defineProps<{
    modelValue: string,
    readonly?: boolean
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
    <Input v-bind="attrs"
           :value="modelValue"
           :readonly="readonly"
           @input="onInput"
    ></Input>
</template>

<style scoped>

</style>