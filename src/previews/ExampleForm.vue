<script setup lang="ts">

import TextInput from "@/previews/TextInput.vue";
import {ref} from "vue";

const yolo = ref('bolo')

</script>

<template>

    <form>
        <TextInput v-model="yolo" ></TextInput>
    </form>

</template>

<style scoped>

</style>