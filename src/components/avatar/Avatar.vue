<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()


</script>

<template>
    <div class="avatar">
        <div :class="cn(props.class)">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>