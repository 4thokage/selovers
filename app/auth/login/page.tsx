"use client";
import React, { useState } from "react";
import {
  Container,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Paper,
  Title,
  Text,
  Group,
} from "@mantine/core";
import { authClient } from "@/lib/auth-client"; // your Better Auth client

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    if (email === "admin") {
      //TODO: set user in session
    }

    try {
      const { data, error } = await authClient.signIn.email(
        {
          email,
          password,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            console.log("Logging in...");
          },
          onSuccess: (ctx) => {
            console.log("Success", ctx);
            // redirect manually if needed
            // window.location.href = ctx.url || "/dashboard";
          },
          onError: (ctx) => {
            alert(ctx.error?.message || "Login failed");
          },
        }
      );

      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={60}>
      <Paper p="xl" radius="md" withBorder>
        <Title order={2} mb="md">
          Login
        </Title>
        <Text size="sm" c="dimmed" mb="xl">
          Enter your credentials to access your account
        </Text>

        <Stack>
          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />

          <Button fullWidth mt="md" onClick={handleLogin} loading={loading}>
            Login
          </Button>

          {/* <Group position="apart" mt="md">
            <Text size="sm">
              Don&apos;t have an account? <a href="/register">Register</a>
            </Text>
            <a href="/forgot-password" style={{ fontSize: 12 }}>
              Forgot password?
            </a>
          </Group> */}
        </Stack>
      </Paper>
    </Container>
  );
}
