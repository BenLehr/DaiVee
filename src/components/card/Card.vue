<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVariantClasses } from '@/composables/useVariantClasses'
import { cardVariants, type CardVariants } from '.'

// Accept card props
const props = defineProps<{
    modifier?: CardVariants['modifier']
    size?: CardVariants['size']
    style?: CardVariants['style']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes
const cardClass = useVariantClasses(cardVariants, props)
</script>

<template>
    <div :class="cardClass">
        <slot />
    </div>
</template>