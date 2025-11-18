<script setup lang="ts">
import {type TextareaVariantProps, textareaVariants} from '.';
import {HTMLAttributes} from 'vue';
import {useVariantClasses} from '../../composables/useVariantClasses';

type Props = {
    size?: TextareaVariantProps['size'];
    color?: TextareaVariantProps['color'];
    style?: TextareaVariantProps['style'];

    class?: HTMLAttributes['class'];

    name?: string;
    rows?: number;
    placeholder?: string;
    isDisabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {rows: 4});
const value = defineModel<string>()

const textareaClasses = useVariantClasses(textareaVariants, props);

const onInput = (e: Event) => {
    value.value = (e.target as HTMLTextAreaElement).value;
};
</script>

<template>
    <textarea :class="textareaClasses"
              :placeholder="placeholder"
              :disabled="isDisabled"
              :rows="rows"
              :value="modelValue"
              @input="onInput"
    />
</template>
