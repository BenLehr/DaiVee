import {cva, type VariantProps} from "class-variance-authority";

export const modalVariants = cva(
    "modal",
    {
        variants: {
            placement: {
                top: "modal-top",
                middle: "modal-middle",
                bottom: "modal-bottom",
                start: "modal-start",
                end: "modal-end",
            },
        },
        defaultVariants: {
            placement: "middle",
        },
    }
);

export type ModalVariants = VariantProps<typeof modalVariants>
