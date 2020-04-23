import { PlatformResponse } from "../platform/platform.response";

export interface EventResponse {
  id: number;
  title: string;
  eventId: string;
  optimalDate: Date;
  optimalPlatform: PlatformResponse;
}