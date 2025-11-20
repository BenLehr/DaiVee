<script setup lang="ts">
import {type TextareaVariantProps, textareaVariants} from '.';
import {HTMLAttributes} from 'vue';
import {useVariantClasses} from '@/composables/useVariantClasses';

const props = defineProps<{
    size?: TextareaVariantProps['size'];
    color?: TextareaVariantProps['color'];
    style?: TextareaVariantProps['style'];
    class?: HTMLAttributes['class'];
}>();


const textareaClasses = useVariantClasses(textareaVariants, props);

</script>

<template>
    <textarea :class="textareaClasses"
              v-bind="$attrs"
    />
</template>
