export interface Stamp {
  id: string;                  // unique ID
  catalogNumber: string;       // catalog ID (like Michel #1234)
  country: string;
  year: number;
  faceValue: string;           // e.g., "0.50€", "1$", etc
  topology: string;            // Rectangular, Square, Circular, Triangular
  fdc?: boolean;               // First Day Cover available
  setName?: string;            // part of a series/collection
  color?: string;              // dominant color
  perforation?: string;        // e.g., "14x14"
  watermark?: string;          // if any
  theme?: string;              // e.g., "Animals", "Historical Figures"
  condition?: string;          // mint, used, etc
  image?: string;              // URL or path
  estimatedPrice?: number;     // latest quote
  lastPriceUpdate?: string;    // ISO date
  tags?: string[];             // custom tags for search/filter
  description?: string;        // optional longer description
}