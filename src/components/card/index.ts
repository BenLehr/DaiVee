import {cva, type VariantProps} from 'class-variance-authority'

export const cardVariants = cva(
    'card',
    {
        variants: {
            style: {
                default: '',
                dash: 'card-dash',
                solid: 'card-border'
            },
            modifier: {
                default: '',
                side: 'card-side',
                full: 'image-full',
            },
            size: {
                xs: 'card-xs',
                sm: 'card-sm',
                md: 'card-md',
                lg: 'card-lg',
                xl: 'card-xl',
            },
        },
        defaultVariants: {
            style: 'default',
            modifier: 'default',
            size: 'md',
        },
    },
)

export type CardVariants = VariantProps<typeof cardVariants>
