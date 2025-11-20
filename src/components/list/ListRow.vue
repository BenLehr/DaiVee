<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

const classes = cn(
    'list-row',
    props.class,
);

</script>

<template>
    <li :class="classes">
        <slot />
    </li>
</template>
