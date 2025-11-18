<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = cn(
    'card-actions  justify-end',
    props.class,
);

</script>

<template>
    <div :class="classes">
        <slot/>
    </div>
</template>
