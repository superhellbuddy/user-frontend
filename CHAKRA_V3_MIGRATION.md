# Chakra UI v3 Migration Guide

## Key Changes from v2 to v3

### 1. Stack Components - Use `gap` instead of `spacing`

❌ **v2 Syntax:**
```tsx
<VStack spacing={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>
```

✅ **v3 Syntax:**
```tsx
<VStack gap={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</VStack>
```

### 2. Container maxW Values

❌ **v2 Syntax:**
```tsx
<Container maxW="container.xl">
```

✅ **v3 Syntax:**
```tsx
<Container maxW="6xl">
// or other valid values: "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl"
```

### 3. Boolean Props - Remove `is` prefix

❌ **v2 Syntax:**
```tsx
<Button isDisabled isLoading>
```

✅ **v3 Syntax:**
```tsx
<Button disabled loading>
```

### 4. Component Structure - Use compound components

❌ **v2 Syntax:**
```tsx
import { List, ListItem } from "@chakra-ui/react"

<List>
  <ListItem>Item 1</ListItem>
</List>
```

✅ **v3 Syntax:**
```tsx
import { List } from "@chakra-ui/react"

<List.Root>
  <List.Item>Item 1</List.Item>
</List.Root>
```

### 5. Provider Setup

❌ **v2 Syntax:**
```tsx
import { ChakraProvider } from "@chakra-ui/react"

<ChakraProvider>
  <App />
</ChakraProvider>
```

✅ **v3 Syntax:**
```tsx
import { Provider } from "@/components/ui/provider"

<Provider>
  <App />
</Provider>
```

### 6. Installation Dependencies

❌ **v2 Dependencies:**
```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

✅ **v3 Dependencies:**
```bash
npm install @chakra-ui/react @emotion/react
```

### 7. Theme Customization

❌ **v2 Syntax:**
```tsx
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
})
```

✅ **v3 Syntax:**
```tsx
import { createSystem } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: "#f7fafc" },
          900: { value: "#1a202c" },
        },
      },
    },
  },
})
```

### 8. Icons - Use external libraries

❌ **v2 (chakra-icons removed):**
```tsx
import { AddIcon } from "@chakra-ui/icons"
```

✅ **v3 (use react-icons or lucide-react):**
```tsx
import { FaPlus } from "react-icons/fa"
// or
import { Plus } from "lucide-react"
```

## Component Snippets Usage

Use the Chakra CLI to add pre-built components:

```bash
# Add all snippets
npx @chakra-ui/cli snippet add

# Add specific snippet
npx @chakra-ui/cli snippet add button
```

Then import from your local components:
```tsx
import { Button } from "@/components/ui/button"
```

## Common Errors to Watch For

1. **TypeScript errors** with old prop names
2. **Spacing/gap confusion** in Stack components  
3. **Container maxW values** not being recognized
4. **Missing component imports** when using compound components
5. **Provider setup** issues causing theme not to load

## Checking Your Current Setup

Your project currently has:
- ✅ Chakra UI v3.21.1 installed
- ✅ Correct dependencies (@chakra-ui/react, @emotion/react)
- ✅ Provider properly set up in main.tsx
- ✅ UI components folder with v3 snippets
- ✅ No v2 remnants in package.json

## Next Steps

1. Review all components for v2 syntax
2. Update any Stack components to use `gap`
3. Update Container `maxW` values  
4. Remove `is` prefixes from boolean props
5. Test all routes and components 