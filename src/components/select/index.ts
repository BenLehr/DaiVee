import { cva, type VariantProps } from 'class-variance-authority';

export const selectVariants = cva('select', {
    variants: {
        size: {
            xs: 'select-xs',
            sm: 'select-sm',
            md: 'select-md',
            lg: 'select-lg',
            xl: 'select-xl',
        },
        color: {
            default: '',
            neutral: 'select-neutral',
            primary: 'select-primary',
            secondary: 'select-secondary',
            accent: 'select-accent',
            info: 'select-info',
            success: 'select-success',
            warning: 'select-warning',
            error: 'select-error',
        },
        style: {
            default: '',
            ghost: 'select-ghost',
        },
    },
    defaultVariants: {
        size: 'md',
        color: 'default',
        style: 'default',
    },
});

export type SelectVariantProps = VariantProps<typeof selectVariants>;
