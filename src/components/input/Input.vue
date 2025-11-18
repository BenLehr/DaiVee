<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {useVariantClasses} from "@/composables/useVariantClasses";
import {inputVariants, InputVariants} from "./index";

const props = defineProps<{
    style?: InputVariants['style']
    color?: InputVariants['color']
    size?: InputVariants['size']
    class?: HTMLAttributes['class']
}>()

const classes = useVariantClasses(inputVariants, props)

</script>

<template>
    <input :class="classes"/>
</template>

<style scoped>

</style>