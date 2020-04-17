import { EventUserEntity } from "../event_user/event_user.interface";
import { PlatformEntity } from "../platform/platform.interface";

export interface CreateEventInput {
  title: string;
  users: EventUserEntity[];
  platforms: PlatformEntity[];
}