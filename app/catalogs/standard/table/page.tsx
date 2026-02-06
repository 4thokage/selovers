"use client";

import React, { useState } from "react";
import { Container, TextInput, Stack } from "@mantine/core";
import StampTable from "@/components/StampTable";
import { DEMO_STAMPS } from "@/lib/demo-stamps";

export default function CatalogTablePage() {
  const [search, setSearch] = useState("");

  const filteredStamps = DEMO_STAMPS.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.country.toLowerCase().includes(q) ||
      s.catalogNumber.toLowerCase().includes(q) ||
      s.year.toString().includes(q) ||
      (s.theme && s.theme.toLowerCase().includes(q))
    );
  });

  return (
    <Container size="xl" py="xl">
      <Stack spacing="md">
        <TextInput
          placeholder="Search by country, catalog #, year, theme..."
          label="Search stamps"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <StampTable stamps={filteredStamps} />
      </Stack>
    </Container>
  );
}
