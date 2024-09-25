import { Button, Flex, PasswordInput, Text } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '../utils/Supabase';

export const Route = createLazyFileRoute('/password-reset')({
    component: PasswordReset,
});

function PasswordReset() {
    const [inputErr, setInputErr] = useState<string>('');
    const [resetPasswordErr, setResetPasswordErr] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [resetSuccess, setResetSuccess] = useState<boolean>(false);

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            setInputErr('Passwords do not match');
            return;
        }
        const { error } = await supabase.auth.updateUser({ password: password });
        if (error) {
            setResetPasswordErr(error.message);
        } else {
            setResetPasswordErr('');
            setResetSuccess(true);
        }
    };

    return (
        <Flex
            p={30}
            direction="column"
            align="center"
        >
            <PasswordInput
                p={5}
                w={250}
                label="Password"
                error={inputErr}
                withAsterisk
                placeholder="Enter new password"
                type="password"
                onChange={(e) => {
                    setPassword(e.currentTarget.value);
                }}
            />
            <PasswordInput
                p={5}
                w={250}
                label="Confirm password"
                error={inputErr}
                withAsterisk
                placeholder="Confirm new password"
                type="password"
                onChange={(e) => {
                    setConfirmPassword(e.currentTarget.value);
                }}
            />
            {resetSuccess && (
                <Text
                    w={250}
                    ta="center"
                    style={{
                        borderRadius: '5px',
                    }}
                    bg="#00b300"
                    p={8}
                    mt={10}
                >
                    Password is reset successfully! Back to app to login.
                </Text>
            )}
            {resetPasswordErr && (
                <Text
                    style={{
                        borderRadius: '5px',
                    }}
                    bg="red"
                    p={8}
                    mt={10}
                >
                    {resetPasswordErr}
                </Text>
            )}
            <Button
                m={15}
                onClick={() => {
                    handleResetPassword();
                }}
            >
                Reset Password
            </Button>
        </Flex>
    );
}
