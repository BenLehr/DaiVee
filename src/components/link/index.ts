import {cva, type VariantProps} from 'class-variance-authority'

export {default as Link} from './Link.vue'

export const linkVariants = cva(
    'link',
    {
        variants: {
            color: {
                neutral: 'link-neutral',
                primary: 'link-primary',
                secondary: 'link-secondary',
                accent: 'link-accent',
                info: 'link-info',
                success: 'link-success',
                warning: 'link-warning',
                error: 'link-error',
            },
            type: {
                default: '',            //
                hover: 'link-hover', // Only shows underline on hover
            },
        },
        defaultVariants: {
            color: 'primary',
            type: 'default',
        },
    },
)

export type LinkVariants = VariantProps<typeof linkVariants>
