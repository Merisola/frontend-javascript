// task_3/js/interface.ts

// Type alias for RowID
export type RowID = number;

// Interface for a RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional field
}
