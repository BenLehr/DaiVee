<script setup lang="ts">
import {computed, HTMLAttributes, LabelHTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';

const props = withDefaults(defineProps<{
    class?: HTMLAttributes['class'];
    for?: LabelHTMLAttributes['for'];

    position: 'start' | 'end';
    isFloating?: boolean;
}>(), { position: 'start' });

const classes = computed(() => cn(props.isFloating ? 'floating-label' : '', props.class));
const spanClasses = computed(() => !props.isFloating ? 'label' : '');
</script>

<template>
    <label :class="classes" :for="props.for">
        <span v-if="position === 'start'" :class="spanClasses">
            <slot></slot>
        </span>

        <slot name="body"></slot>

        <span v-if="position === 'end'" :class="spanClasses">
            <slot></slot>
        </span>
    </label>
</template>
