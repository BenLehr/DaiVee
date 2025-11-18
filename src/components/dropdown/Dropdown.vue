<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {useVariantClasses} from "../../composables/useVariantClasses";
import {dropdownVariants, DropdownVariants} from "./index";

const props = defineProps<{
    modifier?: DropdownVariants['modifier']
    placement?: DropdownVariants['placement']
    class?: HTMLAttributes['class']
}>()

// Merge CVA + user classes@
const classes = useVariantClasses(dropdownVariants, props)

</script>

<template>
    <div :class="classes">

        <div tabindex="0">
            <slot name="trigger"></slot>
        </div>

        <ul tabindex="-1" class="dropdown-content menu">
            <slot name="content"></slot>
        </ul>
    </div>
</template>

<style scoped>

</style>