import { Flex, Image, Text } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';
import { AppAssets } from '../assets';

export const Route = createLazyFileRoute('/signup-success')({
    component: SignupSuccess,
});

function SignupSuccess() {
    return (
        <Flex
            p={30}
            direction="column"
            align="center"
        >
            <Text
                fw={500}
                size="md"
            >
                Email verified successfully. Back to app to login.
            </Text>
            <Image
                w={150}
                fit="contain"
                src={AppAssets.check}
            />
        </Flex>
    );
}
