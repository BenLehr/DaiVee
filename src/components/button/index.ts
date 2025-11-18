import {cva, type VariantProps} from 'class-variance-authority'

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
            style: {
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
            },
            modifier: {
                default: '',
                wide: 'btn-wide',
                block: 'btn-block',
                square: 'btn-square',
                circle: 'btn-circle',
            },
            behavior: {
                default: '',
                active: 'btn-active',
                disabled: 'btn-disabled',
            },
            htmlTag: {
                // todo: maybe here is a better solution with native attributes
                button: 'button',
                routerLink: 'RouterLink',
                link: 'link',
                span: 'span',
                div: 'div'
            }
        },
        defaultVariants: {
            color: 'primary',
            style: 'default',
            size: 'md',
            modifier: 'default',
            behavior: 'default',
            htmlTag: 'div',
        },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
