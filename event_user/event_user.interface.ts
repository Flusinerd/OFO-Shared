import { Platform } from "../platform/platform.interface";

export interface EventUser{
  id: number;
  dates: Date[];
  platforms: Platform[]
}