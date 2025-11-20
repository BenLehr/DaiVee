<script setup>
import PreviewSection from "../PreviewSection.vue";
import Modal          from "@/components/modal/Modal.vue";
import Btn            from "@/components/button/Btn.vue";
import ModalBox       from "@/components/modal/ModalBox.vue";
import ModalBackdrop  from "@/components/modal/ModalBackdrop.vue";
import ModalActions   from "@/components/modal/ModalActions.vue";
</script>

<template>
    <PreviewSection title="Modals">
        <template #default>
            <div class="px-6 py-4 flex gap-4">
                <!-- Backdrop close -->
                <Modal id="myModal">
                    <ModalBox>
                        <span>Click on backdrop to close</span>
                    </ModalBox>
                    <ModalBackdrop/>
                </Modal>
                <button class="btn" onclick="myModal.showModal()">open modal (backdrop closes)</button>

                <!-- Actions -->
                <Modal id="myModal1" :closeOnBackdropClick="false">
                    <ModalBox>
                        <span>Click "close" to close</span>

                        <ModalActions>
                            <Btn class="mx-2">Confirm</Btn>
                            <Btn type="submit" color="secondary">Close</Btn>
                        </ModalActions>
                    </ModalBox>
                </Modal>
                <button class="btn" onclick="myModal1.showModal()">open modal with actions</button>

                <!-- Custom width -->
                <Modal id="myModal2">
                    <ModalBox class="w-11/12 max-w-5xl">
                        <span>Modal with custom width</span>

                        <ModalActions>
                            <Btn type="submit" class="mx-2">Confirm</Btn>
                            <Btn type="submit" color="secondary">Close</Btn>
                        </ModalActions>
                    </ModalBox>
                    <ModalBackdrop/>
                </Modal>
                <button class="btn" onclick="myModal2.showModal()">open modal with custom width</button>
            </div>
        </template>
    </PreviewSection>
</template>

<style scoped>

</style>
