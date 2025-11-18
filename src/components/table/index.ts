import {cva, type VariantProps} from 'class-variance-authority'

export {default as Table} from './Table.vue'


export const tableVariants = cva(
    'table',
    {
        variants: {
            modifier: {
                default: '',
                zebra: 'table-zebra', // For <table> to show zebra stripe rows
                pinRows: 'table-pin-rows', // For <table> to make all the rows inside <thead> and <tfoot> sticky
                pinCols: 'table-pin-cols', // For <table> to make all the <th> columns sticky
            },
            size: {
                xs: 'table-xs',
                sm: 'table-sm',
                md: 'table-md',
                lg: 'table-lg',
                xl: 'table-xl',
            },
        },
        defaultVariants: {
            modifier: 'default',
            size: 'md',
        },
    },
)

export type TableVariants = VariantProps<typeof tableVariants>
