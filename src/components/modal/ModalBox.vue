<script setup lang="ts">
import {computed, HTMLAttributes} from "vue";
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();

const classes = computed(() => cn('modal-box', props.class));
</script>

<template>
    <div :class="classes">
        <slot name="default" />
    </div>
</template>
