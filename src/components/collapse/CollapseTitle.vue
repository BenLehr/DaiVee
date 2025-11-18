<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import {type TableVariants} from '.'

// Accept card props
const props = defineProps<{
    modifier?: TableVariants['modifier']
    style?: TableVariants['style']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes
const classes = useVariantClasses(tableVariants, props)
</script>

<template>
    <div tabindex="0" class="collapse">

            <slot name="title"></slot>

            <slot name="content"></slot>

        
        <div class="collapse-content text-sm">

        </div>
    </div>
</template>