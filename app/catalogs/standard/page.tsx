"use client";

import React, { useState, useMemo } from "react";
import { Container, Grid, TextInput, Select, MultiSelect, Stack } from "@mantine/core";
import StampCard, { Stamp } from "@/components/StampCard";
import { DEMO_STAMPS } from "@/lib/demo-stamps"; // we'll define this later

export default function StandardCatalogPage() {
  const [search, setSearch] = useState("");
  const [topologyFilter, setTopologyFilter] = useState<string | null>(null);
  const [fdcFilter, setFdcFilter] = useState<string | null>(null);
  const [conditionFilter, setConditionFilter] = useState<string | null>(null);

  const filteredStamps = useMemo(() => {
    return DEMO_STAMPS.filter((s) => {
      const matchesSearch =
        s.country.toLowerCase().includes(search.toLowerCase()) ||
        s.catalogNumber.toLowerCase().includes(search.toLowerCase()) ||
        s.year.toString().includes(search) ||
        s.faceValue.toLowerCase().includes(search.toLowerCase()) ||
        (s.theme && s.theme.toLowerCase().includes(search.toLowerCase())) ||
        (s.tags && s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));

      const matchesTopology = topologyFilter ? s.topology === topologyFilter : true;
      const matchesFDC =
        fdcFilter === "FDC" ? s.fdc === true : fdcFilter === "No FDC" ? s.fdc === false : true;
      const matchesCondition = conditionFilter ? s.condition === conditionFilter : true;

      return matchesSearch && matchesTopology && matchesFDC && matchesCondition;
    });
  }, [search, topologyFilter, fdcFilter, conditionFilter]);

  const topologyOptions = Array.from(new Set(DEMO_STAMPS.map((s) => s.topology))).map((t) => ({
    value: t,
    label: t,
  }));

  const conditionOptions = Array.from(new Set(DEMO_STAMPS.map((s) => s.condition))).map((c) => ({
    value: c!,
    label: c!,
  }));

  return (
    <Container size="xl" py="xl">
      <Stack spacing="md">
        <TextInput
          placeholder="Search by country, catalog #, year, face value, theme..."
          label="Search stamps"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Select
              placeholder="Filter by topology"
              label="Topology"
              data={topologyOptions}
              value={topologyFilter}
              onChange={setTopologyFilter}
              clearable
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Select
              placeholder="Filter by FDC"
              label="FDC"
              data={[
                { value: "FDC", label: "FDC" },
                { value: "No FDC", label: "No FDC" },
              ]}
              value={fdcFilter}
              onChange={setFdcFilter}
              clearable
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Select
              placeholder="Filter by condition"
              label="Condition"
              data={conditionOptions}
              value={conditionFilter}
              onChange={setConditionFilter}
              clearable
            />
          </Grid.Col>
        </Grid>

        <Grid gutter="md">
          {filteredStamps.map((stamp) => (
            <Grid.Col key={stamp.id} xs={12} sm={6} md={4} lg={3}>
              <StampCard stamp={stamp} />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
