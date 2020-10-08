import { createContext } from 'react'

export const ProductContext = createContext()
// this creates a 'context object' that include 'Provider' and 'Consumer'
// 'Provider' and 'Consumer' must be components
// Because components are capitalized in React.

export const { Provider, Consumer } = createContext()
// You can this way as well by deconstructuring it.
// For readability, it's better NOT to do deconstructuring.

// Redux use 'Context API' in under the hood

