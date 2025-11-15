<script setup lang="ts">

import {cn} from "../../lib/utils";

interface Props extends PrimitiveProps {
    placement?: MenuVariants['direction'];
    dropdownHover: boolean;
    dropdownOpen: boolean;
    dropdownClose: boolean;
    title?: string;
    class?: HTMLAttributes['class'];
}

</script>

<template>
    <div class="dropdown dropdown-end">

        <div tabindex="0">
            <slot name="trigger"></slot>
        </div>

        <ul tabindex="-1" class="dropdown-content menu">
            <slot name="default"></slot>
        </ul>
    </div>
</template>

<style scoped>

</style>