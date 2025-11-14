<script setup lang="ts">
import type {HTMLAttributes} from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>()

</script>

<template>
    <div class="card-body">
        <slot></slot>
    </div>
</template>
