<script setup>

import Buttons     from "./previews/Buttons.vue";
import Links       from "./previews/Links.vue";
import ThemeSwitch from "./previews/ThemeSwitch.vue";
</script>

<template>

    <ThemeSwitch></ThemeSwitch>

    <div class="flex flex-col gap-4">

        <!-- Button's -->
        <Buttons></Buttons>

        <Links></Links>

        <Buttons></Buttons>


    </div>


</template>

<style scoped>

</style>