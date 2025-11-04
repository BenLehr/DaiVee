<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {cn} from '../../lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

</script>

<template>
    <figure :class="
      cn(
        '',
        props.class,
      )
    ">
        <slot></slot>
    </figure>
</template>
