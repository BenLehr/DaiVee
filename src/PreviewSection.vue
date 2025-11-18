<script setup lang="ts">

import {defineProps} from 'vue';

const props = defineProps(['title'])
</script>

<template>
    <div class="px-6 border-dashed border-secondary border-t-2 py-2">
        <h2 class="text-3xl font-extrabold text-primary" v-html="props.title"></h2>
        <slot></slot>
    </div>
</template>

<style scoped>

</style>
