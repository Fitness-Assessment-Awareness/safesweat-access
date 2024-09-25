import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <MantineProvider defaultColorScheme="light">
            <RouterProvider router={router} />
        </MantineProvider>
    );
}

// eslint-disable-next-line import/no-default-export
export default App;
