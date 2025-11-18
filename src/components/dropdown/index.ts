import {cva, type VariantProps} from 'class-variance-authority'

export {default as Dropdown} from './Dropdown.vue'

export const dropdownVariants = cva(
    'menu',
    {
        variants: {
            placement: {
                default: 'dropdown-end',
                end: 'dropdown-end',
                top: 'dropdown-top',
                left: 'dropdown-left',
                right: 'dropdown-right',
            },
            modifier: {
                default: '',
                hover: 'dropdown-hover',
                open: 'dropdown-open',
                close: 'dropdown-close'
            }
        },
        defaultVariants: {
            placement: 'default',
            modifier: 'default',
        },
    },
)

export type DropdownVariants = VariantProps<typeof dropdownVariants>
