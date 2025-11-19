<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useVariantClasses} from '@/composables/useVariantClasses'
import {fabVariants, type FabVariants} from '.'
import { useSlots } from 'vue'


// Accept card props
const props = defineProps<{
    modifier?: FabVariants['modifier']
    class?: HTMLAttributes['class']
}>();

// Merge CVA + user classes
const classes = useVariantClasses(fabVariants, props);

const slots = useSlots();

</script>

<template>

    <div :class="classes">
        <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->

        <div tabindex="0">
            <slot name="trigger"/>
        </div>

        <!-- close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder -->
        <div v-if="!!slots.close"  class="fab-close">
            <slot name="close">

            </slot>
        </div>

        <slot name="content"/>
    </div>

</template>

<style scoped>

</style>