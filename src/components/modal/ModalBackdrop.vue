<script setup lang="ts">
import {computed, HTMLAttributes} from "vue";
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();

const classes = computed(() => cn('modal-backdrop', props.class));
</script>

<template>
    <form method="dialog" :class="classes">
        <button />
    </form>
</template>
