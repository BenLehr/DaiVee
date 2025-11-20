<script setup lang="ts">
import {computed, HTMLAttributes} from "vue";
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>();

const classes = computed(() => cn('validator-hint', props.class));

defineProps<{
    message?: string
}>();
</script>

<template>
    <p :class="classes">
        <slot>{{ message }}</slot>
    </p>
</template>
