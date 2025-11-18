import {cva, type VariantProps} from 'class-variance-authority'

export {default as Alert} from './Alert.vue'


export const alertVariants = cva(
    'alert',
    {
        variants: {
            style: {
                default: '',
                outline: 'alert-outline',
                dash: 'alert-dash',
                soft: 'alert-soft',
            },
            color: {
                default: '',
                info: 'alert-info',
                success: 'alert-success',
                warning: 'alert-warning',
                error: 'alert-error',
            },
            direction: {
                vertical: 'alert-vertical', // Vertical layout, good for mobile
                horizontal: 'alert-horizontal', // Horizontal layout, good for desktop
            },
        },
        defaultVariants: {
            style: 'default',
            color: 'default',
            direction: 'horizontal',
        },
    },
)

export type AlertVariants = VariantProps<typeof alertVariants>
