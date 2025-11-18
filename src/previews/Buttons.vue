<script setup>
import Btn            from "../components/button/Btn.vue";
import PreviewSection from "../PreviewSection.vue";
</script>

<template>
    <PreviewSection title="Buttons">
        <template #default>
            <div class="px-6 py-4 flex gap-4">

                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                        <Btn color="neutral">Neutral</Btn>
                        <Btn color="primary">Primary</Btn>
                        <Btn color="secondary">Secondary</Btn>
                        <Btn color="accent">Accent</Btn>
                        <Btn color="info">Info</Btn>
                        <Btn color="success">Success</Btn>
                        <Btn color="warning">Warning</Btn>
                        <Btn color="error">Error</Btn>
                    </div>
                </div>


                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                        <Btn size="xs">XS</Btn>
                        <Btn size="sm">SM</Btn>
                        <Btn size="md">MD</Btn>
                        <Btn size="lg">LG</Btn>
                        <Btn size="xl">XL</Btn>

                        <Btn size="square">S</Btn>
                        <Btn size="circle" color="primary">+</Btn>
                        <Btn size="wide" color="secondary">Wide Button</Btn>
                        <Btn size="block" color="accent">Block Button</Btn>


                        <Btn type="soft">Soft</Btn>
                        <Btn type="ghost">Ghost</Btn>
                        <Btn type="link">Link</Btn>
                        <Btn type="dashed">Dashed</Btn>
                        <Btn type="glass">Glass</Btn>


                        <Btn color="error" type="outline" state="loading">Loading</Btn>
                        <Btn color="warning" type="active">Active</Btn>
                        <Btn color="neutral" type="disabled">Disabled</Btn>
                    </div>
                </div>


            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>