<script setup lang="ts">
    import type {HTMLAttributes} from 'vue';
    import {cn} from "@/lib/utils";

    const props = defineProps<{
        class?: HTMLAttributes['class'];
    }>()

    const classes = cn(
        'list',
        props.class,
    );

</script>

<template>
    <ul :class="classes">
        <slot />
    </ul>
</template>
