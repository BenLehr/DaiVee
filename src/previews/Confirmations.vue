<script setup>
import PreviewSection from "../PreviewSection.vue";
import Confirmation from "../components/confirmation/Confirmation.vue";

const handleConfirm = () => {
    console.log("Confirmed!");
};

const handlenClose = () => {
    console.log("Closed!");
};
</script>

<template>
    <PreviewSection title="Confirmations">
        <template #default>
            <div class="px-6 py-4 flex gap-4">

                <Confirmation id="myModal"
                              placement="middle"
                              title="Delete Item"
                              @confirm="handleConfirm"
                              @close="handlenClose"
                >
                    Are you sure you want to delete this item? This action cannot be undone.
                </Confirmation>

                <button class="btn" onclick="myModal.showModal()">open confirmation</button>
            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>
