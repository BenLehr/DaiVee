<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from '@/lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = cn(
    props.class,
);


</script>

<template>
    <figure :class="classes">
        <slot/>
    </figure>
</template>
