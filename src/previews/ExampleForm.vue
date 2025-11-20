<script setup lang="ts">

import TextInput from "@/previews/TextInput.vue";
import {ref} from "vue";
import Textarea from "@/previews/Textarea.vue";

const textInputContent = ref('Hello!')
const textareaContent = ref('Hello World!')

</script>

<template>

    <h1 v-html="textInputContent"></h1>
    <p v-html="textareaContent"></p>

    <form>
        <TextInput v-model="textInputContent" ></TextInput>
        <Textarea v-model="textareaContent" :rows="5" ></Textarea>
    </form>

</template>

<style scoped>

</style>