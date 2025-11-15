<script setup lang="ts">

import { cn } from '../../lib/utils';
import type { HTMLAttributes } from "vue";

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

</script>

<template>
    <div class="avatar-group -space-x-6" :class="cn(props.class)">
    </div>
</template>

<style scoped>

</style>