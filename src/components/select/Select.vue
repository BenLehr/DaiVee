<script setup lang="ts">
import {type SelectVariantProps, selectVariants} from '.';
import {HTMLAttributes} from 'vue';
import {useVariantClasses} from "../../composables/useVariantClasses";

const props = defineProps<{
    size?: SelectVariantProps['size'];
    color?: SelectVariantProps['color'];
    componentStyle?: SelectVariantProps['componentStyle'];
    class?: HTMLAttributes['class'];
}>();

const selectClasses = useVariantClasses(selectVariants, props);
</script>

<template>
    <select v-bind="$attrs" :class="selectClasses">
        <slot/>
    </select>
</template>
