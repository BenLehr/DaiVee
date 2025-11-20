import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
    'textarea',
    {
        variants: {
            size: {
                xs: 'textarea-xs',
                sm: 'textarea-sm',
                md: 'textarea-md',
                lg: 'textarea-lg',
                xl: 'textarea-xl',
            },
            color: {
                default: '',
                neutral: 'textarea-neutral',
                primary: 'textarea-primary',
                secondary: 'textarea-secondary',
                accent: 'textarea-accent',
                info: 'textarea-info',
                success: 'textarea-success',
                warning: 'textarea-warning',
                error: 'textarea-error',
            },
            componentStyle: {
                default: '',
                ghost: 'textarea-ghost',
            },
        },
        defaultVariants: {
            size: 'md',
            color: 'default',
            componentStyle: 'default',
        },
    }
);

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
