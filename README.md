# DaiVee – DaisyUI Layout Components for Vue

DaiVee is a reusable layout wrapper system for **DaisyUI + Vue 3**.

Instead of manually sprinkling DaisyUI utility classes everywhere, DaiVee turns them into **typed, composable, “propsable” layouts** – so you configure your UI using Vue props, not long class strings.

Think of it as:

> **DaisyUI components → Vue components with typed variants → layout as props** ✔️

---
## 🏎️💨 TLDR: Quickstart

**You need ```Node 22``` with ```npm```**

1. Install dependencies with ```npm install```
2. Run dev server with ```npm run dev```  
3. Build distribution with ```npm run build```  

---

## 🌈 Core Ideas

### 1. “Propsable” Layouts

Each DaisyUI component (e.g. `card`, `btn`) is expressed as:

- A **CVA definition** (`cardVariants`, `buttonVariants`, …)
- A **Vue component** that:
    - Takes variant props (`color`, `size`, `style`, etc.)
    - Merges DaisyUI classes + variant classes + custom `class`
    - Renders the proper HTML (or polymorphic tag via `renderAs`)

Example for a button:

```html
<Button
  color"primary"
  style="outline"
  size="lg"
  modifier="wide"
>
  Click me
</Button>
```

Behind the scenes this turns into a class like:

```txt
btn btn-primary btn-outline btn-lg btn-wide
```
But _you_ *don’t* have to remember any of that 💡

---

## 🧩 Architecture Overview
DaiVee relies on three key pieces:

1. CVA (class-variance-authority)
Encodes all DaisyUI variants in a type-safe way.

2. ```useVariantClasses``` composable merges:
   - CVA-generated classes
   - class from props
   - optional extra class logic

3. Polymorphic Vue components
Layout components (like Button, Card) that:
- Accept variant props
- Allow renderAs="a" | 'button' | 'div' | Component
- Optionally forward native attributes when appropriate

## 🔧 Setup
You’ll typically need:

- Vue 3 + ```<script setup>``` + TypeScript
- Tailwind CSS
- DaisyUI
- class-variance-authority
- clsx
- tailwind-merge

*Example utility helpers:*

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```
**Generic composable:**

```ts
// composables/useVariantClasses.ts
import { computed, type ComputedRef } from 'vue'
import type { ClassValue } from 'clsx'
import { cn } from '../lib/utils'
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
```
---

## ✅ Example: DaiVee Button
Let’s look at the full flow for a DaisyUI Button wrapped as a DaiVee component.

1. Define the Variants (CVA)
```ts
// components/button/index.ts
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'btn',
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
      style: {
        default: '',
        outline: 'btn-outline',
        soft: 'btn-soft',
        ghost: 'btn-ghost',
        link: 'btn-link',
        dashed: 'btn-dashed',
        glass: 'btn-glass',
      },
      size: {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl',
      },
      modifier: {
        default: '',
        wide: 'btn-wide',
        block: 'btn-block',
        square: 'btn-square',
        circle: 'btn-circle',
      },
      behavior: {
        default: '',
        active: 'btn-active',
        disabled: 'btn-disabled',
      },
    },
    defaultVariants: {
      color: 'primary',
      style: 'default',
      size: 'md',
      modifier: 'default',
      behavior: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
```

Create the Polymorphic Button Component

```vue
<!-- components/button/Button.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonHTMLAttributes } from '@vue/runtime-dom'

import { useVariantClasses } from '../../composables/useVariantClasses'
import { buttonVariants, type ButtonVariants } from '.'

const props = withDefaults(defineProps<{
  // DaisyUI / CVA variants
  color?: ButtonVariants['color']
  style?: ButtonVariants['style']
  size?: ButtonVariants['size']
  modifier?: ButtonVariants['modifier']
  behavior?: ButtonVariants['behavior']

  // Extra classes to merge
  class?: HTMLAttributes['class']

  // Native <button> attributes (only applied for actual <button>)
  type?: ButtonHTMLAttributes['type']
  disabled?: ButtonHTMLAttributes['disabled']
  autofocus?: ButtonHTMLAttributes['autofocus']

  // Render as any tag/component (e.g. 'button', 'a', 'div', RouterLink, ...)
  renderAs?: string
}>(), {
  type: 'button',
  renderAs: 'button',
})

// Merge CVA + user classes
const btnClass = useVariantClasses(buttonVariants, props)

// HTML tag / component to render
const tag = computed(() => props.renderAs ?? 'button')
</script>

<template>
  <!-- True button element: gets native btn attributes -->
  <button
    v-if="tag === 'button'"
    :class="btnClass"
    :type="props.type"
    :disabled="props.disabled"
    :autofocus="props.autofocus"
  >
    <slot />
  </button>

  <!-- Other elements: pure layout -->
  <component
    v-else
    :is="tag"
    :class="btnClass"
  >
    <slot />
  </component>
</template>
```


3. How to Use the Button
```vue
<script setup lang="ts">
import Button from '@/components/button/Button.vue'
</script>

<template>
  <!-- Basic button -->
  <Button>Click me</Button>

  <!-- Outline, large, wide -->
  <Button
    color="secondary"
    style="outline"
    size="lg"
    modifier="wide"
  >
    Secondary CTA
  </Button>

  <!-- Ghost small circle icon button -->
  <Button
    style="ghost"
    size="sm"
    modifier="circle"
  >
    <span class="material-icons">favorite</span>
  </Button>

  <!-- Render as a link -->
  <Button
    renderAs="a"
    style="link"
    class="no-underline"
  >
    Link-style action
  </Button>

  <!-- Render as a RouterLink -->
  <!-- (assuming global component name 'RouterLink') -->
  <Button
    :renderAs="'RouterLink'"
    to="/dashboard"
    color="primary"
  >
    Go to dashboard
  </Button>
</template>
```
---

## 🃏 Example: DaiVee Card Layout (Multi-part Component)
DaiVee is especially nice for layout components that have multiple “slots” or subcomponents, like DaisyUI’s card.

Typical pieces:

- Card.vue – top-level wrapper
- CardBody.vue
- CardTitle.vue
- CardFigure.vue
- CardActions.vue
- Card Variants

```ts
// components/card/index.ts
import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva(
  'card',
  {
    variants: {
      border: {
        default: '',
        dash: 'card-dash',
        solid: 'card-border',
      },
      imageModifier: {
        default: '',
        side: 'card-side',
        full: 'image-full',
      },
      size: {
        xs: 'card-xs',
        sm: 'card-sm',
        md: 'card-md',
        lg: 'card-lg',
        xl: 'card-xl',
      },
    },
    defaultVariants: {
      border: 'default',
      imageModifier: 'default',
      size: 'md',
    },
  },
)

export type CardVariants = VariantProps<typeof cardVariants>

```
Card.vue
```vue
<!-- components/card/Card.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVariantClasses } from '../../composables/useVariantClasses'
import { cardVariants, type CardVariants } from '.'

const props = defineProps<{
  imageModifier?: CardVariants['imageModifier']
  size?: CardVariants['size']
  border?: CardVariants['border']
  class?: HTMLAttributes['class']
}>()

const cardClass = useVariantClasses(cardVariants, props)
</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>
```


Simple Subcomponents
```vue
<!-- components/card/CardBody.vue -->
<template>
  <div class="card-body">
    <slot />
  </div>
</template>
```

```vue
<!-- components/card/CardTitle.vue -->
<template>
  <h2 class="card-title">
    <slot />
  </h2>
</template>
```

```vue
<!-- components/card/CardFigure.vue -->
<template>
  <figure class="card-figure">
    <slot />
  </figure>
</template>
```

```vue
<!-- components/card/CardActions.vue -->
<template>
  <div class="card-actions justify-end">
    <slot />
  </div>
</template>
```

Using the Card
```vue
<script setup lang="ts">
import Card from '@/components/card/Card.vue'
import CardBody from '@/components/card/CardBody.vue'
import CardTitle from '@/components/card/CardTitle.vue'
import CardFigure from '@/components/card/CardFigure.vue'
import CardActions from '@/components/card/CardActions.vue'
import Button from '@/components/button/Button.vue'
</script>

<template>
  <Card
    border="solid"
    imageModifier="side"
    size="lg"
    class="bg-base-100 shadow-xl"
  >
    <CardFigure>
      <img src="/images/example.jpg" alt="Example" />
    </CardFigure>

    <CardBody>
      <CardTitle>
        DaiVee Card
      </CardTitle>

      <p>
        This card layout is fully powered by DaisyUI classes,
        but controlled via Vue props instead of raw class strings.
      </p>

      <CardActions>
        <Button style="outline">
          Learn more
        </Button>
        <Button color="secondary">
          Get started
        </Button>
      </CardActions>
    </CardBody>
  </Card>
</template>
```

---

## 🏗️ How to Create New DaiVee Components
Here’s the general recipe to add more components (e.g. Alert, Badge, Navbar, etc.) 🔨🤖🔧

#### Step 1: Identify DaisyUI Classes & Variants

From the DaisyUI docs, collect:
 - Base class (e.g. alert)
 - Variants:
   - Color: alert-success | alert-error | alert-warning | …
   - Size: if any (e.g. alert-sm | alert-lg)
   - Layout modifiers: anything like alert-bordered, etc.


#### Step 2: Define CVA Variants
``` ts
// components/alert/index.ts
import { cva, type VariantProps } from 'class-variance-authority'

export const alertVariants = cva(
  'alert',
  {
    variants: {
      color: {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error',
      },
      size: {
        sm: 'alert-sm',
        md: 'alert-md',
        lg: 'alert-lg',
      },
      bordered: {
        false: '',
        true: 'alert-bordered',
      },
    },
    defaultVariants: {
      color: 'info',
      size: 'md',
      bordered: false,
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
```

#### Step 3: Wrap in a Vue Component
```vue
<!-- components/alert/Alert.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { alertVariants, type AlertVariants } from '.'
import { useVariantClasses } from '../../composables/useVariantClasses'

const props = defineProps<{
  color?: AlertVariants['color']
  size?: AlertVariants['size']
  bordered?: AlertVariants['bordered']
  class?: HTMLAttributes['class']
}>()

const alertClass = useVariantClasses(alertVariants, props)
</script>

<template>
  <div :class="alertClass">
    <slot />
  </div>
</template>
```

#### Step 4: Optional – Subcomponents for Layout Sections

If DaisyUI has conventional internal sections (title, icon, actions), you can mirror that, e.g.:

```vue
<!-- components/alert/AlertTitle.vue -->
<template>
  <span class="font-bold">
    <slot />
  </span>
</template>
```

```vue
<!-- components/alert/AlertActions.vue -->
<template>
  <div class="flex gap-2">
    <slot />
  </div>
</template>
```

#### Step 5: Export & Use

Create an index barrel file if you prefer:

```ts
// components/alert/index.ts
export * from './variants' // or the file where alertVariants live
export { default as Alert } from './Alert.vue'
export { default as AlertTitle } from './AlertTitle.vue'
export { default as AlertActions } from './AlertActions.vue'
```

Then in your app:

```vue
<script setup lang="ts">
import { Alert, AlertTitle, AlertActions } from '@/components/alert'
import Button from '@/components/button/Button.vue'
</script>

<template>
  <Alert color="success" bordered>
    <AlertTitle>Success</AlertTitle>
    <span>Your action was completed successfully.</span>
    <AlertActions>
      <Button size="sm" style="ghost">Undo</Button>
    </AlertActions>
  </Alert>
</template>
```
---

## 🎯 Design Principles
- Layout as props → DaisyUI configuration is expressed through typed props, not stringly-typed CSS.
- Separation of concerns → CVA handles class composition; Vue handles structure; useVariantClasses ties them together.
- Composable pieces → Multi-part components (like Card, Alert, Navbar) are broken into logical subcomponents for clarity.
- Polymorphism where it matters → renderAs lets you use the same component for buttons, links, router links, etc., while safely forwarding native attributes when appropriate.