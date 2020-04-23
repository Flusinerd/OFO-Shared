import { EventUserInput } from "../event_user/event_user.input";
import { PlatformInput } from "../platform/platform.input";

export interface CreateEventInput {
  title: string;
  users?: EventUserInput[];
  platforms?: PlatformInput[];
}