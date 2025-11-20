<script setup>

import Buttons       from "./previews/Buttons.vue";
import Lists       from "./previews/Lists.vue";
import ThemeSwitch   from "./previews/ThemeSwitch.vue";
import Textareas     from "./previews/Textareas.vue";
import Confirmations from "./previews/Confirmations.vue";
import ExampleForm   from "@/previews/ExampleForm.vue";
import Labels        from "./previews/Labels.vue";
import Fieldsets     from "./previews/Fieldsets.vue";
import Dropdown      from "./components/dropdown/Dropdown.vue";
import Avatar        from "./components/avatar/Avatar.vue";
import Card          from "./components/card/Card.vue";
import CardTitle     from "./components/card/CardTitle.vue";
import CardBody      from "./components/card/CardBody.vue";
import CardActions   from "./components/card/CardActions.vue";
import Btn           from "./components/button/Btn.vue";
import Selects       from "./previews/Selects.vue";
import { Fab }       from "@/components/fab/index.js";
</script>


<template>

    <ThemeSwitch></ThemeSwitch>

    <div class="flex flex-col gap-4">

        <ExampleForm></ExampleForm>

        <hr>

        <Card class="w-96 bg-primary" :style="'dash'">
            <CardBody>
                <CardTitle>Yolo</CardTitle>
                <p>wdwddwdw</p>
                <p>wdwddwdw</p>
                <CardActions>
                    <Fab class="">
                        <template #trigger>
                            <div class="btn btn-primary">F</div>
                        </template>

                        <template #close>
                            <div class="btn btn-error">X</div>
                        </template>

                        <template #content>
                            <button class="btn btn-lg">Button A</button>
                            <button class="btn btn-lg">Button B</button>
                            <button class="btn btn-lg">Button C</button>
                        </template>

                    </Fab>
                </CardActions>
            </CardBody>
        </Card>

        <!-- Button's -->

        <Buttons></Buttons>

        <Lists></Lists>


        <Dropdown>

            <template #trigger>

                <Avatar>
                    <img src="https://avatars.githubusercontent.com/u/38668796?v=4" alt="">
                </Avatar>

            </template>

            <template #default>
                efvklmnverfgmvbknrnk
            </template>

        </Dropdown>

        <Selects />

        <Fieldsets />

        <Labels />

        <Textareas />

        <Confirmations />

    </div>


</template>

<style scoped>

</style>
