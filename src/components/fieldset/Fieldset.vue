<script setup lang="ts">
import {computed, HTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';
import FieldsetLegend from "./FieldsetLegend.vue";

const props = defineProps<{
    class?: HTMLAttributes['class'];

    legend?: string;
}>()

const classes = computed(() => cn('fieldset', props.class));
</script>

<template>
    <fieldset :class="classes">
        <FieldsetLegend v-if="legend">{{ legend }}</FieldsetLegend>
        <slot/>
    </fieldset>
</template>
