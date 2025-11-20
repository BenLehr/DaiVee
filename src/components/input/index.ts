import {cva, type VariantProps} from 'class-variance-authority'

export {default as Input} from './Input.vue'

export const inputVariants = cva(
    'input',
    {
        variants: {
            componentStyle: {
                default: '',
                ghost: 'input-ghost',
            },
            color: {
                default: '',
                neutral: 'input-neutral',
                primary: 'input-primary',
                secondary: 'input-secondary',
                accent: 'input-accent',
                info: 'input-info',
                success: 'input-success',
                warning: 'input-warning',
                error: 'input-error',
            },
            size: {
                xs: 'input-xs',
                sm: 'input-sm',
                md: 'input-md',
                lg: 'input-lg',
                xl: 'input-xl',
            },
        },
        defaultVariants: {
            color: 'default',
            size: 'md',
            componentStyle: 'default',
        },
    },
)

export type InputVariants = VariantProps<typeof inputVariants>
