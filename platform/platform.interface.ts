import { EventUserEntity } from "../event_user/event_user.interface";
import { EventEntity } from "../event/event.interface";

export interface PlatformEntity {
  id: number;
  title: string;
  user: EventUserEntity;
  event: EventEntity;
}