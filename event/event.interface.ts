import { Platform } from "../platform/platform.interface";
import { EventUser } from "../event_user/event_user.interface";

export interface Event {
  title: string;
  eventId: string;
  id: number;
  optimalDate: Date;
  optimalPlatform: Platform;
  voted_count: number;
  users: EventUser[];
}