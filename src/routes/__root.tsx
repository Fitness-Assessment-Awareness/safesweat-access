import { Box } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: () => (
        <>
            <Box>
                <Outlet />
            </Box>
        </>
    ),
});
