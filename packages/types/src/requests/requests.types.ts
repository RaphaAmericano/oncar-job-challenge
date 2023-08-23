import { Lead } from "types";
export interface LeadPostRequest extends Omit<Lead, "id" | "date"> {}

