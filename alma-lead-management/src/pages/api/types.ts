export interface LeadEntry {
  name: string;
  submitted: string;
  status: "Pending" | "Reached Out";
  country: string;
}
