import {cva, type VariantProps} from 'class-variance-authority'

export {default as Fab} from './Fab.vue'

export const fabVariants = cva(
    'fab',
    {
        variants: {
            modifier: {
                default: '',
                flower: 'fab-flower',
                top: 'dropdown-top',
                left: 'dropdown-left',
                right: 'dropdown-right',
            },
        },
        defaultVariants: {
            modifier: 'default',
        },
    },
)

export type FabVariants = VariantProps<typeof fabVariants>
