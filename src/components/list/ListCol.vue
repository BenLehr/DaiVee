<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import {listColVariants, type ListColVariants} from '.'

// Accept listCol props
const props = defineProps<{
    modifier?: ListColVariants['modifier']
    class?: HTMLAttributes['class']
}>();

// Merge CVA + user classes
const classes = useVariantClasses(listColVariants, props);

</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
