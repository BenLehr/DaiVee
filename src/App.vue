<script setup>

import Buttons     from "./previews/Buttons.vue";
import Links       from "./previews/Links.vue";
import ThemeSwitch from "./previews/ThemeSwitch.vue";
import Dropdown    from "./components/dropdown/Dropdown.vue";
import { Menu }    from "./components/menu/index.js";
import Avatar      from "./components/avatar/Avatar.vue";
</script>

<template>

    <ThemeSwitch></ThemeSwitch>

    <div class="flex flex-col gap-4">

        <!-- Button's -->
        <Buttons></Buttons>

        <Links></Links>

        <Buttons></Buttons>


        <Dropdown>

            <template #trigger>

                <Avatar>
                    <img src="https://avatars.githubusercontent.com/u/38668796?v=4" alt=""></img>
                </Avatar>

            </template>

            <template #default>
<Menu>
    <MenubarItem>wddw</MenubarItem>
    <MenubarItem>wddw</MenubarItem>
    <MenubarItem>wddw</MenubarItem>
</Menu>
            </template>

        </Dropdown>

    </div>


</template>

<style scoped>

</style>