import {cva, type VariantProps} from 'class-variance-authority'

export {default as Collapse} from './Collapse.vue'


export const collapseVariants = cva(
    'collapse',
    {
        variants: {
            modifier: {
                default: '',
                arrow: 'table-zebra', // Adds arrow icon
                plus: 'table-pin-rows', // Adds plus/minus icon
                isOpen: 'table-pin-cols', // Force open
                isClosed: 'table-pin-cols', // Force close
            },
        },
        defaultVariants: {
            modifier: 'default',
        },
    },
)

export type CollapseVariants = VariantProps<typeof collapseVariants>