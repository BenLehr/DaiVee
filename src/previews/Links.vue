<script setup>
import Link         from "../components/link/Link.vue";
import PreviewSection from "../PreviewSection.vue";
</script>

<template>
    <PreviewSection title="Links">
        <template #default>
            <div class="px-6 py-4 flex gap-4">

                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                        <Link color="neutral">Neutral</Link>
                    </div>
                </div>


                <div class="flex gap-4">
                    <!-- Default primary button -->
                    <div class="flex flex-wrap gap-2">
                    </div>
                </div>


            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>