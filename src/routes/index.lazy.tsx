import { Text } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <Text
            ta="center"
            p={30}
            size="md"
            fw={500}
        >
            Welcome to Safesweat Auth!
        </Text>
    );
}
