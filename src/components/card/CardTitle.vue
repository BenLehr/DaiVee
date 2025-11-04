<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {cn} from '../../lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

</script>

<template>
    <h2 :class="
      cn(
        'card-title',
        props.class,
      )
    ">
        <slot></slot>
    </h2>
</template>
