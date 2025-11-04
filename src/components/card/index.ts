import { cva, type VariantProps } from 'class-variance-authority'

export { default as Card } from './Card.vue'

export const cardVariants = cva(
    'card',
    {
        variants: {
            border: {
                default: '',
                dash: 'card-dash',
                solid: 'card-border'
            },
            imageModifier: {
                default: '',
                side: 'card-side',
                full: 'image-full',
            },
            size: {
                xs: 'card-xs',
                sm: 'card-sm',
                md: 'card-md',           // default size
                lg: 'card-lg',
                xl: 'card-xl',
            },
        },
        defaultVariants: {
            border: 'default',
            imageModifier: 'default',
            size: 'md',
            state: 'default',
        },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
