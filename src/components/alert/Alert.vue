<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import {alertVariants, type AlertVariants} from '.'

// Accept card props
const props = defineProps<{
    style?: AlertVariants['style']
    color?: AlertVariants['color']
    direction?: AlertVariants['direction']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes
const cardClass = useVariantClasses(alertVariants, props)
</script>

<template>
    <div role="alert" :class="cardClass">
        <slot/>
    </div>
</template>