<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from '../../lib/utils';
import {Primitive, type PrimitiveProps} from 'reka-ui';
import {type LinkVariants, linkVariants} from '.';

interface Props extends PrimitiveProps {
    color?: LinkVariants['color'];
    type?: LinkVariants['type'];
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    type: 'default',
});
</script>

<template>
    <Primitive
        data-slot="link"
        :class="
            cn(
                linkVariants({
                    color,
                    type,
                }),
                props.class,
            )
        "
    >

        <slot></slot>

    </Primitive>
</template>

<style scoped>

</style>