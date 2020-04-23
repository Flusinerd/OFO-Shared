import { DateInput } from "../date_entity/date.input";
import { PlatformInput } from "../platform/platform.input";

export interface EventUserInput {
  dates: DateInput[];
  platforms: PlatformInput[];
  eventId: number;
}