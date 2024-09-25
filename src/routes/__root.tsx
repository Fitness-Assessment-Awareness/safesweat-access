import { Box } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
    component: () => (
        <>
            <Box>
                <Outlet />
            </Box>

            <TanStackRouterDevtools />
        </>
    ),
});
