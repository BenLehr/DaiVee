<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {useVariantClasses} from "@/composables/useVariantClasses";
import {inputVariants, InputVariants} from "./index";

const props = defineProps<{
    componentStyle?: InputVariants['componentStyle']
    color?: InputVariants['color']
    size?: InputVariants['size']
    class?: HTMLAttributes['class']
}>()

const classes = useVariantClasses(inputVariants, props)

</script>

<template>
    <input v-bind="$attrs" :class="classes"/>
</template>

<style scoped>

</style>