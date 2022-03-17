# React Context Crash Course

```bash
npx create-react-app my-app --template typescript
```

# Create the context

```jsx
import {useState, useEffect, createContext} from 'react'

// como hay elementos opcionales definimos la interfaz
interface IGlobalContext {
    username: string;
    roles?: string[];
}

// estado por defecto
const defaultState: IGlobalContext = {
    username: '',
};


// creamos el contexto con el generic de create context
const GlobalContext = createContext<IGlobalContext>(defaultState)

export default GlobalContext
```

