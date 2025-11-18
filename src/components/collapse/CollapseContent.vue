<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = cn(
    'collapse-content',
    props.class,
);

</script>

<template>
    <div :class="classes">
        <slot/>
    </div>
</template>