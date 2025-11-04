import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
    'btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
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
                default: '',            // no extra modifier = solid style
                outline: 'btn-outline', // documented outline style :contentReference[oaicite:2]{index=2}
                soft: 'btn-soft',       // documented soft style :contentReference[oaicite:3]{index=3}
                ghost: 'btn-ghost',     // documented ghost style :contentReference[oaicite:4]{index=4}
                link: 'btn-link',       // documented link style :contentReference[oaicite:5]{index=5}
                dashed: 'btn-dashed',   // documented dash style :contentReference[oaicite:6]{index=6}
                glass: 'btn-glass',     // documented glass (transparent) style :contentReference[oaicite:7]{index=7}
            },
            size: {
                xs: 'btn-xs',
                sm: 'btn-sm',
                md: 'btn-md',           // default size
                lg: 'btn-lg',
                xl: 'btn-xl',
                wide: 'btn-wide',       // modifier for full width-like padding :contentReference[oaicite:8]{index=8}
                block: 'btn-block',     // full width button :contentReference[oaicite:9]{index=9}
                square: 'btn-square',   // shape modifier 1:1 ratio :contentReference[oaicite:10]{index=10}
                circle: 'btn-circle',   // circular button :contentReference[oaicite:11]{index=11}
            },
            state: {
                default: '',
                active: 'btn-active',     // documented “active” behavior :contentReference[oaicite:12]{index=12}
                disabled: 'btn-disabled', // documented disabled state :contentReference[oaicite:13]{index=13}
                loading: 'loading',       // works via class “loading” in daisyUI :contentReference[oaicite:14]{index=14}
            },
        },
        compoundVariants: [
            // You can define combinations if necessary, e.g. outline + color:
            { type: 'outline', color: 'primary', class: 'btn-outline btn-primary' },
            { type: 'outline', color: 'error', class: 'btn-outline btn-error' },
            // … you can replicate for other colors if needed
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
