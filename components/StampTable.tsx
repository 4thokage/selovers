"use client";

import React from "react";
import { Table, Button, Badge, Group, ScrollArea } from "@mantine/core";
import { Stamp } from "./StampCard";

interface StampTableProps {
  stamps: Stamp[];
}

export default function StampTable({ stamps }: StampTableProps) {
  return (
    <ScrollArea>
      <Table highlightOnHover striped>
        <thead>
          <tr>
            <th>Country</th>
            <th>Catalog #</th>
            <th>Year</th>
            <th>Topology</th>
            <th>Mint €</th>
            <th>Used €</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stamps.map((s) => (
            <tr key={s.id}>
              <td>{s.country}</td>
              <td>{s.catalogNumber}</td>
              <td>{s.year}</td>
              <td>{s.topology}</td>
              <td>{s.estimatedPrice?.toFixed(2) || "-"}</td>
              <td>{s.estimatedPrice ? (s.estimatedPrice * 0.7).toFixed(2) : "-"}</td>
              <td>
                <Group>
                  <Button size="xs" variant="light" color="blue">
                    Trade
                  </Button>

                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
