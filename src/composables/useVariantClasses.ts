import { computed, type ComputedRef } from 'vue'
import type { ClassValue } from 'clsx'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

/**
 * Generic composable for merging:
 * - CVA variants
 * - user classes
 * - extra conditional classes
 */
export function useVariantClasses<
    T extends (...args: any) => string,           // CVA function
    P extends VariantProps<T> & { class?: ClassValue } // Variant props + class
>(
    variantsFn: T,
    props: P,
    extra?: ClassValue | (() => ClassValue)       // optional static or computed extra classes
): ComputedRef<string> {
    return computed(() => {
        const extraClasses =
            typeof extra === 'function' ? extra() : extra

        return cn(
            variantsFn(props),
            props.class,
            extraClasses
        )
    })
}
