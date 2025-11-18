<script setup>
import Label            from "../components/label/Label.vue";
import PreviewSection from "../PreviewSection.vue";
</script>

<template>
    <PreviewSection title="Labels">
        <template #default>
            <div class="px-6 py-4 flex gap-4">
                <Label for="test1">
                    Basic label
                </Label>


                <Label class="input" for="test2">
                    <template #default>
                        Label with input
                    </template>
                    <template #body>
                        <input id="test2" type="text" placeholder="Type here..." />
                    </template>
                </Label>


                <Label class="input" for="test3" position="end">
                    <template #default>
                        .com
                    </template>
                    <template #body>
                        <input id="test3" type="text" placeholder="Domain" />
                    </template>
                </Label>


                <Label for="test4" isFloating>
                    <template #default>
                        Floating label with input
                    </template>
                    <template #body>
                        <input id="test4" type="text" class="input" placeholder="Type here..." />
                        Floating label with input
                    </template>
                </Label>
            </div>
        </template>
    </PreviewSection>
</template>
