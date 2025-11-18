<script setup lang="ts">
import {computed, HTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = computed(() => cn('fieldset-legend', props.class));
</script>

<template>
    <legend :class="classes">
        <slot></slot>
    </legend>
</template>
