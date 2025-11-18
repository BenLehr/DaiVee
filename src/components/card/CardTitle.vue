<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = cn(
    'card-title',
    props.class,
);


</script>

<template>
    <h2 :class="classes">
        <slot/>
    </h2>
</template>
