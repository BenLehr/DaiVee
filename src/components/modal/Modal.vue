<script setup lang="ts">
import {HTMLAttributes} from "vue";
import {modalVariants, ModalVariants} from "./index";
import {useVariantClasses} from "@/composables/useVariantClasses";

const props = defineProps<{
    placement?: ModalVariants['placement'];
    id?: HTMLAttributes['id'];
    class?: HTMLAttributes['class'];
}>();

const classes = useVariantClasses(modalVariants, props);
</script>

<template>
    <Teleport to="body">
        <dialog :id="id" :class="classes">
            <slot />
        </dialog>
    </Teleport>
</template>
