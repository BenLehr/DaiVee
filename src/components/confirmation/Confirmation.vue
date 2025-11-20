<script setup lang="ts">
import {HTMLAttributes} from "vue";
import {confirmationVariants} from "./index";
import {useVariantClasses} from "@/composables/useVariantClasses";
import Btn from "@/components/button/Btn.vue";

const props = withDefaults(defineProps<{
    placement?: "top" | "middle" | "bottom" | "start" | "end";
    class?: HTMLAttributes['class'];

    id: string;
    title: string;
    confirmButtonText?: string;
    closeButtonText?: string;
}>(), {
    confirmButtonText: "Confirm",
    closeButtonText: "Close",
});

const emits = defineEmits<{
    (e: 'confirm'): void;
    (e: 'close'): void;
}>();

const classes = useVariantClasses(confirmationVariants, props);
</script>

<template>
    <Teleport to="body">
        <dialog :id="id" :class="classes">
            <div class="modal-box">
                <h3 class="text-lg font-bold">{{ title }}</h3>

                <p class="py-4">
                    <slot />
                </p>

                <div class="modal-action">
                    <form method="dialog">
                        <Btn type="submit"
                             @click="emits('confirm')"
                             class="mx-2"
                        >
                            {{ confirmButtonText }}
                        </Btn>

                        <Btn type="submit"
                             color="secondary"
                             @click="emits('close')"
                        >
                            {{ closeButtonText }}
                        </Btn>
                    </form>
                </div>
            </div>
        </dialog>
    </Teleport>
</template>
