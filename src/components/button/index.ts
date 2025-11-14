import {cva, type VariantProps} from 'class-variance-authority'

export {default as Button} from './Button.vue'

export const buttonVariants = cva(
    'btn',
    {
        variants: {
            color: {
                neutral: 'btn-neutral',
                primary: 'btn-primary',
                secondary: 'btn-secondary',
                accent: 'btn-accent',
                info: 'btn-info',
                success: 'btn-success',
                warning: 'btn-warning',
                error: 'btn-error',
            },
            type: {
                default: '',
                outline: 'btn-outline',
                soft: 'btn-soft',
                ghost: 'btn-ghost',
                link: 'btn-link',
                dashed: 'btn-dashed',
                glass: 'btn-glass',
            },
            size: {
                xs: 'btn-xs',
                sm: 'btn-sm',
                md: 'btn-md',
                lg: 'btn-lg',
                xl: 'btn-xl',
                wide: 'btn-wide',
                block: 'btn-block',
                square: 'btn-square',
                circle: 'btn-circle',
            },
            state: {
                default: '',
                active: 'btn-active',
                disabled: 'btn-disabled',
                loading: 'loading',
            },
        },
        compoundVariants: [
            {type: 'outline', color: 'primary', class: 'btn-outline btn-primary'},
            {type: 'outline', color: 'error', class: 'btn-outline btn-error'},
        ],
        defaultVariants: {
            color: 'primary',
            type: 'default',
            size: 'md',
            state: 'default',
        },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
