"use client"
import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Paper, GridCol } from "@mantine/core";
import { FileIcon, MixIcon, EnterIcon, RocketIcon } from "@radix-ui/react-icons";
import classes from "./home.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const features = [
    { icon: <FileIcon />, label: "Catálogo oficial de selos e FDCs" },
    { icon: <MixIcon />, label: "Sistema de trocas entre colecionadores" },
    { icon: <RocketIcon />, label: "Ferramentas de organização da sua coleção" },
  ];

  const router = useRouter();

  const goLogin = () => {
    router.push("/auth/login");
  };

  const goCatalog = () => {
    router.push("/catalogs/standard");
  };


  return (
    <Box>
      <Container size="xl" py={120}>
        <Grid gutter={40} align="center">
          <GridCol span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Group gap={"xs"}>
                <ThemeIcon size="lg" radius="md" variant="transparent">
                  <RocketIcon style={{ width: 20, height: 20 }} color="var(--mantine-primary-color-filled)" />
                </ThemeIcon>
                <Text fw={500} size="sm" style={{ letterSpacing: 1 }} tt="uppercase">
                  Descubra a Filatelia Moderna
                </Text>
              </Group>

              <Title className={classes?.title} order={1} size="h1">
                Troque e Explore Selos e Cartas/FDC
              </Title>

              <Text size="xl" c="dimmed" maw={600}>
                Bem-vindo à plataforma que conecta colecionadores de todo o mundo. Pesquise catálogos oficiais,
                gerencie sua coleção e realize trocas de selos e cartas/fdc de forma segura e rápida.
              </Text>

              <Group mt="xl">
                <Button size="lg" 
                  onClick={goLogin}
                  leftSection={<EnterIcon />} color="var(--mantine-primary-color-filled)">
                  Login
                </Button>
                <Button size="lg"
                  onClick={goCatalog}
                  variant="default" leftSection={<FileIcon />}>
                  Ver Catálogo
                </Button>
              </Group>

              <Group mt={30} gap="xl">
                {features.map((feature, index) => (
                  <Group key={index} gap="xs">
                    <ThemeIcon size="md" variant="light" color="var(--mantine-primary-color-filled)">
                      {feature.icon}
                    </ThemeIcon>
                    <Text size="sm" c="dimmed">
                      {feature.label}
                    </Text>
                  </Group>
                ))}
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 5 }}>
            <Paper
              mih={320}
              radius="md"
              p="xl"
              bg={"rgba(255, 255, 255, 0.05)"}

            >
              🎟️ TODO: IMAGEM AQUI?
            </Paper>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}
