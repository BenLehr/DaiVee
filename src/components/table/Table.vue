<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import {tableVariants, type TableVariants} from '@/components/table'

// Accept card props
const props = defineProps<{
    modifier?: TableVariants['modifier']
    size?: TableVariants['size']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes
const classes = useVariantClasses(tableVariants, props)
</script>

<template>
    <table :class="classes">
        <thead>
        <slot name="header"/>
        </thead>
        <tbody>
        <slot name="body"/>
        </tbody>
    </table>
</template>