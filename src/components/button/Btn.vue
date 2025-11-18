<script setup lang="ts">
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonHTMLAttributes } from '@vue/runtime-dom'

import { useVariantClasses } from '../../composables/useVariantClasses'
import { buttonVariants, type ButtonVariants } from '.'

const props = withDefaults(defineProps<{
    // DaisyUI / CVA variant props
    color?: ButtonVariants['color']
    style?: ButtonVariants['style']
    size?: ButtonVariants['size']
    modifier?: ButtonVariants['modifier']
    behavior?: ButtonVariants['behavior']

    // Extra classes to merge
    class?: HTMLAttributes['class']

    // Render as any tag/component (e.g. 'button', 'a', 'div', RouterLink, ...)
    htmlTag?: ButtonVariants['htmlTag']

    // Native <button> attributes (only used when rendered as <button>)
    type?: ButtonHTMLAttributes['type']
    disabled?: ButtonHTMLAttributes['disabled']
    autofocus?: ButtonHTMLAttributes['autofocus']
}>(), {
    type: 'button',       // avoid accidental form submit
    htmlTag: 'button',   // default element
})

// Merge CVA variants + user classes
const btnClass = useVariantClasses(buttonVariants, props)

// Decide which HTML tag / component to render
const tag = computed(() => props.renderAs ?? 'button')
</script>

<template>
    <!-- Real <button>: gets native button attributes -->
    <button
        v-if="tag === 'button'"
        :class="btnClass"
        :type="props.type"
        :disabled="props.disabled"
        :autofocus="props.autofocus"
    >
        <slot />
    </button>

    <!-- Anything else: just layout / classes, no button-only attrs -->
    <component
        v-else
        :is="tag"
        :class="btnClass"
    >
        <slot />
    </component>
</template>
