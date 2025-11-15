<script setup lang="ts">

import type {HTMLAttributes} from 'vue';
import {PrimitiveProps} from "reka-ui";
import { type MenuVariants, menuVariants } from '.';

import {cn} from "../../lib/utils";

interface Props extends PrimitiveProps {
    direction?: MenuVariants['direction'];
    size?: MenuVariants['size'];
    title?: string;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    direction: 'horizontal',
    size: 'md',
})

</script>

<template>
    <ul class="menu"
        :class="
            cn(
                menuVariants({
                    direction,
                    size,
                }),
                props.class,
            )
        ">
        <li
            v-if="title"
            v-html="title"
            class="menu-title"
        ></li>
        <slot name="default"></slot>
    </ul>
</template>

<style scoped>

</style>