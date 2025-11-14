<script setup lang="ts">

import type {HTMLAttributes} from 'vue';
import type {PrimitiveProps} from "reka-ui";
import type {MenuVariants} from "../menu";

interface Props extends PrimitiveProps {
    showDropdown?: PrimitiveProps['boolean'];
    direction?: MenuVariants['direction'];
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    isLoading: false,
    icon: false,
    iconPosition: 'left',
})

</script>

<template>
    <ul class="menu">
        <slot name="menu-title"></slot>
        <slot name="menu-dropdown"></slot>
        <slot name="default"></slot>
    </ul>
</template>

<style scoped>

</style>