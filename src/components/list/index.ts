import {cva, type VariantProps} from 'class-variance-authority'

export {default as ListCol} from './ListCol.vue'

export const listColVariants = cva(
    '',
    {
        variants: {
            modifier: {
                default: '',
                wrap: 'list-col-wrap',
                grow: 'list-col-grow',
            },
        },
        defaultVariants: {
            modifier: 'default',
        },
    },
)

export type ListColVariants = VariantProps<typeof listColVariants>
