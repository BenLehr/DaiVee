<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import { collapseVariants,type CollapseVariants} from '.'

// Accept card props
const props = defineProps<{
    modifier?: CollapseVariants['modifier']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes
const classes = useVariantClasses(collapseVariants, props)
</script>

<template>
    <div tabindex="0" :class="classes">
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>