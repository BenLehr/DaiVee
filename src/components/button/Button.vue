<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '../../lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
    color?: ButtonVariants['color'];
    type?: ButtonVariants['type'];
    size?: ButtonVariants['size'];
    state?: ButtonVariants['state'];
    isLoading?: boolean;
    icon?: boolean // disables slot-based icon layout
    iconPosition?: 'left' | 'right';
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    isLoading: false,
    icon: false,
    iconPosition: 'left',
})
</script>

<template>
    <Primitive
        data-slot="button"
        :as="as"
        :as-child="asChild"
        :disabled="state === 'disabled' || isLoading"
        :class="
            cn(
                buttonVariants({
                    color,
                    type,
                    size,
                    state,
                }),
                props.class,
                icon ? 'inline-flex items-center gap-2' : '',
            )
        "
    >
        <!-- Spinner (replaces icon/text if loading) -->
        <span
            v-if="isLoading"
            class="loading loading-spinner"
            :class="{ 'mr-2': iconPosition === 'left', 'ml-2': iconPosition === 'right' }"
        ></span>

        <!-- Icon slot (optional, before text) -->
        <slot v-if="!isLoading && icon && iconPosition === 'left'" name="icon" />

        <!-- Button text -->
        <slot />

        <!-- Icon slot (optional, after text) -->
        <slot v-if="!isLoading && icon && iconPosition === 'right'" name="icon" />
    </Primitive>
</template>
