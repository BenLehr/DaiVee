<script setup>
import PreviewSection from "../PreviewSection.vue";
import Fieldset       from "../components/fieldset/Fieldset.vue";
import FieldsetLegend from "../components/fieldset/FieldsetLegend.vue";
</script>

<template>
    <PreviewSection title="Fieldsets">
        <template #default>
            <div class="flex gap-4">
                <Fieldset legend="With integrated legend">
                    <input id="test" placeholder="Your name"/>
                </Fieldset>

                <Fieldset class="bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <FieldsetLegend>With own FieldsetLegend</FieldsetLegend>
                    <input id="test1" placeholder="Your name"/>
                </Fieldset>
            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>
