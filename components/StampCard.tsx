"use client";

import { Card, Text, Group, Badge, Stack, Image } from "@mantine/core";

export interface Stamp {
  id: string;
  catalogNumber: string;
  country: string;
  year: number;
  faceValue: string;
  topology: string;
  fdc?: boolean;
  setName?: string;
  color?: string;
  perforation?: string;
  watermark?: string;
  theme?: string;
  condition?: string;
  image?: string;
  estimatedPrice?: number;
  lastPriceUpdate?: string;
  tags?: string[];
  description?: string;
}

interface StampCardProps {
  stamp: Stamp;
}

export default function StampCard({ stamp }: StampCardProps) {
  return (
    <Card shadow="sm" p="md" radius="md" withBorder>
      <Card.Section>
        {/* <Image
          src={stamp.image || "/placeholder-stamp.png"}
          height={160}
          alt={`${stamp.country} ${stamp.year}`}
          fit="contain"
        /> */}
      </Card.Section>

      <Stack spacing="xs" mt="sm">
        <Group position="apart">
          <Text weight={600}>{stamp.country}</Text>
          {stamp.fdc && <Badge color="teal">FDC</Badge>}
        </Group>

        <Text size="sm">Catalog #: {stamp.catalogNumber}</Text>
        <Text size="sm">Year: {stamp.year}</Text>
        <Text size="sm">Face Value: {stamp.faceValue}</Text>
        <Text size="sm">Topology: {stamp.topology}</Text>
        {/* {stamp.theme && <Text size="sm">Theme: {stamp.theme}</Text>} */}
        {stamp.condition && <Text size="sm">Condition: {stamp.condition}</Text>}
        {stamp.estimatedPrice && (
          <Text size="sm" color="green">
            Price: ${stamp.estimatedPrice}
          </Text>
        )}
      </Stack>
    </Card>
  );
}
