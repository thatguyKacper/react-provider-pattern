## The Provider Pattern

### Description

This module implements the **Provider Pattern** to manage global application state, specifically for UI theming (Dark/Light mode).

Instead of lifting state to the root `<App />` component, this pattern encapsulates state logic and update mechanisms within a dedicated `DarkModeProvider` component.

#### Key Architectural Benefits

- **Encapsulation**: The logic for checking and toggling the theme is contained entirely within the provider, keeping the rest of the application code clean.

- **State Injection:** By leveraging React's Context API, the provider injects dependencies (`isDarkMode`, `toggleDarkMode`) only into the components that require them via the custom hook `useDarkMode`.

- **Performance**: This structure separates the context provider from the main application layout (`App`), ensuring that global state changes trigger re-renders only in consumers, preventing unnecessary updates in the root component tree.