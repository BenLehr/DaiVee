<script setup lang="ts">
import {type SelectVariantProps, selectVariants} from '.';
import {HTMLAttributes} from 'vue';
import {useVariantClasses} from "../../composables/useVariantClasses";

type Props = {
    size?: SelectVariantProps['size'];
    color?: SelectVariantProps['color'];
    style?: SelectVariantProps['style'];

    class?: HTMLAttributes['class'];

    name?: string;
    isDisabled?: boolean;
};

const props = defineProps<Props>();
const value = defineModel<string | number>();

const selectClasses = useVariantClasses(selectVariants, props);

</script>

<template>
    <select :class="selectClasses"
            :name="name"
            :disabled="isDisabled"
            v-model="value"
    >
        <slot/>
    </select>
</template>
