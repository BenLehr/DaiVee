<script setup>
import Button         from "../components/button/Button.vue";
import PreviewSection from "../PreviewSection.vue";
</script>

<template>
    <PreviewSection title="Buttons">
        <template #default>
            <div class="px-6 py-4 flex gap-4">

                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                        <Button color="neutral">Neutral</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="accent">Accent</Button>
                        <Button color="info">Info</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="error">Error</Button>
                    </div>
                </div>


                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                        <Button size="xs">XS</Button>
                        <Button size="sm">SM</Button>
                        <Button size="md">MD</Button>
                        <Button size="lg">LG</Button>
                        <Button size="xl">XL</Button>

                        <Button size="square">S</Button>
                        <Button size="circle" color="primary">+</Button>
                        <Button size="wide" color="secondary">Wide Button</Button>
                        <Button size="block" color="accent">Block Button</Button>


                        <Button type="soft">Soft</Button>
                        <Button type="ghost">Ghost</Button>
                        <Button type="link">Link</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="glass">Glass</Button>


                        <Button color="error" type="outline" state="loading">Loading</Button>
                        <Button color="warning" type="active">Active</Button>
                        <Button color="neutral" type="disabled">Disabled</Button>
                    </div>
                </div>


            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>