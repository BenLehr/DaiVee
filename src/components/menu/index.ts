import {cva, type VariantProps} from 'class-variance-authority'

export {default as Menu} from './Menu.vue'

export const MenuVariants = cva(
    'menu',
    {
        variants: {
            size: {
                default: '',
                xs: 'xs',
                sm: 'sm',
                md: 'xs',
                lg: 'xs',
                xl: 'xs',
            },
            direction: {
                vertical: "vertical",
                horizontal: "horizontal"
            }
        },
        defaultVariants: {
            size: 'default',
            type: 'default',
        },
    },
)

export type MenuVariants = VariantProps<typeof MenuVariants>
