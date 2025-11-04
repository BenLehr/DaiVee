<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {cn} from '../../lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

</script>

<template>
    <div
        data-slot="card"
        :class="
      cn(
        'card bg-base-100 w-96 shadow-sm',
        props.class,
      )
    "
    >
        <slot/>
    </div>
</template>
