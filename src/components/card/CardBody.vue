<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

</script>

<template>
    <div class="card-body">
      <slot></slot>
    </div>
</template>
