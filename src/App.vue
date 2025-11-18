<script setup>

import Buttons     from "./previews/Buttons.vue";
import ThemeSwitch from "./previews/ThemeSwitch.vue";
import Dropdown    from "./components/dropdown/Dropdown.vue";
import Avatar      from "./components/avatar/Avatar.vue";
import Card        from "./components/card/Card.vue";
import CardTitle   from "./components/card/CardTitle.vue";
import CardBody    from "./components/card/CardBody.vue";
import CardActions from "./components/card/CardActions.vue";
import Btn         from "./components/button/Btn.vue";
</script>

<template>

    <ThemeSwitch></ThemeSwitch>

    <div class="flex flex-col gap-4">

        <Card class="w-96 bg-primary" :style="'dash'">
            <CardBody>
                <CardTitle>Yolo</CardTitle>
                <p>wdwddwdw</p>
                <p>wdwddwdw</p>
                <CardActions>
                    <Btn color="neutral">Neutral</Btn>
                    <Btn color="primary">Primary</Btn>
                </CardActions>
            </CardBody>
        </Card>

        <!-- Button's -->

        <Buttons></Buttons>


        <Dropdown>

            <template #trigger>

                <Avatar>
                    <img src="https://avatars.githubusercontent.com/u/38668796?v=4" alt=""></img>
                </Avatar>

            </template>

            <template #default>
                efvklmnverfgmvbknrnk
            </template>

        </Dropdown>

    </div>


</template>

<style scoped>

</style>